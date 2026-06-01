/*
 * Renders the trip from TRIP (data.js) and wires up interactivity:
 * countdown, tab navigation, collapsible days, and checklists that
 * persist in localStorage. No framework, no build step.
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
  const fmtDate = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  };
  const fmtShort = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };
  const money = (n) => "$" + n.toLocaleString("en-US");

  // --- countdown ---
  function renderCountdown() {
    const box = $("#countdown");
    const start = new Date(TRIP.startDate + "T00:00:00");
    const end = new Date(TRIP.endDate + "T23:59:59");
    const now = new Date();
    box.innerHTML = "";

    if (now > end) {
      box.innerHTML = '<div class="cd-msg">Welcome home! Hope it was unforgettable. ✈️</div>';
      return;
    }
    if (now >= start) {
      box.innerHTML = '<div class="cd-msg">🎉 You’re on the trip right now — go have fun!</div>';
      return;
    }
    const days = Math.ceil((start - now) / 86400000);
    const parts = [
      [days, "days"],
      [TRIP.cities.length, "cities"],
      [TRIP.days.length, "days planned"]
    ];
    parts.forEach(([num, lbl]) => {
      box.appendChild(el("div", { class: "cd-box" }, `<div class="num">${num}</div><div class="lbl">${lbl}</div>`));
    });
  }

  // --- overview ---
  function renderOverview() {
    const root = $("#overview");
    const hl = el("div", { class: "card" });
    hl.appendChild(el("h2", { class: "sec-title" }, "Trip at a glance"));
    TRIP.highlights.forEach((h) => {
      hl.appendChild(el("div", { class: "highlight" }, `<div>${esc(h)}</div>`));
    });
    root.appendChild(hl);

    const cityCard = el("div", { class: "card" });
    cityCard.appendChild(el("h2", { class: "sec-title" }, "Where you’ll be"));
    const chips = el("div", { class: "city-chips" });
    TRIP.cities.forEach((c) => {
      chips.appendChild(el("div", { class: "chip" },
        `<div class="city">${esc(c.name)}</div><div class="meta">${esc(c.dates)} · ${c.nights} nights</div>`));
    });
    cityCard.appendChild(chips);
    root.appendChild(cityCard);

    const logi = el("div", { class: "card" });
    logi.appendChild(el("h2", { class: "sec-title" }, "Logistics"));
    TRIP.logistics.forEach((l) => {
      logi.appendChild(el("div", { class: "highlight" },
        `<div><strong>${esc(l.label)}:</strong> <span style="color:var(--muted)">${esc(l.value)}</span></div>`));
    });
    root.appendChild(logi);
  }

  // --- stays ---
  function renderStays() {
    const root = $("#stays");
    if (!TRIP.stays) return;
    const card = el("div", { class: "card" });
    card.appendChild(el("h2", { class: "sec-title" }, "Where you’re staying"));
    card.appendChild(el("p", { class: "sec-sub" }, "All confirmed. Tap a hotel to open it in Maps."));
    TRIP.stays.forEach((s) => {
      const row = el("div", { class: "highlight" });
      row.innerHTML =
        `<div>
           <div style="font-weight:700">🏨 <a href="${mapUrl(s.hotel + " " + s.city)}" target="_blank" rel="noopener">${esc(s.hotel)}</a></div>
           <div style="color:var(--gold);font-size:13px">${esc(s.dates)} · ${s.nights} night${s.nights > 1 ? "s" : ""} · ${esc(s.city)}</div>
           <div style="color:var(--muted);font-size:14px;margin-top:2px">${esc(s.area)}</div>
         </div>`;
      card.appendChild(row);
    });
    root.appendChild(card);
  }

  // --- itinerary ---
  function renderItinerary() {
    const root = $("#itinerary");
    TRIP.days.forEach((d, i) => {
      const day = el("div", { class: "day" + (i === 0 ? " open" : "") });

      const head = el("div", { class: "day-head" });
      head.appendChild(el("div", { class: "day-num" }, String(i + 1)));
      head.appendChild(el("div", { class: "dh-main" },
        `<div class="dh-date">${esc(fmtDate(d.date))}</div>
         <div class="dh-title">${esc(d.title)}</div>
         <div class="dh-city">📍 ${esc(d.city)}</div>`));
      head.appendChild(el("div", { class: "caret" }, "▶"));
      head.addEventListener("click", () => day.classList.toggle("open"));
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
          const a = el("a", { class: "map-link", href: mapUrl(b.map), target: "_blank", rel: "noopener" }, "🗺 Open in Maps");
          what.appendChild(a);
        }
        blk.appendChild(what);
        body.appendChild(blk);
      });

      if (d.eat) body.appendChild(el("div", { class: "eat" }, `🍴 <strong>Eat:</strong> ${esc(d.eat)}`));
      if (d.tips && d.tips.length) {
        const t = el("div", { class: "tips" }, "💡 <strong>Tips</strong>");
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
    const card = el("div", { class: "card" });
    card.appendChild(el("h2", { class: "sec-title" }, "Budget estimate"));
    card.appendChild(el("p", { class: "sec-sub" }, `Rough per-person planning ballparks (USD) for ${TRIP.travelers === 1 ? "one traveler" : TRIP.travelers + " travelers"}. Not quotes — the July 4th / 250th window pushes lodging toward the high end.`));

    const table = el("table");
    table.innerHTML = "<thead><tr><th>Item</th><th class='num'>Low</th><th class='num'>High</th></tr></thead>";
    const tb = el("tbody");
    let lo = 0, hi = 0;
    TRIP.budget.forEach((b) => {
      lo += b.low; hi += b.high;
      const tr = el("tr");
      tr.innerHTML = `<td>${esc(b.item)}</td><td class='num'>${money(b.low)}</td><td class='num'>${money(b.high)}</td>`;
      tb.appendChild(tr);
    });
    const tot = el("tr", { class: "total" });
    tot.innerHTML = `<td>Estimated total / person</td><td class='num'>${money(lo)}</td><td class='num'>${money(hi)}</td>`;
    tb.appendChild(tot);
    table.appendChild(tb);
    card.appendChild(table);
    card.appendChild(el("p", { class: "budget-note" }, "Tip: book flights, Amtrak, and hotels early — holiday-weekend prices climb fast. A NYC CityPASS can trim attraction costs."));
    root.appendChild(card);
  }

  // --- checklists with localStorage ---
  function checklist(rootSel, storeKey, makeItems) {
    const root = $(rootSel);
    const saved = JSON.parse(localStorage.getItem(storeKey) || "{}");
    const progress = el("div", { class: "progress" });
    let boxes = [];

    const updateProgress = () => {
      const done = boxes.filter((b) => b.checked).length;
      progress.textContent = `${done} of ${boxes.length} done`;
    };
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
      const span = el("span", {}, esc(label));
      if (cb.checked) row.classList.add("done");
      cb.addEventListener("change", () => {
        row.classList.toggle("done", cb.checked);
        save();
      });
      row.appendChild(cb);
      row.appendChild(span);
      (groupRoot || root).appendChild(row);
      boxes.push(cb);
    });

    root.appendChild(progress);
    const reset = el("button", { class: "reset-btn" }, "Reset list");
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
      card.appendChild(el("h2", { class: "sec-title" }, "Booking checklist"));
      card.appendChild(el("p", { class: "sec-sub" }, "Lock these in ahead of time — most sell out or get pricey for the holiday."));
      root.appendChild(card);
      TRIP.bookings.forEach((b, i) => add(b, "bk" + i, card));
    });
  }

  function renderPacking() {
    checklist("#packing", "ec2026_packing", (root, add) => {
      const card = el("div", { class: "card" });
      card.appendChild(el("h2", { class: "sec-title" }, "Packing list"));
      card.appendChild(el("p", { class: "sec-sub" }, "Hot, humid, lots of walking. Check items off as you pack."));
      root.appendChild(card);
      let gi = 0;
      for (const group in TRIP.packing) {
        card.appendChild(el("h3", {}, esc(group)));
        TRIP.packing[group].forEach((item, j) => add(item, "pk" + gi + "_" + j, card));
        gi++;
      }
    });
  }

  // --- tabs ---
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

  // --- boot ---
  document.addEventListener("DOMContentLoaded", () => {
    $("#hero-title").textContent = TRIP.title;
    $("#hero-route").textContent = TRIP.subtitle;
    $("#hero-dates").textContent = `${fmtShort(TRIP.startDate)} – ${fmtShort(TRIP.endDate)}, 2026`;
    document.title = TRIP.title + " · Itinerary";
    renderCountdown();
    renderOverview();
    renderStays();
    renderItinerary();
    renderBudget();
    renderBookings();
    renderPacking();
    setupTabs();
  });
})();
