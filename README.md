# 🧳 Travel Agent — East Coast 2026

A self-contained, interactive trip planner for:

> **SFO → Washington, DC → New York → SFO**
> **Friday June 26 – Saturday July 4, 2026** (8 nights)

Open it on your laptop or phone and you get a tappable day-by-day itinerary,
budget estimate, booking checklist, and packing list — no install, no build
step, works offline.

## ✨ What's inside

- **Overview** — trip-at-a-glance, the cities, and key logistics (flights + the DC→NYC Amtrak).
- **Itinerary** — 9 collapsible days, each with morning/afternoon/evening plans, one-tap **Open in Maps** links, and an **embedded per-day map** (numbered pins + walking route) with an **"Open route in Google Maps"** button.
- **Stays** — your three confirmed hotels and which days they anchor.
- **Budget** — estimate that totals automatically.
- **Bookings** — a checklist of reservations, marked DONE vs TODO (saves your progress).
- **Packing** — a categorized checklist (saves your progress).
- A live **countdown** to departure on the home screen.

The per-day maps use [Leaflet](https://leafletjs.com/) + OpenStreetMap tiles (loaded from a CDN — so day maps need internet; everything else works offline). Pin coordinates live in the `PLACES` table in `data.js`.

## 🎆 The big deal about these dates

**July 4, 2026 is the 250th anniversary of US independence (America250).** You
land in New York right on the 4th, so the plan flags the headline decision —
**Macy's fireworks vs. flying home** — and how to handle the once-in-a-lifetime
(and crowded, pricey) timing in both cities.

## 🚀 How to use it

Just open `index.html` in any browser:

```bash
# macOS
open index.html
# Linux
xdg-open index.html
# Windows
start index.html
```

Or serve it locally if you prefer:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Checklist progress is stored in your browser (localStorage), so it persists
between visits on the same device.

## ✏️ Customizing the trip

Everything you'd want to change lives in **`data.js`** — dates, cities,
day-by-day blocks, budget rows, booking tasks, and the packing list. Edit it
and refresh the page; there's nothing to rebuild.

```
travel_agent/
├── index.html   # page structure
├── styles.css   # styling
├── app.js       # rendering + interactivity (countdown, checklists)
├── data.js      # ← the trip itself; edit this
└── README.md
```

## 📝 Notes

- Prices, times, and ticketing rules are **planning estimates**, not live quotes
  or bookings. Confirm everything on official sites (airlines, amtrak.com,
  recreation.gov, the Smithsonian, Statue City Cruises, etc.) before you pay.
- Built as a starting point — make it yours.

Safe travels! ✈️
