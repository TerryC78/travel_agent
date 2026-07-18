# South Bay Weekend Events Agent

An "idea agent" that finds events and activities happening near the **South Bay**
(Silicon Valley / southern San Francisco Bay Area) each weekend and writes a
ready-to-read Markdown report covering **Friday, Saturday, and Sunday**.

The pipeline is designed to run automatically **every Wednesday** so you have the
upcoming weekend's plan a couple of days ahead of time.

## How it works

```
Wednesday cron  ──▶  agent.py  ──▶  Claude (Opus 4.8) + web search  ──▶  reports/<friday>_weekend.md
   (GitHub                │                                                     │
    Actions)              │                                                     └▶ reports/latest.md
                          └▶ resolves the upcoming Fri/Sat/Sun (Pacific time)
```

1. **`src/dates.py`** resolves the upcoming weekend relative to the run date. A
   Wednesday run points at that week's Friday–Sunday; a run on Sat/Sun points at
   the weekend already in progress.
2. **`src/search.py`** hands Claude the dates, the in-scope South Bay cities, and
   the event categories, and gives it the **web search** tool to find events that
   are actually scheduled on those dates.
3. **`src/report.py`** wraps the result with a title and metadata and saves it to
   `reports/`.

The list of cities and event categories lives in **`src/config.py`** — edit that
one file to retune what the agent looks for.

## Running it locally

```bash
cd south-bay-events-agent
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-...      # or use `ant auth login`

python agent.py                          # report for the upcoming weekend
python agent.py --date 2026-07-24        # pretend "today" is a given date
python agent.py --model claude-sonnet-5  # use a different model
```

The report is written to `reports/<friday-date>_weekend.md`, and
`reports/latest.md` is refreshed to point at the newest one. The report path is
printed to stdout (everything else goes to stderr) so it's easy to script.

## Running it on a schedule (GitHub Actions)

The workflow at [`.github/workflows/south-bay-events.yml`](../.github/workflows/south-bay-events.yml)
runs the pipeline:

- **On a schedule** — `0 16 * * 3` (Wednesdays, 16:00 UTC ≈ 8–9 AM Pacific).
- **On demand** — via the *Run workflow* button, with an optional reference date.

Each run generates the report, adds it to the Actions **job summary**, uploads it
as an **artifact**, and **commits** it into `reports/` on the branch.

### One-time setup

Add your Anthropic key as a repository secret so the workflow can call the API:

1. Repo **Settings → Secrets and variables → Actions → New repository secret**
2. Name: `ANTHROPIC_API_KEY`, Value: your key.

> **Note on GitHub's cron:** scheduled workflows only run from the repository's
> **default branch**, and GitHub may delay scheduled runs during periods of high
> load. Merge this workflow to your default branch for the Wednesday schedule to
> fire; until then, use *Run workflow* to trigger it manually.

## Layout

```
south-bay-events-agent/
├── agent.py              # entry point / CLI
├── requirements.txt
├── .env.example
├── reports/              # generated reports land here
└── src/
    ├── config.py         # cities, categories, model — tune the agent here
    ├── dates.py          # upcoming-weekend resolution
    ├── search.py         # Claude + web search research step
    └── report.py         # report assembly and file writing
```

## Notes & caveats

- The agent researches real listings via web search, but event details change.
  Every report ends with a reminder to confirm dates/times/tickets on the
  official event page before heading out.
- Costs are per-run (one research call using Opus 4.8 with web search). Switch to
  `--model claude-sonnet-5` to trade a little research depth for lower cost.
