/*
 * Renders the trip and wires up interactivity: tabs, collapsible
 * days, per-day maps, and checklists (persisted in localStorage).
 *
 * Localization: English (TRIP in data.js) is the SOURCE OF TRUTH. When the
 * language is set to Chinese, we deep-merge TRIP_ZH (lang.js) onto TRIP with
 * per-field fallback to English, so any untranslated field still shows in
 * English. UI chrome (labels/buttons) comes from UICOPY. No framework, no build.
 */
(function () {
  "use strict";

  // --- tiny helpers ---
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "dataset") Object.assign(n.dataset, attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mapUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const money = (n) => "$" + n.toLocaleString("en-US");
  const kmBetween = (a, b) => {
    const R = 6371, toR = (x) => (x * Math.PI) / 180;
    const dLat = toR(b[0] - a[0]), dLng = toR(b[1] - a[1]);
    const s = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a[0])) * Math.cos(toR(b[0])) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(s));
  };

  // --- language state ---
  // Default language is CHINESE. The actual starting language at boot is:
  //   (1) the user's saved explicit toggle choice, else (2) Chinese.
  let LANG = "zh";
  let T = TRIP;          // active (possibly merged) trip data
  let UI = UICOPY.zh;    // active UI dictionary

  const locale = () => (LANG === "zh" ? "zh-CN" : "en-US");
  const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString(locale(), { weekday: "long", month: "long", day: "numeric" });
  const fmtShort = (iso) => new Date(iso + "T00:00:00").toLocaleDateString(locale(), { weekday: "short", month: "short", day: "numeric" });

  // Deep-merge an English base with a Chinese overlay, falling back to English
  // for any missing/empty field. English is always the structural source.
  function deepMerge(en, zh) {
    if (zh === undefined || zh === null) return en;
    if (Array.isArray(en)) {
      if (!Array.isArray(zh)) return en;
      return en.map((item, i) => deepMerge(item, zh[i]));
    }
    if (en && typeof en === "object") {
      const out = {};
      for (const k in en) out[k] = deepMerge(en[k], zh[k]);
      return out;
    }
    if (typeof en === "string") return (typeof zh === "string" && zh.trim() !== "") ? zh : en;
    return zh !== undefined ? zh : en;
  }

  // Localize an English city name (e.g. day.city, weather city) by reusing the
  // already-translated `cities` array, so it never falls back to English.
  function cityLabel(enCity) {
    if (typeof TRIP === "undefined" || !TRIP.cities) return enCity;
    const idx = TRIP.cities.findIndex((c) => c.name === enCity);
    return (idx >= 0 && T.cities && T.cities[idx]) ? T.cities[idx].name : enCity;
  }

  // persist=true records an explicit user choice; auto-detected values are not
  // saved, so detection keeps running each visit until the user picks via the toggle.
  function applyLang(lang, persist) {
    LANG = lang === "zh" ? "zh" : "en";
    if (persist) localStorage.setItem("ec2026_lang", LANG);
    UI = UICOPY[LANG];
    T = (LANG === "zh" && typeof TRIP_ZH !== "undefined") ? deepMerge(TRIP, TRIP_ZH) : TRIP;
  }

  // Leaflet map instances per day index, lazily initialized when a day opens.
  const dayMapRecs = [];

  // --- overview ---
  function renderOverview() {
    const root = $("#overview");
    root.innerHTML = "";

    const hl = el("div", { class: "card" });
    hl.appendChild(el("h2", { class: "sec-title" }, esc(UI.ov_glance)));
    T.highlights.forEach((h) => hl.appendChild(el("div", { class: "highlight" }, `<div>${esc(h)}</div>`)));
    root.appendChild(hl);

    const cityCard = el("div", { class: "card" });
    cityCard.appendChild(el("h2", { class: "sec-title" }, esc(UI.ov_where)));
    const chips = el("div", { class: "city-chips" });
    T.cities.forEach((c) => {
      chips.appendChild(el("div", { class: "chip" },
        `<div class="city">${esc(c.name)}</div><div class="meta">${esc(c.dates)} · ${c.nights} ${esc(c.nights > 1 ? UI.nights : UI.night)}</div>`));
    });
    cityCard.appendChild(chips);
    root.appendChild(cityCard);

    const logi = el("div", { class: "card" });
    logi.appendChild(el("h2", { class: "sec-title" }, esc(UI.ov_logistics)));
    T.logistics.forEach((l) => {
      logi.appendChild(el("div", { class: "highlight" },
        `<div><strong>${esc(l.label)}:</strong> <span style="color:var(--muted)">${esc(l.value)}</span></div>`));
    });
    root.appendChild(logi);
  }

  // --- stays ---
  function renderStays() {
    const root = $("#stays");
    root.innerHTML = "";
    if (!T.stays) return;
    const card = el("div", { class: "card" });
    card.appendChild(el("h2", { class: "sec-title" }, esc(UI.stays_title)));
    card.appendChild(el("p", { class: "sec-sub" }, esc(UI.stays_sub)));
    T.stays.forEach((s) => {
      const row = el("div", { class: "highlight" });
      row.innerHTML =
        `<div>
           <div style="font-weight:700">🏨 <a href="${mapUrl(s.hotel + " " + s.city)}" target="_blank" rel="noopener">${esc(s.hotel)}</a></div>
           <div style="color:var(--gold);font-size:13px">${esc(s.dates)} · ${s.nights} ${esc(s.nights > 1 ? UI.nights : UI.night)} · ${esc(s.city)}</div>
           <div style="color:var(--muted);font-size:14px;margin-top:2px">${esc(s.area)}</div>
         </div>`;
      card.appendChild(row);
    });
    root.appendChild(card);
  }

  // --- per-day map ---
  // A short label for a stop, derived from its block title (strip dash-suffix + lead markers).
  const stopLabel = (title) => title.replace(/\s*—.*$/, "").replace(/^[✅⚠️]\s*/, "");

  function dayStops(d) {
    const seen = new Set();
    let stops = [];
    d.blocks.forEach((b) => {
      if (!b.map || seen.has(b.map) || !PLACES[b.map]) return;
      seen.add(b.map);
      stops.push({ label: stopLabel(b.title), query: b.map, coord: PLACES[b.map] });
    });
    // Drop cross-city outliers (e.g. the DC departure point on the NYC arrival
    // day) so each day's map stays focused on that day's city. Uses the median
    // point as the anchor, then keeps stops within ~1.2° (~80 mi).
    if (stops.length > 2) {
      const median = (xs) => { const s = [...xs].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };
      const mlat = median(stops.map((s) => s.coord[0]));
      const mlng = median(stops.map((s) => s.coord[1]));
      const near = stops.filter((s) => Math.abs(s.coord[0] - mlat) < 1.2 && Math.abs(s.coord[1] - mlng) < 1.2);
      if (near.length >= 2) stops = near;
    }
    return stops;
  }

  function googleRouteUrl(stops) {
    if (stops.length < 2) return mapUrl(stops[0].query);
    const pts = stops.map((s) => s.coord[0] + "," + s.coord[1]);
    return "https://www.google.com/maps/dir/?api=1&travelmode=walking" +
      "&origin=" + encodeURIComponent(pts[0]) +
      "&destination=" + encodeURIComponent(pts[pts.length - 1]) +
      (pts.length > 2 ? "&waypoints=" + encodeURIComponent(pts.slice(1, -1).join("|")) : "");
  }

  function initLeafletMap(container, stops) {
    if (!window.L || !stops.length) return null;
    const map = L.map(container, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap", maxZoom: 19
    }).addTo(map);

    const latlngs = [];
    stops.forEach((s, i) => {
      latlngs.push(s.coord);
      const icon = L.divIcon({
        className: "pin-icon",
        html: `<div class="pin"><span>${i + 1}</span></div>`,
        iconSize: [28, 28], iconAnchor: [14, 26]
      });
      L.marker(s.coord, { icon })
        .addTo(map)
        .bindPopup(`<strong>${i + 1}. ${esc(s.label)}</strong><br><a href="${mapUrl(s.query)}" target="_blank" rel="noopener">${esc(UI.openGoogleMaps)}</a>`);
    });
    if (latlngs.length > 1) {
      L.polyline(latlngs, { color: "#5b8cff", weight: 3, opacity: 0.7, dashArray: "6 6" }).addTo(map);
      map.fitBounds(latlngs, { padding: [34, 34] });
    } else {
      map.setView(latlngs[0], 14);
    }
    return map;
  }

  function renderDayMap(body, d, idx) {
    const stops = dayStops(d);
    if (stops.length < 1) return;

    const wrap = el("div", { class: "daymap" });
    const header = el("div", { class: "daymap-head" });
    header.appendChild(el("div", { class: "daymap-title" }, esc(UI.daymap_places)));
    const btns = el("div", { class: "daymap-btns" });
    // One-tap navigation to the day's first stop (from the user's current location)
    btns.appendChild(el("a", {
      class: "route-btn nav-btn",
      href: "https://www.google.com/maps/dir/?api=1&destination=" + stops[0].coord[0] + "," + stops[0].coord[1],
      target: "_blank", rel: "noopener"
    }, esc(UI.daymap_nav)));
    if (stops.length >= 2) {
      btns.appendChild(el("a", {
        class: "route-btn", href: googleRouteUrl(stops), target: "_blank", rel: "noopener"
      }, esc(UI.daymap_route)));
    }
    header.appendChild(btns);
    wrap.appendChild(header);

    const legend = el("ol", { class: "daymap-legend" });
    stops.forEach((s, i) => {
      let extra = "";
      if (i > 0) {
        const mi = kmBetween(stops[i - 1].coord, s.coord) * 0.621371;
        extra = ` <span class="leg">· ${mi < 0.1 ? esc(UI.leg_nextdoor) : esc(UI.leg_from(i, mi.toFixed(1)))}</span>`;
      }
      const li = el("li", {});
      li.innerHTML = `<a href="${mapUrl(s.query)}" target="_blank" rel="noopener">${esc(s.label)}</a>${extra}`;
      legend.appendChild(li);
    });
    wrap.appendChild(legend);

    const mapDiv = el("div", { class: "leaflet-day", id: "map-day-" + idx });
    wrap.appendChild(mapDiv);
    body.appendChild(wrap);

    dayMapRecs[idx] = { mapDiv, stops, map: null };
  }

  function ensureDayMap(idx) {
    const rec = dayMapRecs[idx];
    if (!rec || rec.map) return;
    rec.map = initLeafletMap(rec.mapDiv, rec.stops);
    if (rec.map) setTimeout(() => rec.map.invalidateSize(), 60);
  }

  // --- itinerary ---
  function renderItinerary() {
    const root = $("#itinerary");
    root.innerHTML = "";
    root.appendChild(el("h2", { class: "sec-title" }, esc(UI.itin_title)));
    root.appendChild(el("p", { class: "sec-sub" }, esc(UI.itin_sub)));

    T.days.forEach((d, i) => {
      const day = el("div", { class: "day" + (i === 0 ? " open" : "") });

      const head = el("div", { class: "day-head", dataset: { date: d.date } });
      head.appendChild(el("div", { class: "day-num" }, String(i + 1)));
      const dhMain = el("div", { class: "dh-main" },
        `<div class="dh-date">${esc(fmtDate(d.date))}</div>
         <div class="dh-title">${esc(d.title)}</div>
         <div class="dh-city">📍 ${esc(cityLabel(d.city))}</div>`);
      const badge = wxBadge(d.date); // small weather chip, synced with the Weather tab
      if (badge) dhMain.appendChild(badge);
      head.appendChild(dhMain);
      head.appendChild(el("div", { class: "caret" }, "▶"));
      head.addEventListener("click", () => {
        day.classList.toggle("open");
        if (day.classList.contains("open")) ensureDayMap(i);
      });
      day.appendChild(head);

      const body = el("div", { class: "day-body" });
      if (d.summary) body.appendChild(el("p", { class: "sec-sub" }, esc(d.summary)));

      if (d.decision) {
        const dec = el("div", { class: "decision" });
        dec.appendChild(el("div", { class: "dt" }, esc(d.decision.title)));
        dec.appendChild(el("div", {}, esc(d.decision.body)));
        const ol = el("ol");
        d.decision.options.forEach((o) => ol.appendChild(el("li", {}, esc(o))));
        dec.appendChild(ol);
        body.appendChild(dec);
      }

      d.blocks.forEach((b) => {
        const blk = el("div", { class: "block" });
        blk.appendChild(el("div", { class: "when" }, esc(b.time)));
        const what = el("div", { class: "what" });
        what.appendChild(el("div", { class: "bt" }, esc(b.title)));
        what.appendChild(el("div", { class: "bd" }, esc(b.detail)));
        if (b.map) {
          what.appendChild(el("a", { class: "map-link", href: mapUrl(b.map), target: "_blank", rel: "noopener" }, esc(UI.openMaps)));
        }
        blk.appendChild(what);
        body.appendChild(blk);
      });

      renderDayMap(body, d, i);

      if (d.eat) body.appendChild(el("div", { class: "eat" }, `🍴 <strong>${esc(UI.eat_label)}:</strong> ${esc(d.eat)}`));
      if (d.tips && d.tips.length) {
        const t = el("div", { class: "tips" }, `💡 <strong>${esc(UI.tips_label)}</strong>`);
        const ul = el("ul");
        d.tips.forEach((tip) => ul.appendChild(el("li", {}, esc(tip))));
        t.appendChild(ul);
        body.appendChild(t);
      }

      day.appendChild(body);
      root.appendChild(day);
    });
  }

  // --- weather ---
  // Map a WMO weather code (Open-Meteo / our normals) to an emoji + label.
  function wxIcon(code) {
    const en = LANG === "en";
    if (code === 0) return { emoji: "☀️", label: en ? "Clear" : "晴" };
    if (code <= 2) return { emoji: "🌤", label: en ? "Mostly sunny" : "晴间多云" };
    if (code === 3) return { emoji: "☁️", label: en ? "Cloudy" : "多云" };
    if (code >= 45 && code <= 48) return { emoji: "🌫", label: en ? "Fog" : "雾" };
    if (code >= 51 && code <= 57) return { emoji: "🌦", label: en ? "Drizzle" : "毛毛雨" };
    if (code >= 61 && code <= 67) return { emoji: "🌧", label: en ? "Rain" : "有雨" };
    if (code >= 71 && code <= 77) return { emoji: "🌨", label: en ? "Snow" : "雪" };
    if (code >= 80 && code <= 82) return { emoji: "🌦", label: en ? "Showers" : "阵雨" };
    if (code >= 95) return { emoji: "⛈", label: en ? "Thunderstorms" : "雷阵雨" };
    return { emoji: "🌡", label: en ? "Mixed" : "多变" };
  }

  // Build the list of trip dates from WEATHER.startDate..endDate (inclusive).
  function weatherDates() {
    const out = [];
    const d = new Date(WEATHER.startDate + "T00:00:00");
    const end = new Date(WEATHER.endDate + "T00:00:00");
    while (d <= end) {
      out.push(d.toISOString().slice(0, 10));
      d.setDate(d.getDate() + 1);
    }
    return out;
  }

  // Shared weather state: per-date {hi, lo, code, rainChance, live, city}, plus
  // whether any live data arrived and when. The itinerary badges, packing advice,
  // and Weather tab all read from here so they stay in sync.
  const WX = { byDate: {}, anyLive: false, updatedAt: null };

  // Seed WX from seasonal normals (available immediately, works offline).
  function seedWeatherNormals() {
    if (typeof WEATHER === "undefined") return;
    weatherDates().forEach((iso) => {
      const city = WEATHER.dayCity[iso];
      const n = WEATHER.normals[city] || {};
      WX.byDate[iso] = { hi: n.hi, lo: n.lo, code: n.code, rainChance: n.rainChance, live: false, city };
    });
  }

  // Turn a day's weather into packing advice keys (rain/storm/hot/sun/mild).
  function wxAdviceKeys(w) {
    if (!w) return [];
    const keys = [];
    if (w.code >= 95) keys.push("storm");
    else if ((w.code >= 51 && w.code <= 82) || (w.rainChance != null && w.rainChance >= 40)) keys.push("rain");
    if (w.hi != null && w.hi >= 85) keys.push("hot");
    if (w.code <= 1 && w.hi != null && w.hi >= 80) keys.push("sun");
    if (!keys.length) keys.push("mild");
    return keys;
  }

  // A tiny inline badge (emoji + hi/lo + optional rain%) for the itinerary header.
  function wxBadge(iso) {
    const w = WX.byDate[iso];
    if (!w || w.hi == null) return null;
    const ic = wxIcon(w.code);
    const badge = el("div", { class: "wx-badge" + (w.live ? " live" : "") });
    badge.title = ic.label + (w.live ? "" : " · " + UI.weather_normal);
    badge.innerHTML =
      `<span class="wxb-emoji">${ic.emoji}</span>` +
      `<span class="wxb-temp">${Math.round(w.hi)}°/${Math.round(w.lo)}°</span>` +
      (w.rainChance != null && w.rainChance >= 30 ? `<span class="wxb-rain">💧${Math.round(w.rainChance)}%</span>` : "");
    return badge;
  }

  // Format the "last updated" time in the active locale.
  function fmtUpdated(d) {
    return d.toLocaleString(locale(), { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
  }

  // Render one day's weather row. `data` has {hi, lo, code, rainChance, live}.
  function weatherRow(iso, city, data) {
    const ic = wxIcon(data.code);
    const row = el("div", { class: "wx-row" });
    const tag = data.live
      ? `<span class="wx-tag live">${esc(UI.weather_live)}</span>`
      : `<span class="wx-tag">${esc(UI.weather_normal)}</span>`;
    row.innerHTML =
      `<div class="wx-emoji">${ic.emoji}</div>
       <div class="wx-main">
         <div class="wx-date">${esc(fmtDate(iso))} · ${esc(city)}</div>
         <div class="wx-cond">${esc(ic.label)} ${tag}</div>
       </div>
       <div class="wx-temps">
         <span class="wx-hi">${Math.round(data.hi)}°</span>
         <span class="wx-lo">${Math.round(data.lo)}°</span>
         ${data.rainChance != null ? `<span class="wx-rain">💧${Math.round(data.rainChance)}%</span>` : ""}
       </div>`;
    return row;
  }

  // Render the Weather tab from shared WX state (seeded with normals, possibly
  // upgraded to live), plus a "last updated" line and weather-based packing tips.
  function renderWeather() {
    const root = $("#weather");
    root.innerHTML = "";
    if (typeof WEATHER === "undefined") return;
    const dates = weatherDates();

    const card = el("div", { class: "card" });
    card.appendChild(el("h2", { class: "sec-title" }, "🌦 " + esc(UI.weather_title)));
    card.appendChild(el("p", { class: "sec-sub" }, esc(UI.weather_sub)));

    const list = el("div", { class: "wx-list" });
    dates.forEach((iso) => list.appendChild(weatherRow(iso, cityLabel(WX.byDate[iso].city), WX.byDate[iso])));
    card.appendChild(list);

    // "Last updated" line: live timestamp, or a note that these are averages.
    const updated = el("p", { class: "wx-updated" },
      WX.anyLive && WX.updatedAt ? esc(UI.weather_updated(fmtUpdated(WX.updatedAt))) : esc(UI.weather_updatedNormal));
    card.appendChild(updated);

    const status = el("p", { class: "wx-status" }, WX.anyLive ? "" : esc(UI.weather_loading));
    card.appendChild(status);
    root.appendChild(card);

    // Weather-driven packing advice (deduped across the whole trip window).
    const adviceCard = el("div", { class: "card" });
    adviceCard.appendChild(el("h2", { class: "sec-title" }, "🎒 " + esc(UI.weather_packTitle)));
    const seen = new Set();
    const ul = el("ul", { class: "wx-advice" });
    dates.forEach((iso) => wxAdviceKeys(WX.byDate[iso]).forEach((k) => {
      if (seen.has(k)) return;
      seen.add(k);
      ul.appendChild(el("li", {}, esc(UI.wxAdvice[k])));
    }));
    adviceCard.appendChild(ul);
    root.appendChild(adviceCard);

    if (!WX.anyLive) fetchLiveWeather();
  }

  // Try Open-Meteo (free, no key). On success, update shared WX state and refresh
  // every weather-dependent view; on failure/offline, the normals already shown stay.
  function fetchLiveWeather() {
    const status = $("#weather .wx-status");
    if (!navigator.onLine) { if (status) status.textContent = UI.weather_offline; return; }

    const dates = weatherDates();
    const cities = Array.from(new Set(dates.map((iso) => WEATHER.dayCity[iso])));
    const reqs = cities.map((city) => {
      const [lat, lon] = WEATHER.coords[city];
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max` +
        `&temperature_unit=fahrenheit&timezone=America%2FNew_York` +
        `&start_date=${WEATHER.startDate}&end_date=${WEATHER.endDate}`;
      return fetch(url).then((r) => r.json()).then((j) => ({ city, j }));
    });

    Promise.all(reqs).then((results) => {
      const byCity = {};
      results.forEach(({ city, j }) => { if (j && j.daily && j.daily.time) byCity[city] = j.daily; });

      let liveCount = 0;
      dates.forEach((iso) => {
        const daily = byCity[WEATHER.dayCity[iso]];
        if (!daily) return;
        const di = daily.time.indexOf(iso);
        if (di < 0) return;
        const hi = daily.temperature_2m_max[di], lo = daily.temperature_2m_min[di];
        if (hi == null || lo == null) return;
        WX.byDate[iso] = {
          hi, lo,
          code: daily.weather_code[di],
          rainChance: daily.precipitation_probability_max ? daily.precipitation_probability_max[di] : null,
          live: true, city: WEATHER.dayCity[iso]
        };
        liveCount++;
      });

      if (liveCount > 0) {
        WX.anyLive = true;
        WX.updatedAt = new Date();
        renderWeather();         // redraw tab with live rows + timestamp + advice
        refreshItineraryBadges(); // sync the per-day badges in the Itinerary tab
      } else if (status) {
        status.textContent = UI.weather_offline;
      }
    }).catch(() => { if (status) status.textContent = UI.weather_offline; });
  }

  // Update the small weather badge in each itinerary day header in place.
  function refreshItineraryBadges() {
    document.querySelectorAll(".day-head").forEach((head) => {
      const iso = head.dataset.date;
      if (!iso) return;
      const old = head.querySelector(".wx-badge");
      const fresh = wxBadge(iso);
      if (old && fresh) old.replaceWith(fresh);
      else if (old && !fresh) old.remove();
      else if (!old && fresh) head.querySelector(".dh-main").appendChild(fresh);
    });
  }

  // --- checklists with localStorage (keys are index-based, so state survives language switches) ---
  function checklist(rootSel, storeKey, makeItems) {
    const root = $(rootSel);
    root.innerHTML = "";
    const saved = JSON.parse(localStorage.getItem(storeKey) || "{}");
    const progress = el("div", { class: "progress" });
    const boxes = [];

    const updateProgress = () => { progress.textContent = UI.progress(boxes.filter((b) => b.checked).length, boxes.length); };
    const save = () => {
      const state = {};
      boxes.forEach((b) => (state[b.dataset.key] = b.checked));
      localStorage.setItem(storeKey, JSON.stringify(state));
      updateProgress();
    };

    makeItems(root, (label, key, groupRoot) => {
      const row = el("label", { class: "check" });
      const cb = el("input", { type: "checkbox" });
      cb.dataset.key = key;
      cb.checked = !!saved[key];
      if (cb.checked) row.classList.add("done");
      cb.addEventListener("change", () => { row.classList.toggle("done", cb.checked); save(); });
      row.appendChild(cb);
      row.appendChild(el("span", {}, esc(label)));
      (groupRoot || root).appendChild(row);
      boxes.push(cb);
    });

    root.appendChild(progress);
    const reset = el("button", { class: "reset-btn" }, esc(UI.reset));
    reset.addEventListener("click", () => {
      boxes.forEach((b) => { b.checked = false; b.closest(".check").classList.remove("done"); });
      save();
    });
    root.appendChild(reset);
    updateProgress();
  }

  function renderBookings() {
    checklist("#bookings", "ec2026_bookings", (root, add) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h2", { class: "sec-title" }, esc(UI.book_title)));
      card.appendChild(el("p", { class: "sec-sub" }, esc(UI.book_sub)));
      root.appendChild(card);
      T.bookings.forEach((b, i) => add(b, "bk" + i, card));
    });
  }

  function renderPacking() {
    checklist("#packing", "ec2026_packing", (root, add) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h2", { class: "sec-title" }, esc(UI.pack_title)));
      card.appendChild(el("p", { class: "sec-sub" }, esc(UI.pack_sub)));
      root.appendChild(card);
      let gi = 0;
      for (const group in T.packing) {
        const heading = (UI.packGroups && UI.packGroups[group]) || group;
        card.appendChild(el("h3", {}, esc(heading)));
        T.packing[group].forEach((item, j) => add(item, "pk" + gi + "_" + j, card));
        gi++;
      }
    });
  }

  // --- tabs (listeners attached once; labels refreshed per render) ---
  function setupTabs() {
    const buttons = document.querySelectorAll("nav.tabs button");
    const sections = document.querySelectorAll("main section");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        sections.forEach((s) => s.classList.remove("active"));
        btn.classList.add("active");
        $("#" + btn.dataset.target).classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function labelTabs() {
    document.querySelectorAll("nav.tabs button").forEach((btn) => {
      const key = "tab_" + btn.dataset.target;
      if (UI[key]) btn.textContent = UI[key];
    });
  }

  // --- language switch ---
  function setupLangSwitch() {
    document.querySelectorAll("#langSwitch button").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lang === LANG) return;
        applyLang(btn.dataset.lang, true); // explicit choice — persist it
        renderAll();
      });
    });
  }
  function updateLangButtons() {
    document.querySelectorAll("#langSwitch button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === LANG);
    });
  }

  // --- render everything (called on boot and on language switch) ---
  function renderAll() {
    // tear down old map instances before rebuilding the DOM
    dayMapRecs.forEach((r) => { if (r && r.map) r.map.remove(); });
    dayMapRecs.length = 0;

    document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
    document.title = T.title + UI.docTitle;
    $("#hero-title").textContent = T.title;
    $("#hero-route").textContent = T.subtitle;
    $("#hero-dates").textContent = UI.heroDates(fmtShort(T.startDate), fmtShort(T.endDate));
    const footer = $("#siteFooter");
    if (footer && UI.footer) footer.textContent = UI.footer;

    labelTabs();
    updateLangButtons();
    renderOverview();
    renderStays();
    renderItinerary();
    renderWeather();
    renderBookings();
    renderPacking();
    ensureDayMap(0); // first day is open by default
  }

  // --- boot ---
  document.addEventListener("DOMContentLoaded", () => {
    // Default to Chinese; a saved explicit toggle choice still wins.
    const saved = localStorage.getItem("ec2026_lang");
    applyLang(saved || "zh");
    seedWeatherNormals(); // populate WX with averages before first render
    setupTabs();
    setupLangSwitch();
    renderAll();
  });
})();
