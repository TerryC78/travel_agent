/*
 * Renders the trip and wires up interactivity: countdown, tabs, collapsible
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
  // Default is English; the real starting language is resolved at boot from
  // (1) a saved explicit choice, else (2) the browser's language.
  let LANG = "en";
  let T = TRIP;          // active (possibly merged) trip data
  let UI = UICOPY.en;    // active UI dictionary

  // Auto-detect from the browser when the user hasn't explicitly chosen yet.
  // Any Chinese locale (zh, zh-CN, zh-Hans, zh-TW, …) maps to Chinese.
  function detectLang() {
    const list = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ""];
    for (const code of list) {
      if (String(code).toLowerCase().startsWith("zh")) return "zh";
    }
    return "en";
  }

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

  // --- countdown ---
  function renderCountdown() {
    const box = $("#countdown");
    const start = new Date(T.startDate + "T00:00:00");
    const end = new Date(T.endDate + "T23:59:59");
    const now = new Date();
    box.innerHTML = "";

    if (now > end) { box.innerHTML = `<div class="cd-msg">${esc(UI.cd_home)}</div>`; return; }
    if (now >= start) { box.innerHTML = `<div class="cd-msg">${esc(UI.cd_during)}</div>`; return; }

    const days = Math.ceil((start - now) / 86400000);
    [[days, UI.cd_days], [T.cities.length, UI.cd_cities], [T.days.length, UI.cd_daysPlanned]]
      .forEach(([num, lbl]) => {
        box.appendChild(el("div", { class: "cd-box" }, `<div class="num">${num}</div><div class="lbl">${esc(lbl)}</div>`));
      });
  }

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
    const stops = [];
    d.blocks.forEach((b) => {
      if (!b.map || seen.has(b.map) || !PLACES[b.map]) return;
      seen.add(b.map);
      stops.push({ label: stopLabel(b.title), query: b.map, coord: PLACES[b.map] });
    });
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
    if (stops.length >= 2) {
      header.appendChild(el("a", {
        class: "route-btn", href: googleRouteUrl(stops), target: "_blank", rel: "noopener"
      }, esc(UI.daymap_route)));
    }
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

      const head = el("div", { class: "day-head" });
      head.appendChild(el("div", { class: "day-num" }, String(i + 1)));
      head.appendChild(el("div", { class: "dh-main" },
        `<div class="dh-date">${esc(fmtDate(d.date))}</div>
         <div class="dh-title">${esc(d.title)}</div>
         <div class="dh-city">📍 ${esc(d.city)}</div>`));
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

  // --- budget ---
  function renderBudget() {
    const root = $("#budget");
    root.innerHTML = "";
    const card = el("div", { class: "card" });
    card.appendChild(el("h2", { class: "sec-title" }, esc(UI.budget_title)));
    card.appendChild(el("p", { class: "sec-sub" }, esc(UI.budget_sub(T.travelers))));

    const table = el("table");
    table.innerHTML = `<thead><tr><th>${esc(UI.th_item)}</th><th class='num'>${esc(UI.th_low)}</th><th class='num'>${esc(UI.th_high)}</th></tr></thead>`;
    const tb = el("tbody");
    let lo = 0, hi = 0;
    T.budget.forEach((b) => {
      lo += b.low; hi += b.high;
      const tr = el("tr");
      tr.innerHTML = `<td>${esc(b.item)}</td><td class='num'>${money(b.low)}</td><td class='num'>${money(b.high)}</td>`;
      tb.appendChild(tr);
    });
    const tot = el("tr", { class: "total" });
    tot.innerHTML = `<td>${esc(UI.budget_total)}</td><td class='num'>${money(lo)}</td><td class='num'>${money(hi)}</td>`;
    tb.appendChild(tot);
    table.appendChild(tb);
    card.appendChild(table);
    card.appendChild(el("p", { class: "budget-note" }, esc(UI.budget_note)));
    root.appendChild(card);
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

    labelTabs();
    updateLangButtons();
    renderCountdown();
    renderOverview();
    renderStays();
    renderItinerary();
    renderBudget();
    renderBookings();
    renderPacking();
    ensureDayMap(0); // first day is open by default
  }

  // --- boot ---
  document.addEventListener("DOMContentLoaded", () => {
    // Precedence: explicit saved choice > browser auto-detect > English.
    const saved = localStorage.getItem("ec2026_lang");
    applyLang(saved || detectLang());
    setupTabs();
    setupLangSwitch();
    renderAll();
  });
})();
