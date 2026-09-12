/*
 * Trip data for the Yellowstone + HYROX trip:
 *   Salt Lake City -> Grand Teton -> Yellowstone (West Yellowstone base) -> Salt Lake City (HYROX) -> LAX
 * Dates: Sunday Sep 13 - Sunday Sep 20, 2026 (7 nights)
 *
 * Same schema as data.js (East Coast). English here is the SOURCE OF TRUTH;
 * yellowstone-lang.js overlays Chinese. app.js renders both trips unchanged.
 * ✅ = confirmed/booked.  TODO = still needs doing.
 */

const TRIP = {
  storeKey: "ys2026", // separate checklist storage from the East Coast trip (language choice is shared)
  title: "Yellowstone 2026",
  subtitle: "Salt Lake City → Grand Teton → Yellowstone → HYROX SLC → LAX",
  startDate: "2026-09-13", // Sunday
  endDate: "2026-09-20",   // Sunday (race day)

  // Big-picture context worth knowing before you go.
  highlights: [
    "🐻 Grizzly country: carry bear spray on every trail (buy it in Jackson or West Yellowstone — it can’t fly) and keep 100 yards from bears/wolves, 25 from bison and elk. The September elk rut at Mammoth is a highlight — and the bulls charge.",
    "🧥 Mid-September Yellowstone: days 55–65°F, mornings 25–35°F, snow possible any day at 6,600–8,900 ft. Fleece + shell + beanie every morning; strong sun at altitude.",
    "🛣 All park roads are open, including Dunraven Pass (closes Oct 12) — but the Yellowstone River Bridge at Tower Junction has single-lane work with up to 30-min waits through Sep 30, right on your Lamar Valley day.",
    "🏋️ It’s HYROX taper week: Yellowstone is active recovery (boardwalks, one short hike), not training — and there are no predawn starts: every day leaves around 9:30–10am and wildlife is scheduled at sunset instead. The hard work is done; carb-loading starts Sep 17.",
    "📡 No cell service inside the park. The Starlink Mini works with a clear sky — from the motel parking lot, trailhead lots and turnouts — so download offline maps and geyser predictions too.",
    "🍚 The motel room has NO kitchen, so one electric rice cooker (bought Sep 13) is your stove all week: rice, congee, noodles, steamed buns, boiled eggs, blanched greens. Chinatown Supermarket on night one stocks the rest, and a thermos of congee makes the sunset wildlife sessions and dark drives home civilised."
  ],

  cities: [
    { name: "Salt Lake City", nights: 2, dates: "Sep 13 & Sep 19" },
    { name: "Grand Teton", nights: 0, dates: "Sep 14 (afternoon)" },
    { name: "West Yellowstone", nights: 5, dates: "Sep 14–19" }
  ],

  // ---- Where you're staying ----
  stays: [
    { hotel: "Hyatt Place Salt Lake City / Downtown / The Gateway", city: "Salt Lake City", dates: "Sep 13 & Sep 19", nights: 2, area: "55 N 400 W, at The Gateway — ~15 min from the airport, and a ~0.5 mi (10-min) walk to the Salt Palace, so race morning needs no car or Uber. Free hot breakfast (weekdays 6:30–9:00, later at weekends) and a mini-fridge in the room." },
    { hotel: "Dude & Roundup Motel, West Yellowstone", city: "West Yellowstone", dates: "Sep 14–19", nights: 5, area: "3 Madison Ave, Double Deluxe room with multiple beds — ONE BLOCK from Yellowstone’s West Entrance, so every park day starts immediately (14 mi to Madison Junction) and the after-dark drives home end fast. NO kitchen, and rooms vary on fridge/microwave — an electric rice cooker is your stove for the week. Starlink Mini works from the parking lot." }
  ],

  // ---- Day-by-day itinerary ----
  // Each block's "map" key is looked up in PLACES for the day map + Google Maps links.
  days: [
    {
      date: "2026-09-13",
      city: "Salt Lake City",
      title: "Fly to Salt Lake City · Night car pickup & supply run",
      summary: "Travel day. Land in the evening, grab the rental car, then a one-stop-shop night northbound: Chinese groceries for the week at Chinatown Supermarket (open till 10pm Sunday), then an electric rice cooker and warm layers — your motel room has no kitchen, so that cooker is the whole kitchen.",
      blocks: [
        { time: "Evening", title: "✈️ Land at SLC → pick up the rental car", detail: "Rental counters are in the terminal / Rental Car Center. Note the mileage — you return the car Sep 19 afternoon. Check the trunk fits a week of food plus gear.", map: "Salt Lake City International Airport" },
        { time: "~8:00 PM", title: "🛒 Chinatown Supermarket — groceries for the week", detail: "3390 S State St (Sunday hours till 10pm, ~20 min from the airport). Buy for a rice cooker, not a stove: rice, congee fixings, noodles, mantou/baozi (race-week carbs), frozen dumplings, eggs, pre-cooked or braised meats, tofu, leafy greens, sauces, bananas and honey. Add a cooler bag — the room may not have a fridge.", map: "Chinatown Supermarket Salt Lake City" },
        { time: "~9:00 PM", title: "🍳 Target / Walmart — rice cooker & warm layers", detail: "The one essential: an ELECTRIC RICE COOKER (the motel has no kitchen — this cooks rice, congee, noodles, steams buns and dumplings, boils eggs, blanches greens). Plus bowls, chopsticks, utensils, a small knife + cutting board, a thermos, dish soap + sponge, and fleece / beanie / gloves — Yellowstone mornings are near freezing. Skip pots and pans; there’s no stove. Most stores close 10–11pm, so this is the last stop.", map: "Target Salt Lake City Central" },
        { time: "Night", title: "🏨 Check in: Hyatt Place Downtown / The Gateway", detail: "55 N 400 W. No rush tomorrow — you leave at 10, and the free hot breakfast runs 6:30–9:00 on weekdays, so eat here before the errands. Charge everything.", map: "Hyatt Place Salt Lake City Downtown" }
      ],
      eat: "Grab something quick near the stores or at The Gateway; the rice cooker starts earning its keep tomorrow night.",
      tips: [
        "If you land after ~9pm, move the Chinese grocery run to Sep 14 morning (opens 8am) — it’s on the way from Whole Foods.",
        "Bear spray can’t fly — you’ll buy it in Jackson or West Yellowstone tomorrow (~$45–50). Don’t look for it tonight.",
        "Hydrate on the flight: Utah is dry and you’re heading to 6,600–8,900 ft."
      ]
    },
    {
      date: "2026-09-14",
      city: "Grand Teton",
      multiCity: true,
      title: "Pickups → Grand Teton → into Yellowstone",
      summary: "No alarm needed: a 9am errand run (Whole Foods package, Starlink Mini), on the road by 10, the ~5-hour drive to Grand Teton for the quick classic stops, then north through Yellowstone’s South Entrance to your West Yellowstone base by dark.",
      blocks: [
        { time: "~9:00 AM", title: "📦 Whole Foods — package pickup", detail: "Eat the free hotel breakfast first (6:30–9:00 on weekdays), then grab the package at the customer-service / Amazon counter.", map: "Whole Foods Market Salt Lake City" },
        { time: "~9:45 AM", title: "📡 Pick up the Starlink Mini", detail: "Power it up in the car and make sure the app is signed in before you leave cell coverage — there’s almost no service inside the park." },
        { time: "10:00 AM", title: "🚗 Depart SLC → Grand Teton (~5 hrs)", detail: "I-15 North → US-89 through Star Valley into Jackson (scenic), or I-15 → Idaho Falls → US-26 (a touch faster). Fuel up in Jackson and buy BEAR SPRAY here (~$45–50) — it’s grizzly country from here on. Aim to be in Jackson by ~3pm.", map: "Jackson Wyoming" },
        { time: "~3:15 PM", title: "🏔 Mormon Row — the Moulton barns", detail: "The postcard: weathered barns with the Teton range behind. 20 minutes, right off Antelope Flats Road. Bison often graze nearby — stay 25 yards back.", map: "Mormon Row Historic District" },
        { time: "~3:50 PM", title: "📸 Snake River Overlook", detail: "Ansel Adams’ viewpoint — the river bend with the peaks beyond. A quick stop on US-89 heading north.", map: "Snake River Overlook" },
        { time: "~4:10 PM", title: "🏞 Jenny Lake — only if you’re ahead of schedule", detail: "The prettiest lake in the park, but it’s a ~20-min detour each way. Do a short lakeshore stroll only if you reached Mormon Row by 3:15; otherwise skip it — the light at Oxbow and getting through the park before dark matter more.", map: "Jenny Lake" },
        { time: "~4:30 PM", title: "🦌 Oxbow Bend", detail: "Mount Moran reflected in the Snake River; moose and elk in the afternoon light. Northernmost stop — from here it’s straight north to Yellowstone.", map: "Oxbow Bend Turnout" },
        { time: "4:45 PM", title: "🚗 North through the South Entrance → West Thumb", detail: "Leave Oxbow by 4:45pm. Yellowstone’s South Entrance is ~40 min, then West Thumb Geyser Basin (20–30 min: lakeside geysers, Fishing Cone) — you won’t need to come back here later. Then west past Old Faithful → Madison → West Yellowstone. Sunset ~7:35pm; the last stretch is at dusk, so drive slowly — animals are on the road.", map: "West Thumb Geyser Basin" },
        { time: "~8:00 PM", title: "🏠 Check in: Dude & Roundup Motel", detail: "3 Madison Ave, one block from the West Entrance — your base for 5 nights. Set up the rice cooker (ask the front desk where it’s fine to use it), get rice or congee going, and put the Starlink Mini somewhere with a clear view of the sky. Grab a bucket of ice for the cooler.", map: "Dude and Roundup Motel West Yellowstone" }
      ],
      eat: "Hotel breakfast in SLC; lunch in Jackson (fuel stop); first rice-cooker dinner at the motel.",
      tips: [
        "Leaving Oxbow after ~5:15pm? Take the Idaho route instead: Jackson → Teton Pass → Victor → Ashton → Island Park → West Yellowstone (~2h45, no wildlife jams, lit highway) — you’d skip West Thumb, which is fine.",
        "Park passes: Grand Teton $35 + Yellowstone $35 per vehicle (7 days each) = $70; buy the $80 America the Beautiful annual pass only if you’ll visit another park within a year.",
        "Buy bear spray in Jackson and carry it on every trail from now on.",
        "Taper week: keep today to easy walking — the drive is the workout."
      ]
    },
    {
      date: "2026-09-15",
      city: "West Yellowstone",
      title: "Yellowstone Day 1 · Geyser country: Old Faithful & Grand Prismatic",
      summary: "The closest, highest-payoff day, started late: the Firehole River geyser basins, Grand Prismatic from the overlook, an Old Faithful eruption, the Upper Geyser Basin boardwalks, and bison in the Madison meadows at dusk. 8–10 km of flat boardwalk — perfect active recovery.",
      blocks: [
        { time: "~10:00 AM", title: "🌊 Firehole Canyon Drive & Firehole Falls", detail: "Slow breakfast, then just past Madison Junction — a 2-mile one-way scenic side road to a 40-ft waterfall. 10 minutes.", map: "Firehole Falls" },
        { time: "~10:45 AM", title: "🫧 Fountain Paint Pot", detail: "All four thermal features on one short loop: mud pots, fumaroles, hot springs and geysers (Clepsydra erupts almost constantly). 30 minutes.", map: "Fountain Paint Pot" },
        { time: "~11:30 AM", title: "🌈 Midway Geyser Basin — Grand Prismatic up close", detail: "Boardwalk past Excelsior Geyser’s steaming crater to the rim of Grand Prismatic. Late morning is ideal — less steam than at dawn, so the colours show.", map: "Grand Prismatic Spring" },
        { time: "~12:30 PM", title: "🥾 Fairy Falls Trail → Grand Prismatic Overlook", detail: "From the Fairy Falls trailhead, 1.2 km each way on a flat trail then a short climb to the overlook — THE aerial view of the rainbow rings, best with the midday sun overhead. ~1 hour round trip.", map: "Fairy Falls Trailhead" },
        { time: "~2:00 PM", title: "⛲ Old Faithful + Old Faithful Inn (lunch here)", detail: "Check the next predicted eruption at the visitor center or in the NPS app (every ~90 min, ±10). Grab a bench 15 min early. Eat your packed lunch, then the historic Inn lobby next door.", map: "Old Faithful" },
        { time: "~3:00 PM", title: "🚶 Upper Geyser Basin boardwalk — Morning Glory Pool", detail: "The 2.4 km boardwalk past Castle, Grand and Riverside geysers to Morning Glory Pool. Grand Geyser’s predicted window is on the visitor-center board — worth waiting if it’s within 30 min.", map: "Morning Glory Pool" },
        { time: "~5:00 PM", title: "🧿 Biscuit Basin & Black Sand Basin", detail: "Two small, colourful basins on the way back — Sapphire Pool and Emerald Pool. 20 minutes each.", map: "Biscuit Basin" },
        { time: "~6:30 PM", title: "🦬 Madison meadows at dusk — bison & elk", detail: "Your first sunset wildlife session, 15 min from home: bison and elk graze the Madison River meadows in the last light (sunset ~7:35). Pull over at the turnouts; stay in or beside the car.", map: "Madison Junction" }
      ],
      eat: "Late rice-cooker breakfast at the motel; packed lunch (rice + protein) at Old Faithful; dinner back at the motel after dusk.",
      tips: [
        "Old Faithful predictions: NPS app or geysertimes.org. Riverside and Grand are the two other predictable ones — check the board.",
        "Boardwalks only — the crust is thin and the water is boiling. Keep phones and hats secured; nothing can be retrieved.",
        "Taper: a 25–30 min easy run + 6 × 20s strides before you head out (late morning is fine), then the boardwalks are your recovery walk.",
        "Starting at 10 skips the freezing hour, but it’s still 40–55°F till noon at 7,000 ft — fleece + shell, shed layers by early afternoon."
      ]
    },
    {
      date: "2026-09-16",
      city: "West Yellowstone",
      title: "Yellowstone Day 2 · Grand Canyon, the Lake & Hayden Valley at sunset",
      summary: "East to the Grand Canyon of the Yellowstone for the Lower Falls from both rims, down to the Mud Volcano and Yellowstone Lake, then back into Hayden Valley for the main event — the sunset wildlife session — and a careful drive home in the dark.",
      blocks: [
        { time: "~9:30 AM", title: "🚗 Depart → Canyon Village", detail: "Madison → Norris → Canyon, ~1.5 hrs. Norris gets its own morning on Day 4, so pass it today.", map: "Canyon Village" },
        { time: "~11:00 AM", title: "💦 North Rim — Brink of the Lower Falls & Lookout Point", detail: "Brink of the Lower Falls: a steep 1 km round trip (180 m down and back up) to stand at the lip of the 94 m waterfall — today’s one leg workout. Then Lookout Point and Grand View from the rim road.", map: "Brink of the Lower Falls" },
        { time: "~12:45 PM", title: "🎨 South Rim — Artist Point (lunch at Canyon Village)", detail: "The classic painting view of the Lower Falls and the yellow canyon walls. A 5-minute walk from the parking lot. Lunch at the Canyon Village picnic area after.", map: "Artist Point" },
        { time: "~2:30 PM", title: "🌋 Mud Volcano & Dragon’s Mouth Spring", detail: "Drive south straight through Hayden Valley (a quick look — you’re coming back for the sunset) to the sulphurous, churning mud features on a short boardwalk loop. 30 minutes.", map: "Mud Volcano" },
        { time: "~3:15 PM", title: "🏞 Fishing Bridge & Lake Yellowstone Hotel", detail: "The huge alpine lake (7,733 ft). Walk the shore, peek into the 1891 Lake Hotel sunroom. 45 minutes.", map: "Lake Yellowstone Hotel" },
        { time: "~4:30 PM", title: "🌅 Hayden Valley — the sunset wildlife session", detail: "Back north into Hayden Valley for the last three hours of light (sunset ~7:30). Drive it slowly, then settle at a turnout (Grizzly Overlook or the Alum Creek pullouts) with binoculars and a thermos: bison herds, elk, and this is when grizzlies and wolves come out. Never approach; 25 yards from bison, 100 from bears.", map: "Hayden Valley" },
        { time: "~7:45 PM", title: "🌙 Home in the dark via Canyon → Norris → Madison", detail: "~2 hrs. Drive slowly (45 mph max), high beams when the road is empty — bison stand on the asphalt for the warmth. Late dinner at the motel." }
      ],
      eat: "Lunch at the Canyon Village picnic area; thermos + buns at Hayden Valley; late dinner at the motel.",
      tips: [
        "Hayden Valley is best in the last two hours of light — that’s your wildlife session, no alarm required. Bison are guaranteed; grizzlies and wolves are a real chance at dusk.",
        "Brink of the Lower Falls is the only real climb this week — keep it steady; no need for more.",
        "Hayden Valley ‘bison jams’ can stop traffic for 20 min — enjoy it, don’t honk or get out.",
        "West Thumb was done on the way in (Sep 14), so today skips the lake’s west shore and returns via Norris."
      ]
    },
    {
      date: "2026-09-17",
      city: "West Yellowstone",
      title: "Yellowstone Day 3 · Mammoth, Tower Fall & Lamar Valley at sunset",
      summary: "No predawn start: a late-morning departure, Mammoth’s terraces and bugling elk midday, Tower Fall, then Lamar Valley for the afternoon and sunset — the second-best wolf window and guaranteed bison. A long day with a late return (~10:30pm); tomorrow is the sleep-in day.",
      blocks: [
        { time: "~9:30 AM", title: "🚗 Depart → Norris → Mammoth", detail: "Leave around 9:30 after a proper breakfast. Madison → Norris → Mammoth, ~1.5 hrs (save the Norris boardwalks for tomorrow)." },
        { time: "~11:00 AM", title: "🪨 Mammoth Hot Springs — terraces & the elk rut", detail: "Travertine terraces on the Upper and Lower boardwalks (~1.5 hrs), then lunch at Mammoth. In September bull elk bugle on the Mammoth lawns all day — spectacular, but they charge: stay 25+ yards and keep the car between you and them.", map: "Mammoth Hot Springs" },
        { time: "~2:00 PM", title: "🏞 Tower Fall & Roosevelt", detail: "18 miles east along the northern road (~40 min plus the bridge wait). 132-ft waterfall viewpoint, 5 minutes from the parking lot. Coffee at the Roosevelt Lodge area.", map: "Tower Fall" },
        { time: "~3:30 PM", title: "🐺 Lamar Valley — afternoon into sunset", detail: "America’s Serengeti, from mid-afternoon to sunset (~7:30). Bison herds and pronghorn all afternoon; the last two hours of light are when wolves and bears show. Work the turnouts between Slough Creek and Soda Butte with binoculars, and join anyone with a spotting scope — the wolf-watchers know where the packs are.", map: "Lamar Valley" },
        { time: "~7:45 PM", title: "🌙 Drive home after dark — the way you came", detail: "Lamar → Tower → Mammoth → Norris → West Yellowstone, ~2.5–3 hrs on the lower, familiar road (skip Dunraven Pass in the dark). Slow and steady; home ~10:30pm. Thermos and buns for the road, then a light supper or straight to bed." }
      ],
      eat: "Late rice-cooker breakfast at the motel; lunch at Mammoth; thermos of congee + buns for Lamar and the drive home; a light late supper.",
      tips: [
        "⚠️ Road work at the Yellowstone River Bridge by Tower Junction: single lane with a signal, up to 30-min waits, through Sep 30 — budget it both directions (including after dark).",
        "Dusk is the second-best wolf window after dawn, and you don’t need an alarm for it. Binoculars are the difference between ‘saw a wolf’ and ‘saw a dot’.",
        "The drive home is ~2.5–3 hrs in the dark — 45 mph, watch for bison on the road, and don’t plan anything for tomorrow morning.",
        "Taper day: driving + boardwalks only. Stretch / foam-roll before bed, or when you wake up late tomorrow."
      ]
    },
    {
      date: "2026-09-18",
      city: "West Yellowstone",
      title: "Yellowstone Day 4 · Norris Geyser Basin & an easy taper day",
      summary: "Sleep in after last night’s late return. A relaxed final park day two days before the race: Norris (the hottest, oldest basin, home to Steamboat), a couple of short stops, an afternoon rest, and one last sunset — then pack and start proper carb-loading.",
      blocks: [
        { time: "~10:30 AM", title: "♨️ Norris Geyser Basin — Porcelain & Back Basin", detail: "Two boardwalk loops (~2 hrs, flat): Porcelain Basin’s milky-blue pools and Back Basin with Steamboat, the world’s tallest active geyser (unpredictable, but it steams impressively).", map: "Norris Geyser Basin" },
        { time: "~1:00 PM", title: "🎨 Artists Paintpots & Gibbon Falls", detail: "A 1.6 km loop to colourful mud pots, then Gibbon Falls from the roadside pullout on the way home.", map: "Artists Paintpots" },
        { time: "~2:30 PM", title: "🏠 Lunch & rest at the motel", detail: "Big carb lunch, feet up. Tidy the room and start packing — checkout is tomorrow morning.", map: "Dude and Roundup Motel West Yellowstone" },
        { time: "~4:30 PM", title: "🥾 Optional: Mystic Falls short hike or a last geyser", detail: "Mystic Falls from Biscuit Basin is a gentle 3.5 km round trip — or just revisit Old Faithful for Grand / Riverside if you missed them. Skip Mount Washburn (1,400 ft of climbing) — wrong week for it.", map: "Biscuit Basin" },
        { time: "Evening", title: "🌇 Sunset at Madison, then pack", detail: "Last light on the Madison meadows (sunset ~7:30). Home for a carb-heavy dinner (rice, noodles, steamed buns), pack the car, early-ish night — tomorrow leaves at 11am, no alarm needed.", map: "Madison Junction" }
      ],
      eat: "Carb-loading starts in earnest: rice / noodles / buns at every meal, lean protein, easy on fat and fibre.",
      tips: [
        "D-2 shakeout: 15–20 min easy jog + 4 × 15s strides + a light rehearsal of the stations (10 air-squat-to-press, 20 walking lunges, a few burpees) — technique only, nothing hard. Any time of day.",
        "Carb target today and tomorrow: ~6–8 g per kg bodyweight. Rice cakes, bananas, honey water and juice fill the gaps.",
        "Put the trail gear away tonight — you won’t need it again; bear spray can’t fly, so leave it at the motel or gift it."
      ]
    },
    {
      date: "2026-09-19",
      city: "Salt Lake City",
      multiCity: true,
      title: "Drive back to Salt Lake City · Returns & race eve",
      summary: "Out at 11am, the easy 5-hour run down US-20 and I-15 to Salt Lake City, return the car and everything else in the afternoon, back into the Hyatt Place downtown, and the race-eve routine.",
      blocks: [
        { time: "11:00 AM", title: "🚗 Check out & depart West Yellowstone", detail: "US-20 south through Island Park and Ashton → Idaho Falls → I-15 south. ~320 miles, ~5 hrs with a stop. Descending from 6,600 ft to 4,300 ft — you’ll feel lighter.", map: "Dude and Roundup Motel West Yellowstone" },
        { time: "~1:00 PM", title: "⛽ Fuel & stretch at Idaho Falls", detail: "Halfway. Gas, restroom, a 10-minute walk, refill water. Lunch from the cooler (rice + chicken) — keep it familiar and low-fibre.", map: "Idaho Falls Idaho" },
        { time: "~4:00 PM", title: "🔁 Arrive SLC — return the car & everything else", detail: "Return the rental car (airport or a downtown branch), plus the Starlink Mini and anything else you planned to return — keep receipts and packaging together. The rice cooker has done its job: leave it, gift it, or check it in your bag. Then Uber to the hotel.", map: "Salt Lake City International Airport" },
        { time: "~5:30 PM", title: "🏨 Check in: Hyatt Place Downtown / The Gateway", detail: "55 N 400 W — a ~0.5 mi, 10-minute walk to the Salt Palace, so race morning needs no transport at all. Pick up your race packet if it’s available today.", map: "Hyatt Place Salt Lake City Downtown" },
        { time: "Evening", title: "🏁 Race-eve routine", detail: "15–20 min walk or very easy jog + 10 min mobility (or full rest). Dinner: white rice + steamed chicken/fish + a little veg + clear soup — nothing new, fried, spicy or high-fibre, no alcohol. Lay out the kit, fill the bottles, set the alarm, in bed early." }
      ],
      eat: "Cooler lunch at Idaho Falls; carb-heavy, low-fibre, familiar dinner downtown (rice-based).",
      tips: [
        "Confirm your Sep 20 wave time tonight — the day runs 07:00–16:40 across categories — and check it against the evening LAX flight (finish + shower + 15-min Uber to SLC + 2 hrs at the airport).",
        "Hydrate + electrolytes all afternoon — a week at altitude in dry air leaves you behind on fluids.",
        "Sleep beats everything tonight; the sleep two nights out matters more than the night before, so you’ve already banked it."
      ]
    },
    {
      date: "2026-09-20",
      city: "Salt Lake City",
      title: "HYROX Salt Lake City · Fly to LAX",
      summary: "Race day at the Salt Palace Convention Center, downtown. Familiar breakfast 2.5–3 hours before your wave, a proper warm-up, race, recover — then an Uber to the airport and the evening flight to LAX.",
      blocks: [
        { time: "Wave −3h", title: "🍚 Race breakfast", detail: "Congee / white rice / oats + a banana + a little egg or chicken, 2.5–3 hrs before your start. Coffee as usual if you drink it. ⚠️ The hotel’s free breakfast opens later at weekends (~7:00am), so for an early wave keep your own breakfast in the room fridge the night before; a midday wave can eat downstairs. 45–60 min before: a banana or a gel + sports drink." },
        { time: "Wave −25min", title: "🔥 Warm-up", detail: "8–10 min easy jog → dynamic mobility → 3 × 20s builds → a light touch of each station (30s row / 30s ski, a few sled steps, 5 wall balls) → 5 quiet minutes before the start." },
        { time: "Your wave", title: "🏁 HYROX Salt Lake City — Salt Palace Convention Center", detail: "90 S West Temple, downtown. Pacing: first 1 km 10–15 s/km slower than goal; sled push low hips + short steps; farmers carry unbroken; wall balls in planned sets (e.g. 25/25/25/25) with short rests; long, low-rate strokes on ski and row. Sip electrolytes at the stations; a gel around station 4 if you’ll be over 60 min.", map: "Salt Palace Convention Center" },
        { time: "After", title: "🥤 Recovery meal & shower", detail: "Carbs + protein within an hour (rice + chicken or a recovery shake), keep walking, then shower at the hotel and check out." },
        { time: "Evening", title: "✈️ Uber to SLC → fly to LAX", detail: "Salt Palace → SLC airport is ~15 min. Be there 2 hours before departure. Compression socks and water on the flight — you’ve earned the window seat.", map: "Salt Lake City International Airport" }
      ],
      eat: "Race breakfast at the hotel; recovery meal downtown; snacks for the flight.",
      tips: [
        "Bring: race bib/packet, ID, familiar shoes (broken in), chalk if allowed, a change of clothes, and your own fuel — don’t try anything new on the day.",
        "Wave schedule on Sep 20: Doubles Women 07:00–11:50 · Women/Adaptive 12:20–14:20 · Doubles Men 14:50–16:40 — check yours in the HYROX app.",
        "Post-race: no sitting still for hours — walk the terminal, hydrate, and keep the protein coming."
      ]
    }
  ],

  // ---- Logistics ----
  logistics: [
    { label: "Flight out", value: "Sep 13 (Sun): fly to Salt Lake City, evening arrival. Rental car pickup at SLC that night." },
    { label: "Rental car", value: "SLC pickup Sep 13 night → return Sep 19 afternoon (6 days). Round trip ~900 miles: SLC → Grand Teton → West Yellowstone (park loops) → SLC." },
    { label: "SLC → Grand Teton", value: "Sep 14: ~280 miles / ~5 hrs via I-15 → US-89 (Star Valley → Jackson) or I-15 → Idaho Falls → US-26. Then north through Yellowstone’s South Entrance to West Yellowstone (~3 hrs incl. West Thumb)." },
    { label: "Yellowstone base", value: "Dude & Roundup Motel, 3 Madison Ave, West Yellowstone — one block from the West Entrance, 5 nights Sep 14–19. Madison Junction is 14 miles in; Old Faithful ~45 min, Canyon ~1h15, Mammoth ~1h30, Lamar Valley ~2.5 hrs." },
    { label: "West Yellowstone → SLC", value: "Sep 19: 11am departure, ~320 miles / ~5 hrs via US-20 → I-15 (Idaho Falls stop). Return the car + everything else in the afternoon." },
    { label: "HYROX", value: "Sep 20 (Sun) at the Salt Palace Convention Center, 90 S West Temple, downtown SLC. Waves 07:00–16:40 by category — confirm yours. No car needed: a ~0.5 mi (10-min) walk from the Hyatt Place, then Uber to the airport (~15 min)." },
    { label: "Flight home", value: "Sep 20 (Sun) evening: SLC → LAX. Be at the airport 2 hrs before departure." }
  ],

  // ---- Booking / to-do checklist ----
  bookings: [
    "TODO — Flight SFO → SLC (Sep 13, evening arrival)",
    "TODO — Flight SLC → LAX (Sep 20, evening)",
    "TODO — Rental car: SLC Sep 13 night → Sep 19 afternoon (confirm one location, or airport pickup / downtown return)",
    "✅ Hyatt Place Salt Lake City / Downtown / The Gateway (55 N 400 W) — Sep 13 & Sep 19, both SLC nights. Free breakfast, mini-fridge, ~10-min walk to the Salt Palace",
    "✅ Dude & Roundup Motel, West Yellowstone (3 Madison Ave) — Double Deluxe, multiple beds, Sep 14–19. ⚠️ NO kitchen: call ahead and ask (a) whether your room has a fridge and microwave, and (b) whether an in-room rice cooker is allowed",
    "🍚 BUY AN ELECTRIC RICE COOKER on Sep 13 — with no kitchen it is your stove all week: rice, congee, noodles, steamed buns and dumplings, boiled eggs, blanched greens",
    "✅ HYROX Salt Lake City registration (Sep 20) — confirm your wave time in the app",
    "📦 Whole Foods package pickup (Sep 14 morning) — have the pickup code ready",
    "📡 Starlink Mini pickup (Sep 14 morning) — account activated & app signed in",
    "🎫 Park entry: Grand Teton $35 + Yellowstone $35 per vehicle (7 days), or the $80 America the Beautiful annual pass",
    "🐻 Bear spray — buy in Jackson or West Yellowstone (~$45–50); it cannot fly",
    "🛒 Grocery list for Chinatown Supermarket (Sep 13, Sunday till 10pm) — rice-cooker friendly: rice, congee fixings, noodles, mantou/baozi, frozen dumplings, eggs, pre-cooked/braised meats, tofu, leafy greens, sauces, bananas, honey",
    "🍳 Target or Walmart list: ELECTRIC RICE COOKER, bowls, chopsticks, utensils, small knife + cutting board, thermos, cooler bag, dish soap + sponge, fleece, beanie, gloves (no pots or pans — there’s no stove)",
    "📲 Download before losing signal: NPS Yellowstone app (geyser predictions), offline Google Maps for the park, GeyserTimes",
    "── ROAD & PARK STATUS ──────────────",
    "🛣 Check NPS road status the night before each park day (early snow can close Dunraven Pass); Tower Junction bridge work means up to 30-min single-lane waits through Sep 30",
    "🔁 Sep 19 returns: rental car, Starlink Mini, and anything else you’re returning — keep receipts + packaging together in one bag"
  ],

  // ---- Packing list ----
  packing: {
    "Essentials": ["ID / driver’s licence (for the rental car)", "Credit cards + a little cash", "Phone + car charger + power bank", "Starlink Mini + power (12V / USB-C) + app signed in", "Offline maps + NPS app downloaded", "Park pass / receipt", "Water bottles (2+) — altitude & dry air", "Sunscreen, sunglasses, lip balm (strong sun at 7,000 ft)", "Headlamp (after-dark drives home from Hayden & Lamar)", "Binoculars 🐺"],
    "Cold-weather layers": ["Fleece / down mid-layer", "Waterproof, windproof shell", "Beanie + gloves (mornings ~30°F)", "Thermal base layer", "Warm socks", "Comfortable broken-in walking / hiking shoes", "Rain pants or quick-dry pants"],
    "Hiking & wildlife": ["🐻 Bear spray (buy on arrival — cannot fly)", "Day pack", "Trail snacks", "Thermos (congee / hot tea for the sunset wildlife sessions)", "Blister plasters / small first-aid kit", "Camera / phone lens wipe (geyser steam)"],
    "Cooking & food": ["Electric rice cooker (buy Sep 13 — no kitchen at the motel)", "Bowls, chopsticks, utensils, small knife + cutting board", "Cooler bag + ice from the motel machine (room may have no fridge)", "Dish soap + sponge + a few food containers", "Rice, congee fixings, noodles, mantou/baozi (race-week carbs)", "Eggs, frozen dumplings, pre-cooked meats, tofu, leafy greens, sauces", "Bananas, honey, juice, rice cakes (carb-load fillers)", "Electrolyte tabs / sports drink"],
    "HYROX race kit": ["Race shoes (broken in) + socks", "Race top / shorts + a change of clothes", "Gels / chews (tested before) + electrolytes", "Chalk (if allowed) + wrist wraps / grips if you use them", "Race bib / packet confirmation", "Foam roller or massage ball", "Compression socks for the flight home"]
  }
};

/*
 * Coordinates for every "map" key above — drives the per-day Leaflet maps,
 * the numbered pins, the dashed route line and the Google Maps route button.
 * [latitude, longitude]
 */
const PLACES = {
  // ---- Salt Lake City ----
  "Salt Lake City International Airport": [40.7899, -111.9791],
  "Chinatown Supermarket Salt Lake City": [40.6985, -111.8885],
  "Target Salt Lake City Central": [40.7433, -111.8990],
  "Hyatt Place Salt Lake City Downtown": [40.7700, -111.9017],
  "Whole Foods Market Salt Lake City": [40.7607, -111.8710],
  "Salt Palace Convention Center": [40.7677, -111.8940],
  // ---- Grand Teton ----
  "Jackson Wyoming": [43.4799, -110.7624],
  "Mormon Row Historic District": [43.6603, -110.6653],
  "Snake River Overlook": [43.7414, -110.6360],
  "Jenny Lake": [43.7515, -110.7220],
  "Oxbow Bend Turnout": [43.8665, -110.5520],
  // ---- Yellowstone ----
  "West Thumb Geyser Basin": [44.4163, -110.5727],
  "Dude and Roundup Motel West Yellowstone": [44.6592, -111.0951],
  "Madison Junction": [44.6425, -110.8590],
  "Firehole Falls": [44.6296, -110.8620],
  "Fountain Paint Pot": [44.5498, -110.8085],
  "Grand Prismatic Spring": [44.5251, -110.8382],
  "Fairy Falls Trailhead": [44.5152, -110.8330],
  "Old Faithful": [44.4605, -110.8281],
  "Morning Glory Pool": [44.4750, -110.8437],
  "Biscuit Basin": [44.4848, -110.8530],
  "Canyon Village": [44.7340, -110.4900],
  "Brink of the Lower Falls": [44.7185, -110.4990],
  "Artist Point": [44.7202, -110.4795],
  "Hayden Valley": [44.6500, -110.4700],
  "Mud Volcano": [44.6248, -110.4336],
  "Lake Yellowstone Hotel": [44.5498, -110.3990],
  "Lamar Valley": [44.8985, -110.2280],
  "Tower Fall": [44.8920, -110.3873],
  "Mammoth Hot Springs": [44.9766, -110.7027],
  "Norris Geyser Basin": [44.7263, -110.7027],
  "Artists Paintpots": [44.6963, -110.7398],
  // ---- Drive home ----
  "Idaho Falls Idaho": [43.4917, -112.0339]
};

/*
 * Weather for the trip window (Sep 13 – 20, 2026).
 *  - `normals`: typical mid-September averages per area (offline baseline).
 *  - Live upgrade: app.js calls Open-Meteo for any date within forecast range
 *    and replaces the normals with the real forecast. `coords` drive that lookup.
 * Temps in °F. Mountain time.
 */
const WEATHER = {
  startDate: "2026-09-13",
  endDate: "2026-09-20",
  timezone: "America/Denver",
  dayCity: {
    "2026-09-13": "Salt Lake City",
    "2026-09-14": "Grand Teton",
    "2026-09-15": "West Yellowstone",
    "2026-09-16": "West Yellowstone",
    "2026-09-17": "West Yellowstone",
    "2026-09-18": "West Yellowstone",
    "2026-09-19": "Salt Lake City",
    "2026-09-20": "Salt Lake City"
  },
  normals: {
    "Salt Lake City":   { hi: 80, lo: 56, code: 0, rainChance: 10 },
    "Grand Teton":      { hi: 67, lo: 33, code: 1, rainChance: 15 },
    "West Yellowstone": { hi: 61, lo: 29, code: 1, rainChance: 20 }
  },
  coords: {
    "Salt Lake City": [40.7608, -111.8910],
    "Grand Teton": [43.6553, -110.7181],
    "West Yellowstone": [44.6621, -111.1041]
  }
};
