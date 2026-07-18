"""Assemble and persist the final report file."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

from . import config
from .dates import Weekend


def build_report(weekend: Weekend, body: str, model: str) -> str:
    """Wrap the model's Markdown body with a title and metadata footer."""
    generated_at = datetime.now(ZoneInfo(config.LOCAL_TIMEZONE)).strftime(
        "%Y-%m-%d %H:%M %Z"
    )
    header = (
        f"# South Bay Weekend Events\n\n"
        f"### {weekend.label}\n\n"
        f"_Covering {config.REGION_LABEL}._\n\n"
        f"---\n"
    )
    footer = (
        f"\n\n---\n\n"
        f"_Generated {generated_at} by the South Bay Events Agent "
        f"(model: `{model}`). Always confirm dates, times, and ticket "
        f"availability with the official event page before heading out._\n"
    )
    return f"{header}\n{body}{footer}"


def reports_dir(package_root: Path) -> Path:
    d = package_root / config.REPORTS_DIRNAME
    d.mkdir(parents=True, exist_ok=True)
    return d


def write_report(package_root: Path, weekend: Weekend, content: str) -> Path:
    """Write the report to reports/<weekend-slug>.md and return its path.

    Also refreshes reports/latest.md as a stable pointer to the most recent
    report, which is handy for linking or embedding.
    """
    directory = reports_dir(package_root)
    path = directory / f"{weekend.slug}.md"
    path.write_text(content, encoding="utf-8")

    latest = directory / "latest.md"
    latest.write_text(content, encoding="utf-8")

    return path
