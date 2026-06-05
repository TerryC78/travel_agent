# 🧳 Travel Agent — East Coast 2026

A self-contained, interactive trip planner for:

> **SFO → Washington, DC → New York → SFO**
> **Friday June 26 – Saturday July 4, 2026** (8 nights)

Open it on your laptop or phone and you get a tappable day-by-day itinerary,
weather, booking checklist, and packing list — no install, no build
step, works offline.

## ✨ What's inside

- **Overview** — trip-at-a-glance, the cities, and key logistics (flights + the DC→NYC Amtrak).
- **Itinerary** — 9 collapsible days, each with morning/afternoon/evening plans, one-tap **Open in Maps** links, and an **embedded per-day map** (numbered pins + walking route) with an **"Open route in Google Maps"** button.
- **Stays** — your three confirmed hotels and which days they anchor.
- **Weather** — Jun 28 – Jul 4 per day (per city). Shows seasonal averages now and auto-upgrades to a live forecast (free Open-Meteo API) once the dates come within ~16 days and you're online; falls back to averages offline.
- **Bookings** — a checklist of reservations, marked DONE vs TODO (saves your progress).
- **Packing** — a categorized checklist (saves your progress).
- A live **countdown** to departure on the home screen.
- **English / 中文 toggle** (top-right) — the site **auto-detects** the browser/device language on first visit (any Chinese locale → 中文, otherwise English); tap the toggle to override, and your explicit choice is remembered from then on.

The per-day maps use [Leaflet](https://leafletjs.com/) + OpenStreetMap tiles (loaded from a CDN — so day maps need internet; everything else works offline). Pin coordinates live in the `PLACES` table in `data.js`.

## 🌐 Languages (English is the source of truth)

The site is bilingual. **English (`data.js`) is always the source of truth** —
edit the trip there. Chinese is an *overlay* in **`lang.js`**:

- `TRIP_ZH` mirrors the `TRIP` structure; app.js deep-merges it onto the English
  data and **falls back to English for any field you haven't translated**. So
  you can update `data.js` freely and nothing breaks — untranslated bits just
  show in English until you add them to `lang.js`.
- `UICOPY` holds the interface labels (tabs, buttons, headings) for both `en` and `zh`.
- Map pin keys, coordinates, hotel names, and all numbers stay in English on
  purpose (so Maps/staff recognize them and totals never get mangled).

**Language resolution order** on load: a saved explicit choice (from tapping the
toggle) wins; otherwise the browser language is auto-detected (`navigator.languages`,
any `zh*` → Chinese); otherwise English. Auto-detected values are *not* persisted,
so detection keeps working each visit until the user makes an explicit choice.

To extend or fix a translation, edit the matching entry in `lang.js`. To add a
third language, add another block to `UICOPY` and a `TRIP_<xx>` overlay.

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

### 📱 On your phone (private, no hosting)

The repo is private, so it isn't published to GitHub Pages. To use it on your
phone, build a **single self-contained file** and carry it with you:

```bash
node build-standalone.js   # creates trip.html (everything inlined)
```

Then **AirDrop / email `trip.html` to yourself**, or drop it in iCloud/Files,
and open it in Safari. Nothing is published; the file is entirely yours. (The
per-day maps still need internet for map tiles; the rest works offline.)

Or serve it locally if you prefer:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Checklist progress is stored in your browser (localStorage), so it persists
between visits on the same device.

## ✏️ Customizing the trip

Everything you'd want to change lives in **`data.js`** — dates, cities,
day-by-day blocks, weather data, booking tasks, and the packing list. Edit it
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
