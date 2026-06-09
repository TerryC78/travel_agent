# Auto-Research Framework: Architecture Design

A framework for running **100+ LLM agents in parallel** against a **verifiable research problem**, where agents collaborate through a shared knowledge base, candidate solutions are screened by **lightweight benchmarks** and confirmed by **heavyweight full verification**, and every component is designed to survive failures.

---

## 1. Problem Model

The framework is problem-agnostic. A research problem is plugged in by implementing one interface:

```python
class ResearchProblem(Protocol):
    def spec(self) -> str:
        """Natural-language + formal problem statement given to agents."""

    def benchmark(self, candidate: Candidate) -> BenchmarkResult:
        """Lightweight verification. Cheap (ms–seconds), possibly approximate
        or partial (subset of test cases, relaxed tolerances, proxy metrics).
        Must be sound enough to rank candidates and reject garbage."""

    def verify(self, candidate: Candidate) -> VerificationResult:
        """Heavyweight full verification. Expensive (minutes–hours),
        authoritative. Result is ground truth: pass/fail + score."""

    def fingerprint(self, candidate: Candidate) -> str:
        """Canonical hash for dedup and verification-result caching."""
```

Examples that fit this shape: program synthesis against a test suite (benchmark = 10% of tests, verify = full suite + fuzzing), mathematical constructions (benchmark = numeric check, verify = formal proof checker), algorithm discovery (benchmark = small instances, verify = full evaluation harness), kernel optimization (benchmark = correctness on small shapes, verify = full correctness + performance sweep).

The two-tier structure is the economic foundation of the whole system: **agents iterate against the cheap signal at high frequency; the expensive signal is a scarce resource that a scheduler allocates to the most promising candidates.**

---

## 2. High-Level Architecture

```
                          ┌────────────────────────────────────────────┐
                          │                ORCHESTRATOR                │
                          │  scheduler · agent supervisor · budgeter   │
                          └───────┬───────────────────────┬────────────┘
                                  │ leases tasks          │ spawns / restarts
                                  ▼                       ▼
   ┌──────────────┐      ┌─────────────────┐      ┌──────────────────────────┐
   │  TASK QUEUE  │◄─────│   AGENT POOL    │      │   VERIFICATION SERVICE   │
   │ (durable,    │      │  100–1000       │      │  ┌────────────────────┐  │
   │  leased,     │      │  stateless      │─────►│  │ Tier 1: benchmark  │  │
   │  prioritized)│      │  workers        │      │  │ sandbox fleet      │  │
   └──────────────┘      │  (Claude API +  │      │  ├────────────────────┤  │
                         │   tools, roles) │      │  │ Tier 2: full-verify│  │
                         └───────┬─────────┘      │  │ queue (scarce)     │  │
                                 │ read/write     │  └────────────────────┘  │
                                 ▼                └──────────┬───────────────┘
   ┌─────────────────────────────────────────────┐           │ authoritative
   │            SHARED KNOWLEDGE BASE            │◄──────────┘ results
   │  solution archive · insight store ·         │
   │  failure museum · leaderboard · event log   │
   └─────────────────────────────────────────────┘
```

Five subsystems, each independently scalable and restartable:

| Subsystem | Responsibility | State |
|---|---|---|
| **Orchestrator** | Scheduling, agent lifecycle, budget enforcement, phase control | Durable (DB) |
| **Task queue** | Work distribution with leases, priorities, retries | Durable (DB / Redis Streams / SQS) |
| **Agent pool** | Run agent loops; produce candidates and insights | **Stateless** — all state externalized |
| **Verification service** | Tier-1 benchmark sandboxes + Tier-2 full verification | Durable result cache |
| **Knowledge base** | Solution archive, insights, lineage, events | Durable (Postgres + object store + vector index) |

---

## 3. Agent Pool

### 3.1 Agents are stateless workers

Each agent is a process running an agentic loop against the Claude API (manual tool-use loop or the SDK tool runner). **All durable state lives outside the agent**: its current task comes from the queue, its context is hydrated from the knowledge base, and everything it produces is written back before it matters. An agent crashing mid-task loses nothing but the tokens spent on that attempt — the lease expires and another worker picks the task up.

```python
async def agent_worker(worker_id: str, role: Role):
    while not shutdown:
        task = await queue.lease(role=role, lease_ttl=600)   # 10-min lease
        if task is None:
            await asyncio.sleep(poll_interval); continue
        try:
            async with heartbeat(queue, task, every=60):     # extends lease
                result = await run_agent_loop(task, role)    # the LLM loop
                await kb.commit(result)                      # idempotent write
                await queue.complete(task)
        except Exception as e:
            await queue.fail(task, error=e)                  # retry w/ backoff
```

### 3.2 Heterogeneous roles

A homogeneous swarm of 100 identical agents converges on the same ideas and wastes parallelism. Roles split the population:

| Role | ~Share | Model / effort | Job |
|---|---|---|---|
| **Explorer** | 30% | `claude-opus-4-8`, effort `high`, adaptive thinking | Generate novel candidate approaches; explicitly steered *away* from crowded regions of the archive |
| **Exploiter** | 35% | `claude-opus-4-8`, effort `high`/`xhigh` | Take a top-K archive entry and mutate/refine it (fix a failing case, optimize a metric) |
| **Critic** | 10% | `claude-opus-4-8`, effort `high` | Analyze why benchmark-passing candidates fail full verification; write failure-mode insights |
| **Synthesizer** | 5% | `claude-opus-4-8`, effort `xhigh` | Periodically distill the insight store: merge duplicates, extract patterns, update the "current best understanding" document |
| **Hybridizer** | 10% | `claude-opus-4-8` | Crossover: combine two diverse high-scoring candidates |
| **Triager/Janitor** | 10% | `claude-haiku-4-5` / `claude-sonnet-4-6`, effort `low` | Dedup candidates, classify insights, tag archive entries, summarize event-log windows |

Role shares are orchestrator-tunable knobs; a controller adjusts them by phase (exploration-heavy early, exploitation-heavy once a frontier emerges, critic-heavy when the benchmark→verify pass-through rate drops).

### 3.3 The agent loop and its tools

Each agent task is **one bounded episode** (e.g., "produce one improved candidate descended from archive entry #4127"), not an open-ended session. Bounded episodes keep failure cheap, leases short, and prompts cacheable.

Tools exposed to the agent:

| Tool | Purpose |
|---|---|
| `search_knowledge(query, kind)` | Semantic + structured search over insights, failures, candidates |
| `get_candidate(id)` / `get_lineage(id)` | Fetch archive entries and their ancestry/diffs |
| `run_benchmark(candidate)` | Submit to Tier-1; returns score + per-case feedback (this is the agent's inner loop) |
| `submit_candidate(candidate, rationale)` | Final output: enters the archive + verification pipeline |
| `post_insight(text, tags, evidence)` | Share a finding (positive or negative) with the population |
| `code_sandbox(...)` | Scratch execution for the agent's own experiments |

Two design rules:

1. **`run_benchmark` is callable mid-episode and cheap** — agents should test-and-iterate locally many times before submitting. Budget: N benchmark calls per episode (e.g., 20).
2. **Agents never call `verify`** — full verification is allocated by the scheduler, never burned by an individual agent's judgment.

### 3.4 Claude API usage notes

- **Model**: `claude-opus-4-8` for reasoning-heavy roles, `claude-haiku-4-5` for triage. Adaptive thinking (`thinking: {"type": "adaptive"}`), effort per role as in the table; sweep `medium`/`high`/`xhigh` on a pilot run rather than assuming.
- **Prompt caching is structural, not optional.** At 100+ agents the shared prefix (problem spec + tool schemas + role instructions) is identical across thousands of calls. Layout: `tools` (frozen, sorted) → `system` = [problem spec (cached, 1h TTL), role instructions (cached)] → per-episode context (task, retrieved insights, archive entries) after the last breakpoint. Never interpolate timestamps/IDs into the system prompt. Warm the cache with one request before fanning out the fleet (cache entries are readable only after the first response starts streaming).
- **Rate limits**: a shared token-bucket gate in front of the API, sized to the org's ITPM/OTPM; agents block on it rather than each retrying 429s independently (the SDK's backoff handles residual 429s). Distinguish "API saturated" (back off globally) from "one agent failing" (retry that task).
- **Batch API** for offline, latency-tolerant bulk work (e.g., nightly re-classification of the insight store) at 50% cost.
- **Context**: episodes are bounded, so most stay well under the window; long critic/synthesizer episodes enable server-side compaction (`compact-2026-01-12` beta) rather than custom truncation.

---

## 4. Shared Knowledge Base (how agents collaborate)

Agents do **not** message each other directly. Direct agent-to-agent channels at N=100+ create O(N²) coordination, ordering problems, and a failure mode where a dead agent stalls a conversation. Instead: a **blackboard architecture** — all collaboration is mediated by the shared store, asynchronously.

### 4.1 Components

**Solution archive** — every submitted candidate with: content (object store), fingerprint, benchmark score(s), verification status, lineage (parent IDs + diff rationale), behavioral descriptor, and the submitting episode ID.

Maintain it as a **MAP-Elites-style quality–diversity archive**, not just a top-K leaderboard: bucket candidates by a behavioral descriptor (approach family, complexity class, resource profile — problem-specific, extractable by a Haiku triager), keep the best per bucket. This is what keeps 100 agents from piling onto one local optimum, and gives explorers a concrete steering signal ("these buckets are empty / stale").

**Insight store** — append-only notes: "approach X fails because Y", "benchmark case 17 is the discriminating one", "combining A's data structure with B's pruning looks promising". Each insight carries tags, evidence links (candidate IDs, benchmark runs), a confidence level, and votes/citations from other agents. Indexed for both structured query and embedding search. Synthesizer agents periodically compact this store into a ranked **"state of knowledge"** digest that gets injected into every new episode's context — this digest is the primary knowledge-sharing mechanism, because it's small enough to actually fit in every prompt.

**Failure museum** — first-class storage of *negative* results: candidates that passed benchmark but failed full verification, with the critic's post-mortem. At 100+ agents, the most expensive waste is N agents independently rediscovering the same dead end; the failure museum plus retrieval is the antidote. Episode prompts include the top-k failures most similar to the agent's current direction.

**Event log** — append-only stream of everything (task lifecycle, submissions, verification results, insights). It is simultaneously the audit trail, the replay/recovery substrate, and the metrics source.

### 4.2 Consistency model

Everything is **eventually consistent and append-only**; agents tolerate slightly stale reads by design (an agent working from a 30-second-old digest is fine). The only strongly consistent operations are:

- task lease acquisition (exactly one worker holds a lease),
- archive admission (atomic compare-and-swap per diversity bucket),
- verification-slot allocation.

All are single-row DB operations — no distributed consensus needed beyond what Postgres/Redis already provides.

### 4.3 Write idempotency

Every write is keyed by `(episode_id, artifact_kind, fingerprint)`. A retried task that re-submits the same candidate is a no-op. This is what makes "lease expires → task re-runs" safe.

---

## 5. Verification Pipeline

```
 agent submits candidate
        │
        ▼
 ┌──────────────┐  duplicate (fingerprint hit) → return cached result
 │   DEDUP /    │
 │ RESULT CACHE │
 └──────┬───────┘
        ▼
 ┌──────────────┐  fail → record + per-case feedback to archive/agent
 │   TIER 1     │
 │  benchmark   │  pass → score + descriptor → archive admission
 │  (sandboxed, │
 │   seconds)   │
 └──────┬───────┘
        ▼
 ┌──────────────┐   priority = f(benchmark score, archive novelty,
 │ TIER-2 QUEUE │                lineage success rate, staleness)
 │ (scarce slots│
 │  scheduler-  │   budget: e.g. 20 concurrent slots, preemptible
 │  allocated)  │
 └──────┬───────┘
        ▼
 ┌──────────────┐  pass → CONFIRMED result, leaderboard update,
 │   TIER 2     │          broadcast event
 │ full verify  │  fail → failure museum + critic task enqueued
 │ (min–hours)  │
 └──────────────┘
```

Key decisions:

- **Result caching by fingerprint** — verification is deterministic per candidate, so never verify the same fingerprint twice. With 100 agents, duplicate submissions are common.
- **Tier-2 admission is a scheduling policy, not FIFO.** Score candidates by expected information value: benchmark score, distance from already-verified candidates (verifying a near-duplicate of a confirmed solution is low value), and lineage track record. Reserve a small ε of slots for low-score/high-novelty candidates to keep calibrating the benchmark↔verify correlation.
- **Benchmark↔verify drift monitoring.** Track the pass-through rate (P(verify pass | benchmark pass)). If it drops, the benchmark is being Goodharted — agents are overfitting the proxy. Responses: tighten/rotate benchmark cases (hold-out rotation), spawn more critics, and feed exemplar gaming cases into the failure museum.
- **Sandboxing**: both tiers execute untrusted, agent-generated artifacts. Run in locked-down containers/microVMs (no network, CPU/memory/time rlimits, read-only rootfs). A candidate that crashes or hangs the sandbox is a *result* (fail: timeout/crash), never an outage — the sandbox fleet is disposable and auto-replaced.
- **Tier-2 checkpointing**: hours-long verifications checkpoint internal progress where the problem allows (e.g., per test-shard results), so a verifier-node failure resumes instead of restarting.

---

## 6. Failure Handling

Design stance: **every component is allowed to die at any time; correctness comes from durable state + leases + idempotency, not from components being reliable.**

| Failure | Detection | Recovery |
|---|---|---|
| Agent process crash / hang | Lease heartbeat stops | Lease expires → task returns to queue → another worker leases it. Idempotent writes make partial work harmless. |
| Agent loop livelock (LLM spinning, no progress) | Episode step/token budget exceeded | Worker self-terminates the episode, records a `budget_exceeded` failure, task retries with a *modified prompt* (include the prior transcript summary so it doesn't repeat itself) |
| Poison task (fails every attempt) | Retry count ≥ N (e.g., 3) | Quarantine to a dead-letter queue with full transcripts; a critic agent (or human) inspects; never let one task burn unbounded budget |
| Claude API 429/5xx/overload | SDK typed errors + global gate metrics | SDK retries with backoff per request; sustained 529s trigger the global gate to shed load (pause leasing) rather than letting 100 agents hammer the API |
| Benchmark sandbox crash/hang | Per-run timeout + container supervisor | Kill and record as candidate failure; replace container; rate of sandbox-killing candidates is itself a tracked metric |
| Tier-2 verifier node loss | Job lease/heartbeat on verification jobs | Job re-queued, resumes from checkpoint if available; result cache prevents re-verifying completed work |
| Knowledge-base unavailability | Health checks | Agents fail their current episode cleanly (tasks re-queue); pool effectively pauses; nothing is lost because nothing was acknowledged. KB itself is standard HA Postgres + replicated object store |
| Orchestrator crash | Process supervisor | Orchestrator is a control loop over durable state — restart and re-read. Workers keep finishing leased tasks meanwhile (degraded but alive) |
| Corrupted/adversarial knowledge (wrong insight poisoning the population) | Confidence/citation decay; critic audits; pass-through-rate drop | Insights are evidence-linked and down-weightable; the digest only promotes corroborated insights; archive entries are immutable so "undo" = stop retrieving, not delete |
| Cost runaway | Budgeter tracks $/tokens per task, role, and globally | Hard per-episode token budget (use `task_budget` for self-moderation + `max_tokens` as enforcement), per-day global budget that pauses leasing when hit |

**Crash-recovery invariant**: the system's full state is reconstructible from (task queue + event log + archive + result cache). Agents, sandboxes, and the orchestrator carry zero exclusive state.

---

## 7. Orchestrator & Run Lifecycle

The orchestrator is a small control loop, not a god-object:

1. **Task generation** — turns strategy into episodes: "refine entry X" (exploiter), "explore empty bucket B" (explorer), "post-mortem failed candidate Y" (critic), "compact insights" (synthesizer, cron-like).
2. **Phase/ratio control** — adjusts role mix and exploration temperature from metrics (archive coverage, score-improvement velocity, pass-through rate). Optionally itself an LLM call ("meta-agent") on a slow cadence (every ~15 min), with guardrail bounds on what it can change.
3. **Budgeting** — token/cost accounting, verification slot allocation, stop conditions (target score reached, budget exhausted, improvement plateau over K hours).
4. **Supervision** — worker autoscaling (queue depth → pool size), dead-letter review, drift alarms.

A **run** = (problem, config, budget). Runs are resumable: since all state is durable, `resume(run_id)` just restarts the control loop and workers.

---

## 8. Scaling Notes (100 → 1000 agents)

- The Claude API call is the bottleneck resource; everything else (Postgres, Redis, object store) loafs at this scale. 100 concurrent agents ≈ 100 in-flight requests — size the worker pool to your rate limits, not to CPU.
- Workers are `asyncio` tasks, not OS processes: one container comfortably runs 50–100 agent loops (`AsyncAnthropic` with the aiohttp backend). 100 agents ≈ 2 containers + headroom.
- Knowledge-base read amplification is handled by the digest pattern (one synthesized document instead of N agents each doing K searches) plus a short-TTL read cache.
- Diversity pressure must scale with N: at 1000 agents, widen the behavioral-descriptor space and add explicit "anti-crowding" steering (episodes are assigned distinct archive regions), or marginal agents contribute ~nothing.

---

## 9. Minimal Tech Stack (reference implementation)

| Component | Choice | Rationale |
|---|---|---|
| Language | Python 3.12, `asyncio` | SDK maturity (`anthropic[aiohttp]`), sandbox tooling |
| LLM | `claude-opus-4-8` (+ `claude-haiku-4-5` triage), adaptive thinking, prompt caching | See §3.4 |
| Task queue | Postgres (`FOR UPDATE SKIP LOCKED` + lease columns) or Redis Streams | Leases, priorities, dead-lettering, zero new infra |
| Knowledge base | Postgres (metadata, insights, lineage) + S3-compatible object store (candidate blobs) + pgvector (embedding search) | One database for all strongly consistent ops |
| Event log | Postgres append-only table → optionally Kafka/Redpanda at higher scale | Replay + metrics |
| Sandboxes | Docker/gVisor/Firecracker pool, no network, rlimits | Untrusted code execution |
| Orchestrator/workers | Plain containers under k8s or Nomad; health-checked | Supervision + autoscaling |
| Observability | OpenTelemetry traces (one trace per episode), Prometheus metrics, cost dashboard | Per-episode debuggability is essential at N=100 |

An alternative for the agent-execution layer is Anthropic's **Managed Agents** (server-managed sessions with per-session containers): it removes the worker fleet and sandbox ops at the cost of less control over the loop and scheduling. The architecture above is agnostic — Managed Agents sessions can serve as the agent pool (one session per episode, custom tools `run_benchmark`/`submit_candidate`/`post_insight` handled by your orchestrator) while the queue, knowledge base, and verification pipeline remain as designed. For 100+ tightly budget-controlled, cache-optimized loops, the self-hosted pool is the recommended default.

---

## 10. Key Design Principles (summary)

1. **Stateless agents, durable everything else** — failure handling falls out of leases + idempotent writes, not agent reliability.
2. **Blackboard, not chatter** — collaboration via shared archive/insights/digest; no agent-to-agent coupling.
3. **Two-tier verification as an economy** — cheap proxy in the agent's inner loop; the expensive oracle is scheduler-allocated by expected information value, cached by fingerprint, and monitored for proxy drift.
4. **Diversity is enforced, not hoped for** — quality–diversity archive + role heterogeneity + anti-crowding task assignment.
5. **Negative knowledge is first-class** — the failure museum prevents the dominant waste mode of large swarms: rediscovering dead ends.
6. **Bounded episodes** — short, budgeted, idempotent units of work make retries cheap, prompts cacheable, and cost controllable.
