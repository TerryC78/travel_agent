#!/usr/bin/env python3
"""South Bay Events Agent — entry point.

Resolves the upcoming weekend, researches events via the Claude API + web
search, and writes a Markdown report into reports/.

Usage:
    python agent.py                 # report for the upcoming weekend
    python agent.py --date 2026-07-24   # pretend "today" is this date

Environment:
    ANTHROPIC_API_KEY   Anthropic API key (or use `ant auth login`).
    MODEL               Optional model override (default: claude-opus-4-8).
"""

from __future__ import annotations

import argparse
import os
import sys
from datetime import date
from pathlib import Path

# Allow running as `python agent.py` from the package directory.
sys.path.insert(0, str(Path(__file__).resolve().parent))

from src import config  # noqa: E402
from src.dates import upcoming_weekend  # noqa: E402
from src.report import build_report, write_report  # noqa: E402
from src.search import research_weekend  # noqa: E402

PACKAGE_ROOT = Path(__file__).resolve().parent


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--date",
        type=date.fromisoformat,
        default=None,
        metavar="YYYY-MM-DD",
        help="Reference date to resolve the weekend from (default: today).",
    )
    parser.add_argument(
        "--model",
        default=os.environ.get("MODEL", config.DEFAULT_MODEL),
        help=f"Model to use (default: {config.DEFAULT_MODEL}).",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)

    if not (os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("ANTHROPIC_AUTH_TOKEN")):
        # The SDK can also use an `ant auth login` profile, so this is a warning
        # rather than a hard failure — but in CI it almost always means a
        # missing secret, which is worth flagging loudly.
        print(
            "WARNING: ANTHROPIC_API_KEY is not set. If you are not using an "
            "`ant auth login` profile, the API call will fail.",
            file=sys.stderr,
        )

    weekend = upcoming_weekend(args.date)
    print(f"Researching events for: {weekend.label}", file=sys.stderr)
    print(f"Model: {args.model}", file=sys.stderr)

    body = research_weekend(weekend, model=args.model)
    content = build_report(weekend, body, model=args.model)
    path = write_report(PACKAGE_ROOT, weekend, content)

    rel = path.relative_to(PACKAGE_ROOT)
    print(f"Report written to: {rel}", file=sys.stderr)

    # Emit the path on stdout so CI can pick it up (e.g. into a job summary).
    print(str(path))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
