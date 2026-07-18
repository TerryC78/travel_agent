"""Weekend date logic.

The pipeline is designed to run on a Wednesday and produce a report for the
*upcoming* weekend — Friday, Saturday, and Sunday. This module figures out
which three dates that is, relative to any reference date, so a Wednesday run
(or a manual run on any weekday) always resolves to a sensible weekend.
"""

from __future__ import annotations

from dataclasses import dataclass
from datetime import date, timedelta
from zoneinfo import ZoneInfo

from . import config

FRIDAY = 4  # date.weekday(): Monday=0 ... Sunday=6


@dataclass(frozen=True)
class Weekend:
    """The Friday/Saturday/Sunday the report covers."""

    friday: date
    saturday: date
    sunday: date

    @property
    def days(self) -> list[date]:
        return [self.friday, self.saturday, self.sunday]

    @property
    def label(self) -> str:
        """Human-readable range, e.g. 'Friday, July 24 – Sunday, July 26, 2026'."""
        start = self.friday.strftime("%A, %B %-d")
        end = self.sunday.strftime("%A, %B %-d, %Y")
        return f"{start} – {end}"

    @property
    def slug(self) -> str:
        """Filename-safe identifier, e.g. '2026-07-24_weekend'."""
        return f"{self.friday.isoformat()}_weekend"

    def day_lines(self) -> list[str]:
        """One formatted line per day, for prompts and headings."""
        return [d.strftime("%A, %B %-d, %Y") for d in self.days]


def today_local() -> date:
    """Today's date in the configured local timezone (not UTC)."""
    from datetime import datetime

    return datetime.now(ZoneInfo(config.LOCAL_TIMEZONE)).date()


def upcoming_weekend(reference: date | None = None) -> Weekend:
    """Resolve the upcoming Friday/Saturday/Sunday.

    Rules, relative to the reference date (defaults to today, local time):

    - Mon/Tue/Wed/Thu  -> the Friday of the current week and its weekend.
    - Friday           -> today and this weekend (the weekend is happening now).
    - Saturday/Sunday  -> the weekend currently in progress (this past Friday).

    This makes a Wednesday-triggered run point at the weekend two days out,
    while an accidental Saturday run still reports on the live weekend.
    """
    ref = reference or today_local()
    weekday = ref.weekday()

    if weekday <= FRIDAY:
        # Mon(0)..Fri(4): step forward to this week's Friday (0 days on Friday).
        friday = ref + timedelta(days=FRIDAY - weekday)
    else:
        # Sat(5)/Sun(6): step back to the Friday that started this weekend.
        friday = ref - timedelta(days=weekday - FRIDAY)

    return Weekend(
        friday=friday,
        saturday=friday + timedelta(days=1),
        sunday=friday + timedelta(days=2),
    )
