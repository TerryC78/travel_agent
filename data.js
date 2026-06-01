/*
 * Trip data for the East Coast trip: SFO -> Washington DC -> New York -> SFO
 * Dates: Friday June 26 - Saturday July 4, 2026 (8 nights)
 *
 * This is the single source of truth for the itinerary website.
 * Edit anything here and refresh the page - no build step required.
 */

const TRIP = {
  title: "East Coast 2026",
  subtitle: "SFO → Washington DC → New York → SFO",
  startDate: "2026-06-26", // Friday
  endDate: "2026-07-04", // Saturday (the 250th of July!)
  travelers: 1,

  // Big-picture context worth knowing before you go.
  highlights: [
    "🎆 July 4, 2026 is the 250th anniversary of US independence (“America250” / Semiquincentennial). Expect once-in-a-lifetime celebrations — and bigger crowds, tighter security, and higher prices in both DC and NYC.",
    "🗽 You finish in New York ON July 4th. For the 250th, Macy’s fireworks launch from BOTH the Hudson and East Rivers (a rare double show) plus an air show, broadcast 8–10pm — the marquee event. See the “July 4th decision” note that day.",
    "⛵ Sail4th 250 (Jul 3–8): 30+ tall ships and 40+ naval vessels sail into New York Harbor and circle the Statue of Liberty — a once-in-a-generation maritime parade overlapping your NYC days.",
    "🚆 DC and NYC are connected by Amtrak in ~3 hours — no need to fly that leg. Book the train, not a plane.",
    "🏛 Most Smithsonian museums in DC are FREE, but several now need free timed-entry passes booked weeks ahead.",
    "☀️ Late June / early July on the East Coast is hot and humid (high 80s–90s°F, afternoon thunderstorms). Pack light, breathable clothes and stay hydrated."
  ],

  cities: [
    { name: "Washington, DC", nights: 4, dates: "Jun 26–30" },
    { name: "New York City", nights: 4, dates: "Jun 30 – Jul 4" }
  ],

  // ---- Day-by-day itinerary ----
  // Each block has a Google Maps search query ("map") so you can tap straight into directions.
  days: [
    {
      date: "2026-06-26",
      city: "Washington, DC",
      title: "Fly SFO → DC · First taste of the Mall",
      summary: "Cross-country travel day. Drop bags, then ease in with an evening monuments stroll.",
      blocks: [
        { time: "Morning", title: "Fly SFO → Washington", detail: "Aim for a morning nonstop (~5h flight + 3h time change). DCA (Reagan National) is closest to downtown; IAD (Dulles) and BWI are cheaper but farther. Check bags or pack carry-on for the whole trip.", map: "Ronald Reagan Washington National Airport" },
        { time: "Afternoon", title: "Check in + reset", detail: "Drop bags at the hotel (aim for the Penn Quarter / Downtown / Dupont Circle area — walkable, Metro-connected). Grab a late lunch and coffee to beat the jet lag.", map: "Penn Quarter Washington DC" },
        { time: "Evening", title: "Tidal Basin & monuments at golden hour", detail: "Easy intro walk: Lincoln Memorial → WWII Memorial → Washington Monument grounds, then the Jefferson & MLK Memorials around the Tidal Basin. Stunning at sunset and cooler than midday.", map: "Lincoln Memorial Washington DC" }
      ],
      eat: "Dinner in Penn Quarter or around 14th St NW (lots of options). Try a half-smoke at a local spot if you want the DC classic.",
      tips: ["Hydrate on the flight — the humidity hits hard.", "Buy a SmarTrip card (or use phone tap) for the Metro."]
    },
    {
      date: "2026-06-27",
      city: "Washington, DC",
      title: "The National Mall, monument to monument",
      summary: "Your big monuments + memorials day on foot. It’s a lot of walking — wear real shoes.",
      blocks: [
        { time: "Morning", title: "Capitol end of the Mall", detail: "Start at the US Capitol (book a free guided tour via visitthecapitol.gov in advance), then the Library of Congress (gorgeous Jefferson Building) and a peek at the Supreme Court across the street.", map: "United States Capitol" },
        { time: "Afternoon", title: "Mall walk west", detail: "Stroll the Mall toward the Washington Monument (timed tickets via recreation.gov if you want to go up). Duck into a Smithsonian to escape the afternoon heat.", map: "Washington Monument" },
        { time: "Evening", title: "White House & Lafayette Square", detail: "Walk past the White House (north-side view from Pennsylvania Ave / Lafayette Square), then dinner downtown.", map: "White House Washington DC" }
      ],
      eat: "Lunch from a Mall food truck or a Smithsonian cafe; dinner around Chinatown / Penn Quarter.",
      tips: ["The Mall is ~2 miles end to end — pace yourself and refill water.", "Afternoon thunderstorms are common; have a backup indoor museum."]
    },
    {
      date: "2026-06-28",
      city: "Washington, DC",
      title: "Smithsonian deep-dive (mostly free!)",
      summary: "Museum day. Pick 2–3 — don’t try to do them all. Most are free; a couple need timed passes.",
      blocks: [
        { time: "Morning", title: "Air & Space OR American History", detail: "National Air & Space Museum requires a FREE timed-entry pass (book ahead at airandspace.si.edu). Alternative: National Museum of American History (no pass needed).", map: "National Air and Space Museum" },
        { time: "Afternoon", title: "Natural History + National Gallery", detail: "National Museum of Natural History (Hope Diamond, dinosaurs) and the National Gallery of Art are both free and a few minutes apart on the Mall.", map: "National Museum of Natural History Washington DC" },
        { time: "Evening", title: "Wharf or U Street", detail: "Head to The Wharf for waterfront dinner, or U Street for live music and a livelier night.", map: "The Wharf Washington DC" }
      ],
      eat: "The Wharf (seafood, waterfront) or U Street (Ethiopian, jazz, Ben’s Chili Bowl).",
      tips: ["The National Museum of African American History & Culture also uses free timed passes — book early if it’s a priority.", "Museum bag/security lines are shortest right at opening."]
    },
    {
      date: "2026-06-29",
      city: "Washington, DC",
      title: "Arlington, Georgetown & the other DC",
      summary: "Step off the Mall: solemn history in the morning, charming streets in the afternoon.",
      blocks: [
        { time: "Morning", title: "Arlington National Cemetery", detail: "Tomb of the Unknown Soldier changing of the guard, JFK gravesite & eternal flame, Arlington House views back over DC. Reachable by Metro (Blue Line).", map: "Arlington National Cemetery" },
        { time: "Afternoon", title: "Georgetown", detail: "Historic cobblestone streets, the C&O Canal, waterfront park, and shopping along M St & Wisconsin Ave. Get a cupcake if that’s your thing.", map: "Georgetown Washington DC" },
        { time: "Evening", title: "Pack & prep for NYC", detail: "Early-ish night. Confirm tomorrow’s Amtrak, repack, and set out clothes for the train.", map: "Washington Union Station" }
      ],
      eat: "Lunch in Georgetown (waterfront patios); casual dinner near your hotel.",
      tips: ["Arlington involves a lot of walking on hills — comfortable shoes again.", "Download your Amtrak ticket to the app tonight."]
    },
    {
      date: "2026-06-30",
      city: "New York City",
      title: "Amtrak DC → NYC · Hello, New York",
      summary: "Scenic ~3-hour train up the Northeast Corridor, then an afternoon easing into Midtown.",
      blocks: [
        { time: "Morning", title: "Amtrak from Union Station", detail: "Take Amtrak from Washington Union Station to NY Penn Station. Acela is fastest (~2h45m); Northeast Regional is cheaper (~3h20m). Both far beat flying once you count airports. Sit on the left/west side for water views.", map: "Washington Union Station" },
        { time: "Afternoon", title: "Drop bags + Midtown first look", detail: "Arrive NY Penn Station, check in (Midtown is central; the Financial District or Brooklyn are quieter alternatives). Walk to Bryant Park, Grand Central’s main concourse, and the NY Public Library.", map: "Grand Central Terminal" },
        { time: "Evening", title: "Times Square after dark", detail: "See Times Square lit up once (then you never have to again). Dinner in Hell’s Kitchen (9th Ave) is far better than anything in the Square itself.", map: "Times Square" }
      ],
      eat: "Hell’s Kitchen on 9th Ave for dinner — huge range, walkable from Times Square.",
      tips: ["Get a phone-based OMNY tap set up for the subway (just tap your phone/card at turnstiles).", "Penn Station is hectic — know your hotel’s cross streets before you arrive.", "Heads up: DC’s huge ‘Salute to America’ 250th parade & fireworks are July 4 — after you’ve left for NYC. New York is your July 4th finale."]
    },
    {
      date: "2026-07-01",
      city: "New York City",
      title: "Lower Manhattan: Liberty, Ellis, 9/11",
      summary: "The harbor + downtown classics. Book the Statue ferry early in the day.",
      blocks: [
        { time: "Morning", title: "Statue of Liberty & Ellis Island", detail: "Ferry departs from Battery Park (book Statue City Cruises ahead; “pedestal” or “crown” access sells out). Ellis Island’s immigration museum is moving and underrated.", map: "Battery Park New York" },
        { time: "Afternoon", title: "9/11 Memorial & Financial District", detail: "9/11 Memorial reflecting pools (free) and Museum (ticketed), Oculus, Wall Street & the Charging Bull, then walk the Brooklyn Bridge if you have energy.", map: "9/11 Memorial and Museum" },
        { time: "Evening", title: "Stone Street / Seaport", detail: "Dinner at historic Stone Street or the South Street Seaport with East River views.", map: "Stone Street Historic District New York" }
      ],
      eat: "Stone Street (cobblestone pedestrian dining) or the Seaport.",
      tips: ["Earliest ferry slot = smaller crowds and cooler temps.", "Bring a refillable water bottle; downtown gets baking hot."]
    },
    {
      date: "2026-07-02",
      city: "New York City",
      title: "Central Park, the Met & the skyline",
      summary: "Uptown culture + a great observation deck for sunset.",
      blocks: [
        { time: "Morning", title: "Central Park", detail: "Enter around Columbus Circle: Bethesda Terrace, the Mall, Bow Bridge, Belvedere Castle. Rent a bike or just wander north.", map: "Central Park New York" },
        { time: "Afternoon", title: "Museum Mile", detail: "The Met (Metropolitan Museum of Art) is world-class — give it 2–3 hours. Alternatives nearby: the Guggenheim or American Museum of Natural History (west side).", map: "Metropolitan Museum of Art" },
        { time: "Evening", title: "Sunset observation deck", detail: "Pick ONE: Top of the Rock (best skyline incl. Empire State in view), Empire State Building (the icon), Edge or Summit One Vanderbilt (glassy/modern). Book a timed slot near sunset.", map: "Top of the Rock Observation Deck" }
      ],
      eat: "Upper West Side near the park, or back in Midtown after the deck.",
      tips: ["Observation decks are cheaper if you pre-book; a NYC CityPASS can bundle several attractions.", "Central Park is huge — pick a section, don’t try to see all of it."]
    },
    {
      date: "2026-07-03",
      city: "New York City",
      title: "Downtown cool: High Line, Village, Broadway",
      summary: "Your most ‘local’ day — neighborhoods, then a show. Eve-of-the-4th energy everywhere.",
      blocks: [
        { time: "Morning", title: "High Line + Chelsea Market", detail: "Walk the High Line elevated park (Hudson Yards down to the Meatpacking District) and graze through Chelsea Market.", map: "The High Line New York" },
        { time: "Afternoon", title: "Greenwich Village / SoHo / Washington Sq", detail: "Wander Washington Square Park, the Village’s leafy streets, and SoHo’s cast-iron shopping blocks. Optional: Little Italy & Chinatown.", map: "Washington Square Park New York" },
        { time: "Evening", title: "Broadway show", detail: "See a Broadway show — book ahead for a specific title, or try the TKTS booth (Times Square) for same-day discounts. Dinner pre/post in the Theater District.", map: "Broadway Theatre District New York" }
      ],
      eat: "Theater District pre-show prix-fixe, or Village classics (pizza, pasta).",
      tips: ["🎆 Unique to 2026: the Times Square Ball drops on JULY 3 — eight times, marking midnight in every U.S. time zone to kick off the 250th. Worth swinging by.", "Tall ships from the Sail4th 250 parade are in the harbor today through Jul 8.", "July 3 gets crowded as the holiday ramps up — reserve dinner.", "Confirm tomorrow’s flight time and how it collides (or not) with fireworks — see Day 9."]
    },
    {
      date: "2026-07-04",
      city: "New York City",
      title: "America’s 250th · July 4th · Fly NYC → SFO",
      summary: "The big day. How you play it depends on your flight — read the decision note first.",
      decision: {
        title: "⚠️ July 4th decision: fireworks vs. flying home",
        body: "Your trip ends today, but the Macy’s Fireworks (this year launching from BOTH the Hudson and East Rivers, broadcast 8–10pm) are the climax — and it’s the 250th, so it’ll be epic and mobbed. A same-day evening flight to SFO means you’ll be in the air during the show. Three options:",
        options: [
          "BEST: Fly home the morning/early afternoon of July 4 (accept missing fireworks), OR",
          "Add one night and fly July 5 so you can watch the 250th fireworks, then sleep before flying, OR",
          "Take a late red-eye (departs ~10–11pm) — but you’d have to leave for the airport before/at fireworks time, so this rarely lets you see the full show."
        ]
      },
      blocks: [
        { time: "Morning", title: "Last NYC morning", detail: "Bagels and a final walk. If flying out today, check out and store bags or head to the airport with buffer — holiday traffic and security are heavy.", map: "New York City" },
        { time: "Afternoon", title: "America250 festivities / fly out", detail: "Expect special 250th programming across the city. If you’re on an afternoon flight, leave plenty of time: JFK/EWR/LGA will be busy. Allow 3+ hrs before a holiday flight.", map: "John F. Kennedy International Airport" },
        { time: "Evening", title: "(If staying) Macy’s 4th of July Fireworks", detail: "If you added a July 5 departure: this year’s show lights up BOTH rivers, so you can stake out either the Hudson (west-side Manhattan / NJ waterfront) or the East River (FDR Drive sections, Brooklyn/LIC waterfronts). Arrive hours early for the 250th crowds. Worth it.", map: "Macy's Fourth of July Fireworks NYC" }
      ],
      eat: "Grab-and-go near the hotel; a proper sit-down won’t fit a travel day.",
      tips: ["Holiday + 250th = leave huge buffers for traffic and airport lines.", "Decide the fireworks-vs-flight question NOW (ideally when booking flights), not on the day."]
    }
  ],

  // ---- Logistics ----
  logistics: [
    { label: "Flight out", value: "SFO → Washington (DCA preferred for location; IAD/BWI cheaper). ~5h nonstop + 3h time change. Book ~6–8 weeks out for best fares." },
    { label: "DC → NYC", value: "Amtrak, Washington Union Station → NY Penn Station. Acela ~2h45m; Northeast Regional ~3h20m. Book on amtrak.com; fares rise as it fills." },
    { label: "Flight home", value: "New York (JFK / EWR / LGA) → SFO on July 4. ~6h + 3h change. Holiday + 250th: expect crowds; build in buffer (see July 4th note)." },
    { label: "Getting around DC", value: "Metro + walking. SmarTrip / phone tap. The Mall is walkable end to end." },
    { label: "Getting around NYC", value: "Subway (OMNY tap-to-pay) + walking. Avoid driving. Citi Bike is great for parks/waterfronts." }
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

  // ---- Booking checklist (do these in advance) ----
  bookings: [
    "Flights: SFO→DC (Jun 26) and NYC→SFO (Jul 4 or 5 — settle the fireworks question first)",
    "Amtrak DC→NYC for Jun 30 (book early; Acela vs Regional)",
    "Hotel in DC (4 nights, Jun 26–30)",
    "Hotel in NYC (4–5 nights from Jun 30)",
    "Statue of Liberty / Ellis Island ferry tickets (Statue City Cruises)",
    "Smithsonian Air & Space FREE timed-entry pass",
    "Washington Monument timed tickets (recreation.gov) — optional",
    "US Capitol guided tour (visitthecapitol.gov) — free",
    "9/11 Museum tickets",
    "One observation deck (Top of the Rock / Empire State / Edge / Summit)",
    "Broadway show tickets",
    "Consider a NYC CityPASS if doing 3+ paid attractions"
  ],

  // ---- Packing list ----
  packing: {
    "Essentials": ["IDs / REAL ID for flights", "Phone + charger + power bank", "Cards + a little cash", "Refillable water bottle", "Sunscreen + sunglasses + hat"],
    "Clothes (hot & humid)": ["Lightweight breathable tops", "Comfortable walking shoes (broken in!)", "1 nicer outfit for Broadway/dinner", "Compact umbrella / packable rain jacket", "Swimwear (hotel pool)"],
    "Health & comfort": ["Blister plasters / band-aids", "Pain reliever + any meds", "Hand sanitizer + wipes", "Deodorant (you’ll sweat)", "Eye mask + earplugs (red-eye)"],
    "Smart extras": ["Day backpack", "Portable fan / cooling towel", "Snacks for the train", "Downloaded maps + Amtrak/airline apps", "Copies of bookings (offline)"]
  }
};
