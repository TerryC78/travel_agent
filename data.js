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
    { hotel: "Fairfield Inn New York Manhattan / Financial District", city: "New York City", dates: "Jun 30 – Jul 2", nights: 2, area: "Lower Manhattan — ideal base for your Statue / Ellis / 9-11 day." },
    { hotel: "Pod Times Square", city: "New York City", dates: "Jul 2 – Jul 4", nights: 2, area: "Midtown — steps from Broadway and the Times Square energy for your last two nights." }
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
      title: "Amtrak DC → NYC · Hello, New York",
      summary: "Scenic ~3½-hour train up the Northeast Corridor into the new Moynihan hall, then settle into your Financial District base.",
      blocks: [
        { time: "11:06 AM", title: "✅ Amtrak: Washington → New York (2 tickets booked)", detail: "Departs Washington Union Station 11:06am, arrives Moynihan Train Hall at Penn Station ~2:34pm (3h 28m). Moynihan is the stunning skylit hall — far nicer than old Penn. Sit on the left/west side leaving DC for water views. Board ~20 min early.", map: "Washington Union Station" },
        { time: "~2:45 PM", title: "✅ Check in: Fairfield Inn, Financial District", detail: "From Moynihan, take the subway downtown (A/C/E or 1/2/3) ~20 min to your FiDi hotel. Drop bags and reset — you’re perfectly placed for tomorrow’s Statue of Liberty + 9/11 day.", map: "Fairfield Inn New York Manhattan Financial District" },
        { time: "Evening", title: "Lower Manhattan at golden hour", detail: "Ease in around your downtown base: Stone Street for dinner, the South Street Seaport on the East River, or walk toward Battery Park for a first glimpse of the harbor and Lady Liberty. (Plenty of Times Square coming once you move there July 2.)", map: "Stone Street Historic District New York" }
      ],
      eat: "Dinner downtown — Stone Street’s cobblestone patios or the Seaport.",
      tips: ["Set up OMNY tap-to-pay (phone/card) for the subway before you arrive.", "Your bags ride with you — Moynihan to FiDi is one easy subway hop.", "Heads up: DC’s ‘Salute to America’ 250th parade & fireworks are July 4 — after you’ve left. New York is your finale."]
    },
    {
      date: "2026-07-01",
      city: "New York City",
      title: "Lower Manhattan: Liberty, Ellis, 9/11",
      summary: "The harbor + downtown classics — and you’re based right here in FiDi. Book the Statue ferry for an early slot.",
      blocks: [
        { time: "Morning", title: "Statue of Liberty & Ellis Island — ⚠️ ferry reservation", detail: "Ferry departs Battery Park (a short walk/ride from your hotel). Book Statue City Cruises in advance — the ONLY official operator; pedestal/crown access sells out. Ellis Island’s immigration museum is moving and underrated.", map: "Battery Park New York" },
        { time: "Afternoon", title: "9/11 Memorial & Financial District — ⚠️ museum tickets", detail: "9/11 Memorial reflecting pools (free) and the Museum (timed tickets, book ahead at 911memorial.org), the Oculus, Wall Street & the Charging Bull, then walk the Brooklyn Bridge if you have energy.", map: "9/11 Memorial and Museum" },
        { time: "Evening", title: "Stone Street / Seaport", detail: "Dinner at historic Stone Street or the South Street Seaport with East River views — both minutes from your hotel.", map: "Stone Street Historic District New York" }
      ],
      eat: "Stone Street (cobblestone pedestrian dining) or the Seaport.",
      tips: ["Earliest ferry slot = smaller crowds and cooler temps.", "Staying in FiDi means you can drop back at the hotel between the harbor and the afternoon.", "Bring a refillable water bottle; downtown gets baking hot."]
    },
    {
      date: "2026-07-02",
      city: "New York City",
      title: "Central Park, the Met & the skyline",
      summary: "Hotel-switch day (FiDi → Times Square) wrapped around uptown culture and a sunset skyline view.",
      blocks: [
        { time: "Morning", title: "Hotel switch → uptown to Central Park", detail: "Check out of the Fairfield Inn (FiDi). Easiest play: stash bags at Pod Times Square (check-in is mid-afternoon), then subway up to Central Park — enter at Columbus Circle for Bethesda Terrace, the Mall, Bow Bridge, Belvedere Castle.", map: "Central Park New York" },
        { time: "Afternoon", title: "The Met (Museum Mile)", detail: "The Metropolitan Museum of Art is world-class — give it 2–3 hours. No advance pass needed for general admission. Alternatives nearby: the Guggenheim or, across the park, the American Museum of Natural History.", map: "Metropolitan Museum of Art" },
        { time: "Evening", title: "✅ Check in: Pod Times Square + sunset deck", detail: "Check into Pod Times Square, then walk to a sunset observation deck nearby — pick ONE and pre-book a timed slot: Top of the Rock (best skyline, Empire State in frame), Summit One Vanderbilt (mirrored/immersive), Edge, or the Empire State Building.", map: "Pod Times Square New York" }
      ],
      eat: "Upper East/West Side near the park for lunch; Midtown after the deck.",
      tips: ["Observation decks need timed tickets and sunset slots sell out — pre-book one.", "Stash bags at Pod Times Square in the morning so you’re not hauling them through the Met.", "Central Park is huge — pick the Columbus Circle section, don’t try to see it all."]
    },
    {
      date: "2026-07-03",
      city: "New York City",
      title: "Downtown cool: High Line, Village, Broadway",
      summary: "Your most ‘local’ day — neighborhoods, then a show. Eve-of-the-4th energy everywhere, and you’re right in Times Square.",
      blocks: [
        { time: "Morning", title: "High Line + Chelsea Market", detail: "Walk the High Line elevated park (Hudson Yards down to the Meatpacking District) and graze through Chelsea Market.", map: "The High Line New York" },
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
          "Morning: soak up the 250th daytime energy near Times Square, then check out of Pod Times Square.",
          "~3:00pm: head to JFK (AirTrain + LIRR/subway, or a car — pad heavily for holiday traffic).",
          "Want the fireworks instead? The only way would be moving the flight to July 5 — otherwise enjoy the send-off and catch them on NBC/Peacock."
        ]
      },
      blocks: [
        { time: "Morning", title: "Last NYC morning + 250th buzz", detail: "Bagels and a final wander near Times Square. Expect special America250 daytime programming around the city. Check out of Pod Times Square and store your bags if you want a few untethered hours.", map: "Times Square New York" },
        { time: "~3:00 PM", title: "Head to JFK", detail: "Leave Manhattan by ~3pm for your 6:55pm flight — July 4 + 250th means heavy traffic and security. From Midtown: subway/LIRR to the JFK AirTrain, or a car service (budget extra time). Aim to be at the gate by ~5pm.", map: "John F. Kennedy International Airport" },
        { time: "6:55 PM", title: "✅ Fly JFK → SFO", detail: "Booked: JFK → SFO, departs 6:55pm ET, arrives 10:33pm PT (~6h40m + 3h time change). You’ll be airborne during the fireworks — catch them on NBC/Peacock if your flight has TV/Wi-Fi.", map: "San Francisco International Airport" }
      ],
      eat: "Grab-and-go near the hotel; a proper sit-down won’t fit a travel day.",
      tips: ["Leave Manhattan by ~3pm — holiday + 250th = brutal airport traffic and lines.", "Check out of Pod Times Square in the morning; store bags if you want a hands-free last few hours.", "You’ll miss Macy’s fireworks in person (you’re flying) — they broadcast on NBC/Peacock 8–10pm."]
    }
  ],

  // ---- Logistics ----
  logistics: [
    { label: "Flight out", value: "✅ SFO → Reagan National (DCA), Fri Jun 26: departs 9:39am PT, arrives 5:59pm ET. DCA is ~15 min from your hotel." },
    { label: "DC → NYC", value: "✅ Amtrak, Tue Jun 30: Washington Union Station 11:06am → Moynihan Train Hall (Penn Sta) ~2:34pm (3h 28m)." },
    { label: "Flight home", value: "✅ JFK → SFO, Sat Jul 4: departs 6:55pm ET, arrives 10:33pm PT. Leave Manhattan by ~3pm (holiday + 250th crowds)." },
    { label: "Getting around DC", value: "Metro + walking from your White House–area hotel. SmarTrip / phone tap. The Mall is walkable end to end." },
    { label: "Getting around NYC", value: "Subway (OMNY tap-to-pay) + walking. FiDi for the first half, Times Square for the second. Citi Bike is great for parks/waterfronts." }
  ],

  // ---- Budget estimate (per person, rough, USD) ----
  // These are planning ballparks, NOT quotes. July 4 / 250th will push lodging high.
  budget: [
    { item: "Flights (SFO→DC, NYC→SFO)", low: 450, high: 750 },
    { item: "Amtrak DC → NYC", low: 60, high: 200 },
    { item: "Lodging – DC (4 nights)", low: 700, high: 1400 },
    { item: "Lodging – NYC (4 nights)", low: 1000, high: 2200 },
    { item: "Food (9 days)", low: 540, high: 1080 },
    { item: "Attractions / tours / show", low: 250, high: 600 },
    { item: "Local transit + rideshare", low: 100, high: 200 }
  ],

  // ---- Booking checklist ----
  // ✅ DONE items are already booked; tick them off. TODO items still need doing.
  bookings: [
    "✅ DONE — Flight SFO→DCA (Jun 26, 9:39am)",
    "✅ DONE — Flight JFK→SFO (Jul 4, 6:55pm)",
    "✅ DONE — Amtrak DC→NYC (Jun 30, 11:06am)",
    "✅ DONE — Hyatt Place DC / White House (Jun 26–30)",
    "✅ DONE — Fairfield Inn FiDi, NYC (Jun 30–Jul 2)",
    "✅ DONE — Pod Times Square, NYC (Jul 2–4)",
    "✅ DONE — Air & Space passes (Jun 27, 11am)",
    "✅ DONE — NMAAHC passes (Jun 28, 11am)",
    "✅ DONE — Holocaust Museum passes (Jun 28, 3:30pm)",
    "TODO — Statue of Liberty / Ellis Island ferry (Statue City Cruises — the ONLY official seller; book early, sells out)",
    "TODO — 9/11 Memorial Museum timed tickets (911memorial.org)",
    "TODO — One observation deck, timed sunset slot (Top of the Rock / Summit / Edge / Empire State)",
    "TODO — Broadway show (book a title, or TKTS same-day in Times Square)",
    "Optional — National Archives timed ticket (free/$1) to see the Declaration",
    "Optional — Washington Monument timed tickets (recreation.gov, 90 days ahead)",
    "Optional — US Capitol guided tour (visitthecapitol.gov, free)",
    "Note — The Met, MoMA & Natural History (NYC) don’t require advance passes for general entry, but MoMA & AMNH go smoother if you pre-book a time",
    "Consider — NYC CityPASS if doing 3+ paid attractions"
  ],

  // ---- Packing list ----
  packing: {
    "Essentials": ["IDs / REAL ID for flights", "🎟️ Google badge — may get you FREE entry to some popular museums in DC & NYC (e.g. via corporate/cultural perks); bring it and ask at admissions", "Phone + charger + power bank", "Cards + a little cash", "Refillable water bottle", "Sunscreen + sunglasses + hat"],
    "Clothes (hot & humid)": ["Lightweight breathable tops", "Comfortable walking shoes (broken in!)", "1 nicer outfit for Broadway/dinner", "Compact umbrella / packable rain jacket", "Swimwear (hotel pool)"],
    "Health & comfort": ["Blister plasters / band-aids", "Pain reliever + any meds", "Hand sanitizer + wipes", "Deodorant (you’ll sweat)", "Eye mask + earplugs"],
    "Smart extras": ["Day backpack", "Portable fan / cooling towel", "Snacks for the train", "Downloaded maps + Amtrak/airline apps", "Saved/printed copies of all bookings (offline)"]
  }
};
