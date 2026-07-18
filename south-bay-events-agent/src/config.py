"""Configuration for the South Bay Events Agent.

Everything the agent needs to know about *where* and *what* to look for lives
here so the search prompt stays declarative and easy to tune.
"""

from __future__ import annotations

# The model used for research. Opus 4.8 is the most capable model and handles
# multi-step web research well. Override with the MODEL env var if desired.
DEFAULT_MODEL = "claude-opus-4-8"

# The "South Bay" is the southern portion of the San Francisco Bay Area.
# These are the cities/neighborhoods the agent treats as in-scope.
SOUTH_BAY_CITIES = [
    "San Jose",
    "Santa Clara",
    "Sunnyvale",
    "Mountain View",
    "Cupertino",
    "Campbell",
    "Los Gatos",
    "Saratoga",
    "Milpitas",
    "Palo Alto",
    "Los Altos",
    "Morgan Hill",
    "Gilroy",
]

# The kinds of events/activities the agent should surface. Keep this broad so a
# weekend report has something for everyone.
EVENT_CATEGORIES = [
    "live music and concerts",
    "festivals and street fairs",
    "food, wine, and farmers markets",
    "arts, theater, and museum exhibits",
    "family- and kid-friendly activities",
    "outdoor recreation, hikes, and parks events",
    "sports games and community runs",
    "tech, maker, and community meetups",
    "nightlife and comedy",
]

# How the agent should center its research geographically.
REGION_LABEL = "the South Bay area of the San Francisco Bay Area (Silicon Valley)"

# Timezone the weekend is defined in. GitHub Actions runs in UTC, but "the
# weekend" only makes sense in local Pacific time.
LOCAL_TIMEZONE = "America/Los_Angeles"

# Where generated reports are written (relative to the agent package root).
REPORTS_DIRNAME = "reports"
