/*
 * Trip data for the East Coast trip: SFO -> Washington DC -> New York -> SFO
 * Dates: Friday June 26 - Saturday July 4, 2026 (8 nights)
 *
 * This is the single source of truth for the itinerary website.
 * Edit anything here and refresh the page - no build step required.
 * ✅ = confirmed/booked.  ⚠️ = needs a reservation.
 */

const TRIP = {
  title: "East Coast 2026",
  subtitle: "SFO → Washington DC → New York → SFO",
  startDate: "2026-06-26", // Friday
  endDate: "2026-07-04", // Saturday (the 250th of July!)
  travelers: 2,

  // Big-picture context worth knowing before you go.
  highlights: [
    "🎆 July 4, 2026 is the 250th anniversary of US independence (“America250” / Semiquincentennial). Expect once-in-a-lifetime celebrations — and bigger crowds, tighter security, and higher prices in both DC and NYC.",
    "✈️ Your July 4 is a travel day: JFK → SFO departs 6:55pm, so you’ll be airborne during Macy’s fireworks. That trade-off is already settled by the booking — see the July 4 note.",
    "⛵ Sail4th 250 (Jul 3–8): 30+ tall ships and 40+ naval vessels sail into New York Harbor and circle the Statue of Liberty — a once-in-a-generation maritime parade overlapping your NYC days.",
    "🚆 You take the train DC → NYC (Amtrak, ~3½ hrs into the new Moynihan Train Hall) — far better than flying that leg.",
    "🏛 Most Smithsonian museums in DC are FREE; your three reserved museums (Air & Space, NMAAHC, Holocaust) are all locked in.",
    "☀️ Late June / early July on the East Coast is hot and humid (high 80s–90s°F, afternoon thunderstorms). Pack light, breathable clothes and stay hydrated."
  ],

  cities: [
    { name: "Washington, DC", nights: 4, dates: "Jun 26–30" },
    { name: "New York City", nights: 4, dates: "Jun 30 – Jul 4" }
  ],

  // ---- Where you're staying (confirmed) ----
  stays: [
    { hotel: "Hyatt Place Washington DC / White House", city: "Washington, DC", dates: "Jun 26–30", nights: 4, area: "Downtown by the White House — walkable to the Mall and Metro." },
    { hotel: "Candlewood Suites New York City Times Square", city: "New York City", dates: "Jun 30 – Jul 4", nights: 4, area: "One Midtown base for all four nights — steps from Times Square, the Empire State Building, and the Theater District. No mid-trip hotel switch." }
  ],

  // ---- Day-by-day itinerary ----
  // Each block has a Google Maps search query ("map") so you can tap straight into directions.
  days: [
    {
      date: "2026-06-26",
      city: "Washington, DC",
      title: "Fly SFO → DC · Arrive at dinnertime",
      summary: "Cross-country travel day — you land at 5:59pm, so tonight is check-in, dinner, and a gentle first look at the White House nearby.",
      blocks: [
        { time: "9:39 AM", title: "✅ Fly SFO → Washington (DCA)", detail: "Booked: SFO → Reagan National (DCA), departs 9:39am PT, arrives 5:59pm ET (~5h20m nonstop + 3h time change). DCA is the closest airport to downtown — ~15 min to your hotel.", map: "Ronald Reagan Washington National Airport" },
        { time: "Evening", title: "✅ Check in: Hyatt Place DC / White House", detail: "From DCA, take Metro (Blue/Yellow line) or a ~15-min cab to the hotel near the White House. Drop bags and freshen up — you’ll be hungry and a little jet-lagged, so keep tonight easy.", map: "Hyatt Place Washington DC White House" },
        { time: "Night", title: "Dinner + White House by night", detail: "Dinner downtown near the hotel, then if you’ve got any energy, stroll to the White House (north side, Lafayette Square) — lit up and quiet at night. Summer light lingers past 8:30pm.", map: "The White House" }
      ],
      eat: "Dinner near the hotel / downtown (14th St NW has lots of options). First-night-easy — don’t over-plan.",
      tips: ["Hydrate on the flight — DC humidity hits hard.", "Set up SmarTrip / phone tap for the Metro at the airport.", "You land at dinnertime, so save the big monuments for an evening later in the DC leg."]
    },
    {
      date: "2026-06-27",
      city: "Washington, DC",
      title: "Museums day 1 · Air, space & natural sciences",
      summary: "South-Mall Smithsonians, anchored by your 11am Air & Space tickets. Everything else today is a free walk-in.",
      blocks: [
        { time: "11:00 AM", title: "✅ National Air & Space Museum (2 tickets booked)", detail: "Your timed-entry passes are for 11:00am — arrive ~10:50 for security. Heads-up: as of late June 2026 only about HALF the museum is open (8 all-new galleries + the renovated planetarium); the big 50th-anniversary reopening of 5 more galleries lands July 1, just after you leave. Still a must-see.", map: "National Air and Space Museum Washington DC" },
        { time: "Afternoon", title: "National Museum of Natural History — free walk-in", detail: "Walk straight in (free, no pass). Hope Diamond, the dinosaur & fossil halls, the rotunda elephant, the ocean hall. Give it ~2 hours.", map: "National Museum of Natural History Washington DC" },
        { time: "Late afternoon", title: "National Gallery of Art — free walk-in", detail: "Free, no pass. West Building old masters (the only Leonardo da Vinci in the Americas) or cool off in the underground concourse and Sculpture Garden. Skip if you’re museumed-out.", map: "National Gallery of Art" },
        { time: "Evening", title: "Monuments after dark", detail: "The memorials are floodlit, gorgeous, and cooler at night. Stroll the WWII, Lincoln, and Washington Monument grounds, then dinner in Penn Quarter.", map: "Lincoln Memorial Washington DC" }
      ],
      eat: "Quick lunch from a Mall food truck or the Natural History café; dinner in Penn Quarter / Chinatown.",
      tips: ["Air & Space is booked for 11:00am — arrive ~10:50 for security.", "With a late-morning museum slot, do Natural History + the National Gallery after, then monuments at night.", "Saturday is the busiest museum day — the walk-ins are calmer earlier vs. mid-afternoon."]
    },
    {
      date: "2026-06-28",
      city: "Washington, DC",
      title: "Museums day 2 · The American story",
      summary: "Two reserved museums anchor the day: NMAAHC at 11am, the Holocaust Museum at 3:30pm. Both are heavy — pace yourself.",
      blocks: [
        { time: "11:00 AM", title: "✅ African American History & Culture / NMAAHC (2 tickets booked)", detail: "Your timed passes are for 11:00am — arrive ~10:50 for security. Start in the underground History Galleries and work upward; it’s chronological and powerful. Give it ~3 hours, with lunch at Sweet Home Café inside.", map: "National Museum of African American History and Culture" },
        { time: "~2:00 PM", title: "National Museum of American History — free walk-in (if time)", detail: "Right nearby, no reservation. This is today’s flex stop: if NMAAHC runs long, pop in just for the Star-Spangled Banner and ‘American Democracy’ (on-theme for the 250th), or skip it and rest before the Holocaust Museum.", map: "National Museum of American History" },
        { time: "3:30 PM", title: "✅ US Holocaust Memorial Museum — Permanent Exhibition (2 tickets booked)", detail: "Booked for the 3:30–3:45pm entry window at 100 Raoul Wallenberg Pl SW (~12-min walk from American History). The Permanent Exhibition runs ~2–3 hrs and is deeply moving; last entry 4:30pm, museum closes 5:30. Leave quiet time after.", map: "United States Holocaust Memorial Museum" },
        { time: "Evening", title: "The Wharf or U Street", detail: "Decompress with waterfront seafood at The Wharf (~15 min away), or U Street for live jazz and Ben’s Chili Bowl.", map: "The Wharf Washington DC" }
      ],
      eat: "Sweet Home Café inside NMAAHC for lunch; The Wharf or U Street for dinner.",
      tips: ["Your two fixed times: NMAAHC 11:00am, Holocaust 3:30pm. American History in between is optional — drop it if you’re running behind.", "NMAAHC + Holocaust in one day is emotionally intense — go easy and leave space after.", "It’s a ~12-min walk to the Holocaust Museum — leave the NMAAHC/American History area by ~3:15pm."]
    },
    {
      date: "2026-06-29",
      city: "Washington, DC",
      title: "Arlington, Georgetown & the other DC",
      summary: "Step off the Mall: solemn history in the morning, charming streets in the afternoon.",
      blocks: [
        { time: "Morning", title: "Arlington National Cemetery", detail: "Tomb of the Unknown Soldier changing of the guard, JFK gravesite & eternal flame, Arlington House views back over DC. Reachable by Metro (Blue Line).", map: "Arlington National Cemetery" },
        { time: "Afternoon", title: "Georgetown", detail: "Historic cobblestone streets, the C&O Canal, waterfront park, and shopping along M St & Wisconsin Ave. Get a cupcake if that’s your thing.", map: "Georgetown Washington DC" },
        { time: "Evening", title: "Pack & prep for the train", detail: "Early-ish night back near the White House. Your Amtrak is booked for 11:06am tomorrow — download the tickets, repack, and set out clothes for the train.", map: "Hyatt Place Washington DC White House" }
      ],
      eat: "Lunch in Georgetown (waterfront patios); casual dinner near your hotel.",
      tips: ["Arlington involves a lot of walking on hills — comfortable shoes again.", "Save your Amtrak tickets to the app tonight; Union Station is ~10 min from the hotel."]
    },
    {
      date: "2026-06-30",
      city: "New York City",
      title: "Amtrak DC → NYC · Empire State & Times Square",
      summary: "Train into Moynihan, check into your Times Square base (home for all 4 nights), then the Empire State Building and Times Square at night.",
      blocks: [
        { time: "11:06 AM", title: "✅ Amtrak: Washington → New York (2 tickets booked)", detail: "Departs Washington Union Station 11:06am, arrives Moynihan Train Hall at Penn Station ~2:34pm (3h 28m). Moynihan is the stunning skylit hall — far nicer than old Penn. Sit on the left/west side leaving DC for water views. Board ~20 min early.", map: "Washington Union Station" },
        { time: "~2:45 PM", title: "✅ Check in: Candlewood Suites Times Square", detail: "Moynihan/Penn Station to the hotel is a ~10-min walk or one quick subway stop — no downtown transfer. Drop bags and reset. This is your single base for all four NYC nights, so unpack properly.", map: "Candlewood Suites New York City Times Square" },
        { time: "5:00 PM", title: "Empire State Building — 🎟️ Go City pass", detail: "Walk ~8 min to the Empire State Building (covered by your Go City pass). Late-afternoon into dusk is a great time — you catch daylight, sunset, and the city lighting up from the 86th-floor deck. Reserve a time slot in the Go City app to skip lines.", map: "Empire State Building" },
        { time: "Evening", title: "Times Square at night + dinner", detail: "First taste of Times Square fully lit (you’re staying right here, so you’ll pass through often). Dinner is far better a few blocks west in Hell’s Kitchen (9th Ave) than in the Square itself.", map: "Times Square New York" }
      ],
      eat: "Dinner in Hell’s Kitchen (9th Ave) — huge range, walkable from the hotel.",
      tips: ["Set up OMNY tap-to-pay (phone/card) for the subway before you arrive.", "Penn Station to the hotel is walkable — no need to figure out the subway with luggage.", "Empire State + One World (Jul 1) + Top of the Rock (Jul 2) are all on your Go City pass — reserve slots in the app.", "Heads up: DC’s ‘Salute to America’ 250th parade & fireworks are July 4 — after you’ve left. New York is your finale."]
    },
    {
      date: "2026-07-01",
      city: "New York City",
      title: "Liberty, Ellis, 9/11 & One World",
      summary: "A full, well-sequenced downtown day with almost no backtracking: early ferry to the islands, 9/11 in the afternoon, then One World Observatory next door — home to Times Square by night.",
      blocks: [
        { time: "6:30 AM", title: "Wake up · coffee & a muffin", detail: "Up at 6:30, wash up, grab coffee + a muffin in the lobby. Early start = you ride the very first ferry and beat both the crowds and the midday heat.", map: "Candlewood Suites New York City Times Square" },
        { time: "7:40 AM", title: "Uber → Battery Park (~18 min)", detail: "Uber down to Battery Park. Early morning traffic is light, so it’s a quick ride from Times Square.", map: "Candlewood Suites New York City Times Square" },
        { time: "8:00 AM", title: "Arrive Battery Park · find Castle Clinton", detail: "Head to Castle Clinton — the round red-sandstone fort — which is where ferry boarding and ticketing are based.", map: "Battery Park New York" },
        { time: "8:15 AM", title: "Pick up boarding passes", detail: "Collect your boarding passes for the Pedestal Access tour.", map: "Battery Park New York" },
        { time: "8:30 AM", title: "Security screening", detail: "Airport-style security before boarding — don’t bring large bags; they’ll slow you down or be turned away.", map: "Battery Park New York" },
        { time: "9:00 AM", title: "✅ First ferry → Liberty Island", detail: "Booked Pedestal Access tour. Board the first ferry of the day from the New York side to Liberty Island.", map: "Battery Park New York" },
        { time: "9:20–11:15 AM", title: "Liberty Island: pedestal + museum + photos", detail: "Up to the pedestal for close-up views, the Statue of Liberty Museum, and photos with the harbor and skyline behind you.", map: "Battery Park New York" },
        { time: "11:15 AM", title: "Ferry → Ellis Island (~20 min)", detail: "Hop the connecting ferry over to Ellis Island.", map: "Battery Park New York" },
        { time: "11:35 AM–1:00 PM", title: "Ellis Island Immigration Museum", detail: "Tour the moving National Museum of Immigration — underrated and worth the time.", map: "Battery Park New York" },
        { time: "1:00 PM", title: "Ferry → back to Battery (~20 min)", detail: "Return ferry to Battery Park.", map: "Battery Park New York" },
        { time: "1:30 PM", title: "Lunch near WTC / Battery", detail: "Late lunch around the World Trade Center / Battery area before the afternoon museum.", map: "Stone Street Historic District New York" },
        { time: "2:30–4:30 PM", title: "✅ 9/11 Memorial & Museum (2 tickets booked)", detail: "See the outdoor Memorial reflecting pools in the footprints of the Twin Towers first, then your timed Museum entry. Allow ~2 hrs; powerful and somber.", map: "9/11 Memorial and Museum" },
        { time: "4:30 PM", title: "~3-min walk next door", detail: "Walk the few minutes from the 9/11 Museum to One World Trade Center.", map: "One World Observatory" },
        { time: "5:00–6:30 PM", title: "One World Observatory — 🎟️ Go City pass", detail: "Daytime views from the tallest building in the Western Hemisphere (covered by your Go City pass). Save the sunset deck for tomorrow’s Top of the Rock so the two don’t overlap.", map: "One World Observatory" },
        { time: "6:30 PM", title: "Downtown dinner, or ① train back uptown", detail: "Dinner on the cobblestone old streets around Stone Street / FiDi (lots of character), or hop the 1 train straight back up to Times Square and your hotel.", map: "Stone Street Historic District New York" }
      ],
      eat: "Late lunch near the WTC after the ferry; dinner on Stone Street (cobblestone patios) downtown, or back near the hotel in Midtown.",
      tips: ["Packed but smooth — almost no backtracking, and One World is right next to the 9/11 Museum.", "Booked anchors: 9:00am first ferry (Pedestal), 9/11 Museum 2:30pm. Be at Castle Clinton by ~8:00am.", "No large bags for ferry security.", "🎟️ One World today + Empire State (Jun 30) + Top of the Rock (Jul 2) are all on your Go City pass.", "The 1 train runs straight from FiDi up to Times Square — easy ride home tonight."]
    },
    {
      date: "2026-07-02",
      city: "New York City",
      title: "Central Park, the Met & sunset skyline",
      summary: "Uptown culture from your Times Square base — no hotel move today. Central Park, the Met, then Top of the Rock at sunset.",
      blocks: [
        { time: "Morning", title: "Central Park", detail: "Subway up from Times Square (~10 min). Enter at Columbus Circle for Bethesda Terrace, the Mall, Bow Bridge, and Belvedere Castle. Rent a bike or just wander north.", map: "Central Park New York" },
        { time: "Afternoon", title: "The Met (Museum Mile)", detail: "The Metropolitan Museum of Art is world-class — give it 2–3 hours. No advance pass needed for general admission. Alternatives nearby: the Guggenheim, or the American Museum of Natural History across the park.", map: "Metropolitan Museum of Art" },
        { time: "Sunset", title: "Top of the Rock — 🎟️ Go City pass", detail: "Back down to Midtown for sunset at Top of the Rock (covered by your Go City pass) — the classic skyline view with the Empire State Building in frame. Reserve a sunset slot in the Go City app; they sell out. It’s a short walk from your hotel.", map: "Top of the Rock Observation Deck" }
      ],
      eat: "Upper East/West Side near the park for lunch; Midtown after the deck.",
      tips: ["No hotel switch today — you’re already based at Times Square, so this day is relaxed.", "🎟️ Top of the Rock is on your Go City pass — reserve a sunset time slot in the app (sells out).", "You’ve now done three decks across the trip (Empire State, One World, Top of the Rock) — each a different angle on the skyline.", "Central Park is huge — pick the Columbus Circle section, don’t try to see it all."]
    },
    {
      date: "2026-07-03",
      city: "New York City",
      title: "Downtown cool: High Line, Village, Broadway",
      summary: "Your most ‘local’ day, and it flows north-to-south then back: High Line → Village, then up to Broadway by your hotel. All walkable / one subway hop.",
      blocks: [
        { time: "Morning", title: "High Line + Chelsea Market", detail: "From Times Square it’s ~1 mi to the High Line’s north end (Hudson Yards). Walk the elevated park down to the Meatpacking District and graze through Chelsea Market.", map: "The High Line New York" },
        { time: "Afternoon", title: "Greenwich Village / SoHo / Washington Sq", detail: "Wander Washington Square Park, the Village’s leafy streets, and SoHo’s cast-iron shopping blocks. Optional: Little Italy & Chinatown.", map: "Washington Square Park New York" },
        { time: "Evening", title: "Broadway show — ⚠️ tickets", detail: "See a Broadway show — book a specific title ahead, or try the TKTS booth in Times Square (steps from your hotel) for same-day discounts. Dinner pre/post in the Theater District.", map: "Broadway Theatre District New York" }
      ],
      eat: "Theater District pre-show prix-fixe, or Village classics (pizza, pasta).",
      tips: ["🎆 Unique to 2026: the Times Square Ball drops on JULY 3 — eight times, marking midnight in every U.S. time zone to kick off the 250th. You’re staying right there — go see it.", "Tall ships from the Sail4th 250 parade are in the harbor today through Jul 8.", "July 3 gets crowded as the holiday ramps up — reserve dinner."]
    },
    {
      date: "2026-07-04",
      city: "New York City",
      title: "America’s 250th · July 4th · Fly NYC → SFO",
      summary: "A travel day. Your JFK flight leaves at 6:55pm, so it’s a relaxed NYC morning, then head to the airport mid-afternoon.",
      decision: {
        title: "✈️ Your July 4th is a travel day — the fireworks trade-off is settled",
        body: "Your flight is booked: JFK → SFO, departs 6:55pm. With the 250th + holiday crowds you’ll need to leave Manhattan by ~3:00pm and be at JFK by ~4:30–5:00pm — which means you’ll be at the airport / in the air during Macy’s 8–10pm fireworks. That’s the trade-off, already decided by the booking. Make the most of the daytime:",
        options: [
          "Morning: soak up the 250th daytime energy near Times Square, then check out of the Candlewood Suites.",
          "~3:00pm: head to JFK (AirTrain + LIRR/subway, or a car — pad heavily for holiday traffic).",
          "Want the fireworks instead? The only way would be moving the flight to July 5 — otherwise enjoy the send-off and catch them on NBC/Peacock."
        ]
      },
      blocks: [
        { time: "Morning", title: "Last NYC morning + 250th buzz", detail: "Bagels and a final wander near Times Square. Expect special America250 daytime programming around the city. Check out of the Candlewood Suites and store your bags if you want a few untethered hours.", map: "Times Square New York" },
        { time: "~3:00 PM", title: "Head to JFK", detail: "Leave Manhattan by ~3pm for your 6:55pm flight — July 4 + 250th means heavy traffic and security. From Midtown: subway/LIRR to the JFK AirTrain, or a car service (budget extra time). Aim to be at the gate by ~5pm.", map: "John F. Kennedy International Airport" },
        { time: "6:55 PM", title: "✅ Fly JFK → SFO", detail: "Booked: JFK → SFO, departs 6:55pm ET, arrives 10:33pm PT (~6h40m + 3h time change). You’ll be airborne during the fireworks — catch them on NBC/Peacock if your flight has TV/Wi-Fi.", map: "San Francisco International Airport" }
      ],
      eat: "Grab-and-go near the hotel; a proper sit-down won’t fit a travel day.",
      tips: ["Leave Manhattan by ~3pm — holiday + 250th = brutal airport traffic and lines.", "Check out of the Candlewood Suites in the morning; store bags if you want a hands-free last few hours.", "You’ll miss Macy’s fireworks in person (you’re flying) — they broadcast on NBC/Peacock 8–10pm."]
    }
  ],

  // ---- Logistics ----
  logistics: [
    { label: "Flight out", value: "✅ SFO → Reagan National (DCA), Fri Jun 26: departs 9:39am PT, arrives 5:59pm ET. DCA is ~15 min from your hotel." },
    { label: "DC → NYC", value: "✅ Amtrak, Tue Jun 30: Washington Union Station 11:06am → Moynihan Train Hall (Penn Sta) ~2:34pm (3h 28m)." },
    { label: "Flight home", value: "✅ JFK → SFO, Sat Jul 4: departs 6:55pm ET, arrives 10:33pm PT. Leave Manhattan by ~3pm (holiday + 250th crowds)." },
    { label: "Getting around DC", value: "Metro + walking from your White House–area hotel. SmarTrip / phone tap. The Mall is walkable end to end." },
    { label: "Getting around NYC", value: "Subway (OMNY tap-to-pay) + walking from your Times Square base (all 4 nights). The 1/2/3 line runs Times Square ↔ downtown. Citi Bike is great for parks/waterfronts." }
  ],

  // ---- Booking checklist ----
  // ✅ DONE items are already booked; tick them off. TODO items still need doing.
  bookings: [
    "✅ DONE — Flight SFO→DCA (Jun 26, 9:39am)",
    "✅ DONE — Flight JFK→SFO (Jul 4, 6:55pm)",
    "✅ DONE — Amtrak DC→NYC (Jun 30, 11:06am)",
    "✅ DONE — Hyatt Place DC / White House (Jun 26–30)",
    "✅ DONE — Candlewood Suites Times Square, NYC (Jun 30–Jul 4, all 4 nights)",
    "✅ DONE — Air & Space passes (Jun 27, 11am)",
    "✅ DONE — NMAAHC passes (Jun 28, 11am)",
    "✅ DONE — Holocaust Museum passes (Jun 28, 3:30pm)",
    "✅ DONE — Statue of Liberty Pedestal Access ferry (Jul 1, 9am first ferry, NY departure)",
    "✅ DONE — 9/11 Memorial & Museum (Jul 1, 2:30pm)",
    "✅ DONE — Go City New York pass (covers Empire State, One World Observatory, Top of the Rock & more)",
    "🎟️ Reserve Go City time slots in the app: Empire State (Jun 30 eve), One World (Jul 1 ~5pm), Top of the Rock (Jul 2 sunset) — slots sell out",
    "TODO — Broadway show (book a title, or TKTS same-day in Times Square)",
    "Optional — National Archives timed ticket (free/$1) to see the Declaration",
    "Optional — Washington Monument timed tickets (recreation.gov, 90 days ahead)",
    "Optional — US Capitol guided tour (visitthecapitol.gov, free)",
    "Note — The Met, MoMA & Natural History (NYC) don’t require advance passes for general entry, but MoMA & AMNH go smoother if you pre-book a time",
    "── PUBLIC TRANSIT & APPS ──────────────",
    "🚇 NYC subway/bus: just TAP your phone (Apple Pay/Google Pay) or contactless card at the turnstile — this is OMNY. MetroCard was fully retired Jan 2026; no card to buy. Tap the SAME phone/card every ride.",
    "💰 NYC fare cap: after $35 of taps in a 7-day window (Mon–Sun), the rest of your rides that week are FREE — so you’ll never overpay. Use one consistent payment method so taps count toward the cap.",
    "🚇 DC Metro: same deal — tap phone/contactless card at the faregate (‘Tap. Ride. Go.’). A physical SmarTrip is optional now; skip it unless you want one as a souvenir.",
    "📲 Apps to install before you go: Google Maps + Apple Maps (both have live transit directions & departures), Citymapper (best NYC/DC transit app — clear routes, exits, delays), Transit app (great real-time arrivals).",
    "📲 Add your payment card to Apple Pay / Google Wallet now, and ride with the phone you’ll actually carry (power bank in the bag — tapping needs battery!).",
    "🚗 Uber/Lyft: DON’T pre-load Uber Cash. Pre-paid balance is non-refundable, gives no discount, and risks leftover funds; a card on file charges per ride with no downside. Install both Uber & Lyft and price-compare. Also try Curb (NYC yellow cabs) for July 4 surge.",
    "🚆 Amtrak app: have your DC→NYC ticket (Jun 30, 11:06am) saved in the app for offline access.",
    "✈️ Day-of-July-4 to JFK: AirTrain + subway/LIRR is most reliable in holiday traffic; if using Uber/Lyft, expect heavy surge — budget extra and leave by ~3pm."
  ],

  // ---- Packing list ----
  packing: {
    "Essentials": ["IDs / REAL ID for flights", "🎟️ Google badge — may get you FREE entry to some popular museums in DC & NYC (e.g. via corporate/cultural perks); bring it and ask at admissions", "Phone + charger + power bank", "Cards + a little cash", "Refillable water bottle", "Sunscreen + sunglasses + hat"],
    "Clothes (hot & humid)": ["Lightweight breathable tops", "Comfortable walking shoes (broken in!)", "1 nicer outfit for Broadway/dinner", "Compact umbrella / packable rain jacket", "🌧 Waterproof rain jacket with hood (DC afternoon thunderstorms)", "Swimwear (hotel pool)"],
    "Health & comfort": ["Blister plasters / band-aids", "Pain reliever + any meds", "Hand sanitizer + wipes", "Deodorant (you’ll sweat)", "Eye mask + earplugs"],
    "Smart extras": ["Day backpack", "Portable fan / cooling towel", "Snacks for the train", "Downloaded maps + Amtrak/airline apps", "Saved/printed copies of all bookings (offline)"]
  }
};

/*
 * Coordinates [lat, lng] for each place referenced by a day block's `map` field.
 * Used to plot per-day pins and build Google Maps routes. Approximate landmark
 * points — good for plotting; the Google Maps route button refines real routing.
 * (San Francisco airport is intentionally omitted so it doesn't blow out the NYC map.)
 */
const PLACES = {
  // ---- Washington, DC ----
  "Ronald Reagan Washington National Airport": [38.8512, -77.0402],
  "Hyatt Place Washington DC White House": [38.9026, -77.0381],
  "The White House": [38.8977, -77.0365],
  "National Air and Space Museum Washington DC": [38.8882, -77.0199],
  "National Museum of Natural History Washington DC": [38.8913, -77.0260],
  "National Gallery of Art": [38.8913, -77.0200],
  "Lincoln Memorial Washington DC": [38.8893, -77.0502],
  "National Museum of African American History and Culture": [38.8909, -77.0327],
  "National Museum of American History": [38.8911, -77.0301],
  "United States Holocaust Memorial Museum": [38.8867, -77.0329],
  "The Wharf Washington DC": [38.8785, -77.0256],
  "Arlington National Cemetery": [38.8783, -77.0687],
  "Georgetown Washington DC": [38.9048, -77.0626],
  "Washington Union Station": [38.8973, -77.0063],
  // ---- New York City ----
  "Candlewood Suites New York City Times Square": [40.7596, -73.9894],
  "Stone Street Historic District New York": [40.7042, -74.0113],
  "Battery Park New York": [40.7033, -74.0170],
  "9/11 Memorial and Museum": [40.7115, -74.0134],
  "One World Observatory": [40.7127, -74.0134],
  "Empire State Building": [40.7484, -73.9857],
  "Central Park New York": [40.7681, -73.9819],
  "Metropolitan Museum of Art": [40.7794, -73.9632],
  "Top of the Rock Observation Deck": [40.7593, -73.9794],
  "The High Line New York": [40.7480, -74.0048],
  "Washington Square Park New York": [40.7308, -73.9973],
  "Broadway Theatre District New York": [40.7590, -73.9851],
  "Times Square New York": [40.7580, -73.9855],
  "John F. Kennedy International Airport": [40.6413, -73.7781]
};

/*
 * Weather for the trip window (Jun 28 – Jul 4, 2026).
 *
 * Two layers:
 *  - `normals`: typical late-June/early-July climate averages per city. These
 *    show immediately and work OFFLINE — useful now, weeks before the trip,
 *    when no real forecast exists (forecasts only reach ~16 days out).
 *  - Live upgrade: app.js calls the free, key-less Open-Meteo API and, for any
 *    date within forecast range, REPLACES the normals with the real forecast
 *    (marked "live"). Coordinates below drive that lookup.
 *
 * Temps in °F. Each day knows which city you're in (DC through Jun 30 morning,
 * NYC after the Jun 30 train).
 */
const WEATHER = {
  startDate: "2026-06-28",
  endDate: "2026-07-04",
  coords: {
    "Washington, DC": [38.8951, -77.0364],
    "New York City": [40.7128, -74.0060]
  },
  // City you're physically in on each date (for the right forecast point).
  dayCity: {
    "2026-06-28": "Washington, DC",
    "2026-06-29": "Washington, DC",
    "2026-06-30": "New York City", // travel day; you sleep in NYC
    "2026-07-01": "New York City",
    "2026-07-02": "New York City",
    "2026-07-03": "New York City",
    "2026-07-04": "New York City"
  },
  // Seasonal-average fallback (used until live data is available).
  // hi/lo °F, plus a typical late-June/early-July condition for the city.
  normals: {
    "Washington, DC": { hi: 89, lo: 71, code: 95, rainChance: 40, note: "炎热潮湿，午后常有雷阵雨" },
    "New York City": { hi: 84, lo: 70, code: 80, rainChance: 35, note: "温暖潮湿，偶有阵雨" }
  }
};
