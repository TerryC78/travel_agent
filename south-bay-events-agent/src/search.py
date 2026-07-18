"""The research step: ask Claude to find real weekend events via web search.

This is the "idea agent" at the heart of the pipeline. It hands Claude the
weekend dates, the in-scope cities, and the categories we care about, gives it
the web-search tool, and asks for a polished, ready-to-publish Markdown report.

We let Claude write the Markdown directly (rather than returning structured JSON
we then render) because web search results carry citations, and citations are
incompatible with the structured-output format constraint. Free-form Markdown
also lets the model group and prioritize events the way a good local guide
would.
"""

from __future__ import annotations

import anthropic

from . import config
from .dates import Weekend

# Web search with dynamic filtering. Supported on Opus 4.8/4.7/4.6 and Sonnet.
WEB_SEARCH_TOOL = {"type": "web_search_20260209", "name": "web_search"}

# Give the model enough room to research across several days and cities.
MAX_TOKENS = 16000
MAX_SEARCHES = 12


def _build_prompt(weekend: Weekend) -> str:
    cities = ", ".join(config.SOUTH_BAY_CITIES)
    categories = "\n".join(f"- {c}" for c in config.EVENT_CATEGORIES)
    day_lines = "\n".join(f"- {line}" for line in weekend.day_lines())

    return f"""\
You are a knowledgeable local events curator for {config.REGION_LABEL}.

Research what is happening this coming weekend and produce a polished,
ready-to-publish event report. The weekend to cover is:

{day_lines}

Focus on these cities and their immediate surroundings:
{cities}

Look for events and activities across these categories:
{categories}

Use web search to find events that are actually scheduled on the specific dates
above. Prioritize recent, verifiable listings (official venue pages, city event
calendars, Eventbrite, ticketing sites, and reputable local media). Do not
invent events; if you cannot confirm something is happening on those dates,
leave it out.

Write the report in GitHub-flavored Markdown with this structure:

1. A short intro paragraph (2–3 sentences) summarizing the vibe of the weekend
   and any standout can't-miss events.
2. A "## Highlights" section: 3–6 top picks, each a bullet with the event name
   bolded, followed by the city, date/time, a one-line description, and a link.
3. Then one "## Friday", "## Saturday", and "## Sunday" section. Under each,
   list events grouped logically. For every event include, where known:
   - the event name (bolded)
   - city / venue
   - time
   - a one-sentence description
   - a link to more info or tickets
4. A closing "## Good to Know" section with practical tips (parking, weather to
   check, family-friendly notes, free vs. ticketed).

Keep it scannable and friendly. Aim for genuinely useful, specific picks over an
exhaustive dump. Do NOT include a title heading (that is added automatically)
and do NOT wrap the whole thing in a code block."""


def research_weekend(weekend: Weekend, model: str) -> str:
    """Run the web-search research and return the report body as Markdown.

    Requires ANTHROPIC_API_KEY (or an `ant auth login` profile) in the
    environment — the Anthropic client resolves credentials automatically.
    """
    client = anthropic.Anthropic()

    # Streaming keeps the long, multi-search request under HTTP timeouts.
    with client.messages.stream(
        model=model,
        max_tokens=MAX_TOKENS,
        thinking={"type": "adaptive"},
        tools=[{**WEB_SEARCH_TOOL, "max_uses": MAX_SEARCHES}],
        messages=[{"role": "user", "content": _build_prompt(weekend)}],
    ) as stream:
        message = stream.get_final_message()

    return _extract_text(message)


def _extract_text(message: anthropic.types.Message) -> str:
    """Concatenate the text blocks from the response into one Markdown string."""
    parts = [block.text for block in message.content if block.type == "text"]
    body = "\n".join(part.strip() for part in parts if part.strip()).strip()

    if not body:
        raise RuntimeError(
            "The model returned no text content. "
            f"stop_reason={getattr(message, 'stop_reason', 'unknown')}"
        )
    return body
