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
    "⚠️ CHECK YOUR HYROX DIVISION FIRST. Sunday Sep 20 runs only three: Doubles Women 07:00–11:50, Women/Adaptive Women 12:20–14:20, Doubles Men 14:50–16:40. Individual HYROX Men races Friday 08:00–09:00 or Saturday 08:00–11:20, and Doubles Mixed is Saturday 11:50–17:40 — if you’re in any of those, the Sep 19 drive back is far too late and the whole week has to move. Confirm the division and start time in the HYROX app before you fly.",
    "🐻 Grizzly country: carry bear spray on every trail. RENT it in Jackson on the way in (~$28 for the 5 days) and drop it in West Yellowstone — cheaper than buying, and it can’t fly home anyway. Keep 100 yards from bears and wolves, 25 from bison and elk; the September elk rut at Mammoth is a highlight, and the bulls charge.",
    "🎫 Park entry: Yellowstone is $35 per vehicle for 7 days. Grand Teton has always been charged separately (another $35), though some 2026 sources now say one pass covers both — the $80 America the Beautiful annual pass settles it for at most $10 more and lasts a year. ⚠️ New for 2026: non-US residents aged 16+ pay a $100 per-person surcharge unless they hold an annual pass (the non-resident version is $250). If everyone in the car is a US resident this doesn’t apply.",
    "🛣 Four park days, each on its own arm of the figure-8, so you rarely drive the same road twice: geyser basins south of Madison (Sep 15), Norris + Canyon + Hayden to the east (Sep 16), Mammoth + Tower + Lamar in the north (Sep 17), and a short local day near town (Sep 18). Every ‘extra’ sight sits on a road you already have to drive.",
    "❄️ A cold front has arrived: snow showers in West Yellowstone on Sep 18 (high ~50°F, night 23°F) and again on the Sep 19 drive (high ~45°F, under half an inch). Targhee Pass sits ten minutes out of town — check Montana 511 and Idaho 511 before leaving, and delay an hour or two if it’s actively snowing. Then Salt Lake is 86–87°F, so pack a fleece within reach and shorts on top.",
    "🛣 All park roads are open, but two bridge projects sit on your routes: the Madison River Bridge between the West Entrance and Madison Junction (up to 15-min delays, through Nov 1) — that’s your commute EVERY day, both ways — and the Yellowstone River Bridge at Tower Junction on the NE Entrance road (up to 30-min delays), which is your Sep 17 Lamar day. Add the buffer and check the live road status each morning.",
    "🔥 There is fire activity in the region: main roads in both parks are open, but some local areas and trails are closed and afternoons can go hazy with smoke. Check the NPS road/closure pages before each driving day, and AirNow if the haze looks heavy.",
    "🏋️ It’s HYROX taper week: Yellowstone is active recovery (boardwalks, one short hike), not training — and there are no predawn starts: every day leaves around 9:30–10am and wildlife is scheduled at sunset instead. The hard work is done; carb-loading starts Sep 17.",
    "📡 No cell service inside the park. The Starlink Mini works with a clear sky — from the motel parking lot, trailhead lots and turnouts — so download offline maps and geyser predictions too.",
    "🍚 No kitchen at the motel, but they’re providing a fridge and microwave, and a rice cooker (bought Sep 13) covers rice, congee, noodles, steamed buns, boiled eggs and blanched greens. Chinatown Supermarket on night one stocks the week, and a thermos of congee makes the sunset wildlife sessions and dark drives home civilised."
  ],

  cities: [
    { name: "Salt Lake City", nights: 2, dates: "Sep 13 & Sep 19" },
    { name: "Grand Teton", nights: 0, dates: "Sep 14 (afternoon)" },
    { name: "West Yellowstone", nights: 5, dates: "Sep 14–19" }
  ],

  // ---- Where you're staying ----
  stays: [
    { hotel: "Hyatt Place Salt Lake City / Downtown / The Gateway", city: "Salt Lake City", dates: "Sep 13 & Sep 19", nights: 2, area: "55 N 400 W, at The Gateway — ~15 min from the airport, and a ~0.5 mi (10-min) walk to the Salt Palace, so race morning needs no car or Uber. Free hot breakfast (weekdays 6:30–9:00, later at weekends) and a mini-fridge in the room." },
    { hotel: "Dude & Roundup Motel, West Yellowstone", city: "West Yellowstone", dates: "Sep 14–19", nights: 5, area: "3 Madison Ave, Double Deluxe room with multiple beds — ONE BLOCK from Yellowstone’s West Entrance, so every park day starts immediately (14 mi to Madison Junction) and the after-dark drives home end fast. No kitchen, but the motel is providing a FRIDGE and MICROWAVE (confirmed by phone); add the rice cooker for rice and congee and you have a workable little kitchen. Starlink Mini works from the parking lot." }
  ],

  // ---- Day-by-day itinerary ----
  // Each block's "map" key is looked up in PLACES for the day map + Google Maps links.
  days: [
    {
      date: "2026-09-13",
      city: "Salt Lake City",
      title: "Fly to Salt Lake City · Night car pickup & supply run",
      summary: "Travel day. Land in the evening, grab the rental car, then a one-stop-shop night northbound: Chinese groceries for the week at Chinatown Supermarket (open till 10pm Sunday), then an electric rice cooker and warm layers — with the motel’s fridge and microwave, that cooker completes a workable little kitchen.",
      blocks: [
        { time: "Evening", title: "✈️ Land at SLC → pick up the rental car", detail: "Rental counters are in the terminal / Rental Car Center. Note the mileage — you return the car Sep 19 afternoon. Check the trunk fits a week of food plus gear.", map: "Salt Lake City International Airport" },
        { time: "~8:00 PM", title: "🛒 Chinatown Supermarket — groceries for the week", detail: "3390 S State St (Sunday hours till 10pm, ~20 min from the airport). You’ll have a fridge, a microwave and a rice cooker, so shop properly: rice, congee fixings, noodles, mantou/baozi (race-week carbs), frozen dumplings, eggs, pre-cooked or braised meats, tofu, leafy greens, sauces, bananas and honey. A cooler bag is still worth it for the long park days.", map: "Chinatown Supermarket Salt Lake City" },
        { time: "~9:00 PM", title: "🍳 Target / Walmart — rice cooker & warm layers", detail: "The one thing worth buying: an ELECTRIC RICE COOKER. The motel’s microwave reheats and steams, but only the cooker does proper rice and congee — and congee in a thermos is what makes the sunset wildlife sessions pleasant. Plus bowls, chopsticks, utensils, a small knife + cutting board, a thermos, dish soap + sponge, and fleece / beanie / gloves — Yellowstone mornings are near freezing. Skip pots and pans; there’s no stove. Most stores close 10–11pm, so this is the last stop.", map: "Target Salt Lake City Central" },
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
        { time: "10:00 AM", title: "🚗 Depart SLC → Grand Teton (~5 hrs)", detail: "I-15 North → US-89 through Star Valley into Jackson (scenic), or I-15 → Idaho Falls → US-26 (a touch faster). Fuel up in Jackson and RENT bear spray at Bear Aware / Teton Backcountry Rentals, 565 N Cache St (open 8am–6pm daily, (307) 828-1885) — N Cache is US-89 itself, so it’s on your way north, no detour. ~$28 for the 5 days, and you drop it in West Yellowstone. Aim to be in Jackson by ~3pm.", map: "Jackson Wyoming" },
        { time: "~3:15 PM", title: "🏔 Mormon Row — the Moulton barns", detail: "The postcard: weathered barns with the Teton range behind. 20 minutes, right off Antelope Flats Road. Bison often graze nearby — stay 25 yards back.", map: "Mormon Row Historic District" },
        { time: "~3:50 PM", title: "📸 Snake River Overlook", detail: "Ansel Adams’ viewpoint — the river bend with the peaks beyond. A quick stop on US-89 heading north.", map: "Snake River Overlook" },
        { time: "~4:10 PM", title: "🏞 Jenny Lake — only if you’re ahead of schedule", detail: "The prettiest lake in the park, but it’s a ~20-min detour each way. Do a short lakeshore stroll only if you reached Mormon Row by 3:15; otherwise skip it — the light at Oxbow and getting through the park before dark matter more.", map: "Jenny Lake" },
        { time: "~4:30 PM", title: "🦌 Oxbow Bend", detail: "Mount Moran reflected in the Snake River; moose and elk in the afternoon light. Northernmost stop — from here it’s straight north to Yellowstone.", map: "Oxbow Bend Turnout" },
        { time: "4:45 PM", title: "🚗 North through the South Entrance → West Thumb", detail: "Leave Oxbow by 4:45pm. Yellowstone’s South Entrance is ~40 min, then West Thumb Geyser Basin (20–30 min: lakeside geysers, Fishing Cone) — you won’t need to come back here later. Then west past Old Faithful → Madison → West Yellowstone. Sunset ~7:35pm; the last stretch is at dusk, so drive slowly — animals are on the road.", map: "West Thumb Geyser Basin" },
        { time: "~8:00 PM", title: "🏠 Check in: Dude & Roundup Motel", detail: "3 Madison Ave, one block from the West Entrance — your base for 5 nights. Load the fridge, set up the rice cooker, get rice or congee going for tomorrow’s thermos, and put the Starlink Mini somewhere with a clear view of the sky.", map: "Dude and Roundup Motel West Yellowstone" }
      ],
      eat: "Hotel breakfast in SLC; lunch in Jackson (fuel stop); first rice-cooker dinner at the motel.",
      tips: [
        "Leaving Oxbow after ~5:15pm? Take the Idaho route instead: Jackson → Teton Pass → Victor → Ashton → Island Park → West Yellowstone (~2h45, no wildlife jams, lit highway) — you’d skip West Thumb, which is fine.",
        "Park passes: Yellowstone is $35 per vehicle (7 days); Grand Teton is normally a separate $35. Sources disagree for 2026 on whether one covers both — the $80 America the Beautiful pass removes the question. Non-US residents: see the $100 surcharge note in the overview.",
        "Rent bear spray in Jackson (Bear Aware, ~$28 for 5 days) and carry it on every trail from now on — you can drop it in West Yellowstone, so there’s no backtrack.",
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
        { time: "~5:00 PM", title: "🧿 Biscuit Basin & Black Sand Basin", detail: "Two small, colourful basins on the way back — Sapphire Pool and Emerald Pool, 20 minutes each. Still got energy? The gentle 3.5 km round trip to Mystic Falls starts from Biscuit Basin, and today is the day for it — you won’t come back down this road.", map: "Biscuit Basin" },
        { time: "~6:30 PM", title: "🦬 Madison meadows at dusk — bison & elk", detail: "Your first sunset wildlife session, 15 min from home: bison and elk graze the Madison River meadows in the last light (sunset ~7:35). Pull over at the turnouts; stay in or beside the car.", map: "Madison Junction" }
      ],
      eat: "Late rice-cooker breakfast at the motel; packed lunch (rice + protein) at Old Faithful; dinner back at the motel after dusk.",
      tips: [
        "Old Faithful predictions: NPS app or geysertimes.org. Riverside and Grand are the two other predictable ones — check the board.",
        "Boardwalks only — the crust is thin and the water is boiling. Keep phones and hats secured; nothing can be retrieved.",
        "Taper: a 25–30 min easy run + 6 × 20s strides before you head out (late morning is fine), then the boardwalks are your recovery walk.",
        "Coldest morning of the trip: the low is about 24°F (−4°C). Starting at 10 skips the worst of it, but scrape the windscreen and expect 35–45°F until late morning — fleece + shell + gloves, shed by early afternoon.",
        "A hard freeze means heavy steam on the basins first thing. That’s why Grand Prismatic’s colours are best from the Fairy Falls overlook around midday, once the steam thins — which is exactly where today puts you."
      ]
    },
    {
      date: "2026-09-16",
      city: "West Yellowstone",
      title: "Yellowstone Day 2 · Norris, the Grand Canyon & Hayden Valley at sunset",
      summary: "One clean line east and back, with nothing driven twice: Norris Geyser Basin on the way out, the Grand Canyon of the Yellowstone from both rims, the Mud Volcano, then Hayden Valley for the sunset wildlife session and a slow drive home in the dark.",
      blocks: [
        { time: "~9:30 AM", title: "🚗 Depart → Norris (14 mi)", detail: "In through the West Entrance and along the Madison–Norris road. You drive this stretch again tomorrow, so today takes the stop that needs real time." },
        { time: "~10:15 AM", title: "♨️ Norris Geyser Basin — Porcelain & Back Basin", detail: "The park’s hottest and oldest thermal area, and it sits right on today’s route. Two flat boardwalk loops (~2 hrs): Porcelain Basin’s milky-blue pools, and Back Basin with Steamboat — the world’s tallest active geyser (unpredictable, but it steams impressively).", map: "Norris Geyser Basin" },
        { time: "~12:45 PM", title: "💦 Canyon North Rim — Brink of the Lower Falls", detail: "Norris → Canyon is 12 mi. Lunch at the Canyon Village picnic area first, then Brink of the Lower Falls: a steep 1 km round trip (180 m down and back up) to stand at the lip of the 94 m waterfall — today’s one leg workout. Then Lookout Point and Grand View from the rim road.", map: "Brink of the Lower Falls" },
        { time: "~2:45 PM", title: "🎨 Canyon South Rim — Artist Point", detail: "The classic painting view of the Lower Falls and the yellow canyon walls, a 5-minute walk from the parking lot.", map: "Artist Point" },
        { time: "~3:45 PM", title: "🌋 Mud Volcano & Dragon’s Mouth Spring", detail: "10 mi south through Hayden Valley — a first look, since you come straight back for the sunset. Sulphurous, churning mud on a short boardwalk loop. 30 minutes.", map: "Mud Volcano" },
        { time: "~4:30 PM", title: "🌅 Hayden Valley — the sunset wildlife session", detail: "Back north into Hayden Valley for the last three hours of light (sunset ~7:30). Drive it slowly, then settle at a turnout (Grizzly Overlook or the Alum Creek pullouts) with binoculars and a thermos: bison herds, elk, and this is when grizzlies and wolves come out. Never approach; 25 yards from bison, 100 from bears.", map: "Hayden Valley" },
        { time: "~7:45 PM", title: "🌙 Home in the dark via Canyon → Norris → Madison", detail: "~2 hrs. Drive slowly (45 mph max), high beams when the road is empty — bison stand on the asphalt for the warmth. Late dinner at the motel." }
      ],
      eat: "Lunch at the Canyon Village picnic area; thermos + buns at Hayden Valley; late dinner at the motel.",
      tips: [
        "Norris moved onto today’s route on purpose — it sits on the Madison–Norris road you already drive, so it costs no extra miles instead of needing a day of its own.",
        "Yellowstone Lake is already covered: you walked West Thumb on the way in (Sep 14), so today skips the Fishing Bridge / Lake Hotel spur and its ~50-mile round trip.",
        "Hayden Valley is best in the last two hours of light — that’s your wildlife session, no alarm required. Bison are guaranteed; grizzlies and wolves are a real chance at dusk.",
        "Brink of the Lower Falls is the only real climb this week — keep it steady. And ‘bison jams’ can stop traffic for 20 min: enjoy it, don’t honk or get out."
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
        "⚠️ Road work at the Yellowstone River Bridge by Tower Junction: single lane with a signal, up to 30-min waits, running into November — budget it in both directions, including after dark.",
        "Dusk is the second-best wolf window after dawn, and you don’t need an alarm for it. Binoculars are the difference between ‘saw a wolf’ and ‘saw a dot’.",
        "Home the way you came (Tower → Mammoth → Norris) rather than looping over Dunraven Pass: it repeats ~36 miles, but it avoids an 8,859-ft mountain pass in the dark two days before the race. ~2.5–3 hrs, 45 mph, watch for bison on the road — and don’t plan anything for tomorrow morning.",
        "Taper day: driving + boardwalks only. Stretch / foam-roll before bed, or when you wake up late tomorrow."
      ]
    },
    {
      date: "2026-09-18",
      city: "West Yellowstone",
      title: "Yellowstone Day 4 · Snow day — indoors first, then the last stops",
      summary: "A cold front arrived: snow showers until about 3pm and a high near 50°F. So today flips — the Discovery Center indoors while it snows, the two short roadside stops once it eases, then rest, carb-loading and packing. Two days out from the race, a low-effort day is exactly right.",
      blocks: [
        { time: "~10:30 AM", title: "🐻 Grizzly & Wolf Discovery Center (indoors, while it snows)", detail: "201 S Canyon St, a few blocks from the motel. Moved to the morning because of the snow showers: resident grizzlies, a wolf pack and raptors at close range — the guaranteed version of everything you’ve been scanning for through binoculars, with no driving. ~1.5 hrs, and mostly under cover.", map: "Grizzly and Wolf Discovery Center West Yellowstone" },
        { time: "~12:30 PM", title: "🔁 Return the bear spray — Freeheel & Wheel", detail: "40 Yellowstone Ave, a few blocks away, 24/7 drop box. Do this today: it can’t fly home, it’s a rental, and tomorrow morning is a weather-dependent departure you don’t want to complicate.", map: "Grizzly and Wolf Discovery Center West Yellowstone" },
        { time: "~2:00 PM", title: "🏠 Lunch, rest & pack at the motel", detail: "Big carb lunch, feet up. Pack the car tonight rather than tomorrow — if it’s snowing in the morning you’ll want to just get in and go. Put the trail gear away; you’re done with the park.", map: "Dude and Roundup Motel West Yellowstone" },
        { time: "~3:30 PM", title: "🎨 Gibbon Falls & Artists Paintpots (once the showers ease)", detail: "Showers are forecast to taper after ~3pm. The two stops on the Madison–Norris road you’ve driven past all week: Gibbon Falls from the roadside pullout, then the 1.6 km loop at Artists Paintpots. 15–25 min from the motel. Snow on the paintpots is genuinely worth seeing — but skip it without hesitation if the road is slushy.", map: "Artists Paintpots" },
        { time: "Evening", title: "🏃 Shakeout, then an early night", detail: "15–20 min very easy jog + 4 × 15s strides, bundled up — or skip the run and just do 10 min of mobility if it’s sleeting. Carb-heavy dinner (rice, noodles, steamed buns), then bed. Tomorrow is a weather-dependent drive, so check the passes before you set an alarm." }
      ],
      eat: "Carb-loading in earnest: rice / noodles / buns at every meal, lean protein, easy on fat and fibre. Hot congee is very welcome on a 50°F snow day.",
      tips: [
        "❄️ Snow showers until ~3pm, high near 50°F, tonight down to 23°F. Little or no accumulation in town, but the day is built around being indoors when it’s worst.",
        "🔁 Return the bear spray TODAY (Freeheel & Wheel, 40 Yellowstone Ave, 24/7 box) — don’t leave it for a snowy departure morning.",
        "Carb target today and tomorrow: ~6–8 g per kg bodyweight. Rice cakes, bananas, honey water and juice fill the gaps.",
        "Pack the car tonight. Tomorrow you want to check road conditions, eat, and leave — not load luggage in the snow."
      ]
    },
    {
      date: "2026-09-19",
      city: "Salt Lake City",
      multiCity: true,
      title: "Drive back to Salt Lake City · Snow at the start, heat at the end",
      summary: "A weather-dependent drive: snow showers and a high near 45°F leaving West Yellowstone, with Targhee Pass in the first ten minutes — then 40 degrees warmer by Salt Lake. Check the passes before you go, return the car and everything else, and settle in downtown for race eve.",
      blocks: [
        { time: "Before you leave", title: "❄️ Check the passes — Montana 511 & Idaho 511", detail: "50% chance of snow showers today, under half an inch expected. Targhee Pass (7,072 ft) is ten minutes out of town on US-20 and it’s the high point of the whole drive. Check mdt.mt.gov/511 and 511.idaho.gov. If it’s actively snowing at 11am, wait an hour or two — you only need to be in Salt Lake by early evening, and the road warms up fast. A rental on all-season tyres has no business being first over a slushy pass." },
        { time: "11:00 AM", title: "🚗 Check out & depart West Yellowstone", detail: "US-20 south over Targhee Pass through Island Park and Ashton → Idaho Falls → I-15 south. ~320 miles, ~5 hrs with a stop. You drop 2,400 ft to Idaho Falls and another 900 to Salt Lake, so the weather is behind you within the first hour.", map: "Dude and Roundup Motel West Yellowstone" },
        { time: "~1:00 PM", title: "⛽ Fuel & stretch at Idaho Falls", detail: "Halfway, and out of the snow. Gas, restroom, a 10-minute walk, refill water. Lunch from the cooler (rice + chicken) — familiar and low-fibre, two days out.", map: "Idaho Falls Idaho" },
        { time: "~4:00 PM", title: "🔁 Arrive SLC — return the car & everything else", detail: "Return the rental car (airport or a downtown branch), plus the Starlink Mini and anything else you planned to return — keep receipts and packaging together. The rice cooker has done its job: leave it, gift it, or check it in your bag. Then Uber to the hotel.", map: "Salt Lake City International Airport" },
        { time: "~5:30 PM", title: "🏨 Check in: Hyatt Place Downtown / The Gateway", detail: "55 N 400 W — a ~0.5 mi, 10-minute walk to the Salt Palace, so race morning needs no transport at all. Pick up your race packet if it’s available today.", map: "Hyatt Place Salt Lake City Downtown" },
        { time: "Evening", title: "🏁 Race-eve routine", detail: "15–20 min walk or very easy jog + 10 min mobility (or full rest). Dinner: white rice + steamed chicken/fish + a little veg + clear soup — nothing new, fried, spicy or high-fibre, no alcohol. Lay out the kit, fill the bottles, set the alarm, in bed early." }
      ],
      eat: "Cooler lunch at Idaho Falls; carb-heavy, low-fibre, familiar dinner downtown (rice-based).",
      tips: [
        "❄️ Snow showers and ~45°F at the start, 86°F in Salt Lake by evening — a 40-degree swing in one drive. Keep a fleece reachable for the first hour and shorts for the arrival.",
        "⚠️ This whole plan assumes you race SUNDAY. Sunday only runs Doubles Women, Women/Adaptive Women and Doubles Men. If you’re in individual HYROX Men (Fri 08:00–09:00 or Sat 08:00–11:20) or Doubles Mixed (Sat 11:50–17:40), today’s 11am departure is too late — you’d need to leave West Yellowstone a day earlier.",
        "Check your start time against the evening LAX flight: finish + shower + a 15-min Uber to SLC + 2 hrs at the airport. The 14:50–16:40 Doubles Men wave is the tight one.",
        "Hydrate + electrolytes all afternoon — a week at altitude in dry air leaves you behind on fluids, and tomorrow is forecast at 87°F.",
        "Sleep beats everything tonight; the sleep two nights out matters more than the night before, so you’ve already banked it."
      ]
    },
    {
      date: "2026-09-20",
      city: "Salt Lake City",
      title: "HYROX Salt Lake City · Fly to LAX",
      summary: "Race day at the Salt Palace, downtown — and it’s a hot one, 87°F with a morning thunderstorm risk. Familiar breakfast 2.5–3 hours before your wave, a proper warm-up, race, recover — then an Uber to the airport and the evening flight to LAX.",
      blocks: [
        { time: "Wave −3h", title: "🍚 Race breakfast", detail: "Congee / white rice / oats + a banana + a little egg or chicken, 2.5–3 hrs before your start. Coffee as usual if you drink it. ⚠️ The hotel’s free breakfast opens later at weekends (~7:00am), so for an early wave keep your own breakfast in the room fridge the night before; a midday wave can eat downstairs. 45–60 min before: a banana or a gel + sports drink." },
        { time: "Wave −25min", title: "🔥 Warm-up", detail: "8–10 min easy jog → dynamic mobility → 3 × 20s builds → a light touch of each station (30s row / 30s ski, a few sled steps, 5 wall balls) → 5 quiet minutes before the start." },
        { time: "Your wave", title: "🏁 HYROX Salt Lake City — Salt Palace Convention Center", detail: "90 S West Temple, downtown. Pacing: first 1 km 10–15 s/km slower than goal; sled push low hips + short steps; farmers carry unbroken; wall balls in planned sets (e.g. 25/25/25/25) with short rests; long, low-rate strokes on ski and row. Sip electrolytes at the stations; a gel around station 4 if you’ll be over 60 min.", map: "Salt Palace Convention Center" },
        { time: "After", title: "🥤 Recovery meal & shower", detail: "Carbs + protein within an hour (rice + chicken or a recovery shake), keep walking, then shower at the hotel and check out." },
        { time: "Evening", title: "✈️ Uber to SLC → fly to LAX", detail: "Salt Palace → SLC airport is ~15 min. Be there 2 hours before departure. Compression socks and water on the flight — you’ve earned the window seat.", map: "Salt Lake City International Airport" }
      ],
      eat: "Race breakfast at the hotel; recovery meal downtown; snacks for the flight.",
      tips: [
        "🥵 87°F and humid-ish after a week at 6,600 ft in the cold — respect it. Start drinking electrolyte from breakfast, not from the start line, and take the first 1 km even more conservatively than planned.",
        "⛈ Thunderstorm risk in the morning: the race is indoors at the Salt Palace, but the 10-minute walk from the hotel isn’t. Take a light jacket and put dry socks in your bag.",
        "Bring: race bib/packet, ID, familiar shoes (broken in), chalk if allowed, a change of clothes, and your own fuel — don’t try anything new on the day.",
        "Sunday Sep 20 wave schedule: Doubles Women 07:00–11:50 · Women/Adaptive Women 12:20–14:20 · Doubles Men 14:50–16:40. Those are the ONLY three divisions racing Sunday — confirm yours in the HYROX app.",
        "Post-race: no sitting still for hours — walk the terminal, hydrate, and keep the protein coming."
      ]
    }
  ],

  // ---- Food, cooking & race nutrition ----
  food: [
    {
      title: "🛒 Chinatown Supermarket — the Sep 13 list",
      note: "3390 S State St, open till 10pm on Sunday, ~20 min from the airport. You’ll have a fridge, a microwave and the rice cooker, so shop for real meals. One rule for race week: anything oily, chilli-heavy or very high-fibre gets eaten by Sep 16 — the last three days are deliberately plain.",
      items: [
        "Rice — a 5–10 lb bag of short-grain. It’s the backbone of every meal and of the carb load",
        "Congee base: millet, oats, a few dried dates. Set it going in the cooker before bed and thermos it for the Hayden and Lamar sunset sits",
        "Noodles: thin wheat noodles + rice vermicelli — the fastest hot dinner after a late drive",
        "Mantou, huajuan, red-bean buns — 60 seconds in the microwave, the single easiest carb for race week",
        "Frozen dumplings & shumai — boil in the cooker or microwave; this is your 10:30pm dinner on Sep 17",
        "Eggs — hard-boil a dozen in the rice cooker for car breakfasts",
        "Ready-cooked protein from the deli counter: braised beef, soy-sauce chicken, roast duck. No cooking, just slice",
        "Tofu, fish tofu, frozen shrimp — quick protein to drop into noodles or congee",
        "Sturdy greens: baby bok choy, spinach, napa, carrots, tomatoes, enoki — blanched in the cooker in two minutes",
        "Small bottles only: light soy, sesame oil, salt, chicken bouillon, seaweed, zhacai",
        "Car snacks: bananas, apples, mandarins, nuts, beef jerky, rice crackers, soy milk, oolong tea",
        "Race-week specifics: honey, white bread, sports-drink powder, and extra salt for electrolytes"
      ]
    },
    {
      title: "🍚 What the rice cooker actually makes",
      note: "No stove, but cooker + microwave + fridge covers a week comfortably. The trick is starting congee before bed so it’s ready when you wake up.",
      items: [
        "Breakfast: congee (set the night before) + steamed buns + a boiled egg",
        "Car lunch: rice + sliced braised beef + blanched greens in an insulated box",
        "One-pot dinner: rice with a chicken thigh or lap cheong laid on top — it steams together while you shower",
        "Late dinner (Sep 16 home ~9:45pm, Sep 17 home ~10:30pm): noodles with greens and egg, or microwave dumplings. Every kitchen in town is shut by then",
        "Thermos: hot congee or tea for the sunset wildlife sits — it’s 24–33°F at dawn and not much warmer at dusk"
      ]
    },
    {
      title: "🏞 Eating inside the park",
      note: "In-park food is limited, expensive and queued, and there is no Chinese food anywhere in Yellowstone. Treat it as backup and pack lunch most days. These are confirmed open for your dates:",
      items: [
        "Sep 15 — the Old Faithful area has the widest choice (dining room, cafeteria, bakery). Your one easy sit-down day",
        "Sep 16 — Canyon Eatery (open to Oct 25) and Canyon General Store (to Oct 18), plus the Canyon Village picnic area",
        "Sep 17 — Roosevelt Lodge (open to Oct 4) for coffee near Tower, and Mammoth Hotel dining (open year-round) for lunch",
        "Picnic areas on your routes: Madison, Nez Perce and Canyon Village — tables and vault toilets, no water",
        "⚠️ It’s grizzly hyperphagia season: food never sits unattended on a picnic table, and it goes back in the car between stops"
      ]
    },
    {
      title: "🍕 West Yellowstone — the nights you don’t cook",
      note: "Five nights and you’ll cook most of them. The good nights to eat out are Sep 14 (arrival) and Sep 15. Most kitchens stop serving 9–10pm, so Sep 16 and Sep 17 are cook-at-home by default.",
      items: [
        "Wild West Pizzeria & Saloon — best pizza in town, live music. Pizza and pasta are ideal race-week carbs",
        "Pete’s Rocky Mountain Pizza — pizza and pasta, quieter alternative",
        "Firehole BBQ Co — smoked meats, big protein. Go early, popular cuts sell out",
        "Bullwinkle’s — steaks, ribs, trout, bison and elk, if you want one proper sit-down dinner",
        "The Buffalo Bar — bison burger, casual, later hours than most",
        "Las Palmitas — Mexican from a converted school bus; a rice-and-bean burrito is cheap, fast and carb-dense",
        "Market Place grocery in town for anything you forgot in Salt Lake"
      ]
    },
    {
      title: "🏋️ HYROX nutrition, day by day",
      note: "Race day is Sunday Sep 20. The week’s eating is already built around it — this is the whole timeline in one place.",
      items: [
        "Sep 13–16 — normal balanced eating, protein 1.6–2 g/kg. Drink 3–4 L a day: at 6,600–7,000 ft in very dry air you fall behind on fluids without noticing",
        "Sep 17 (D-3) — start raising carbs at dinner. Last day for chilli oil, deep-fried food and big piles of fibre",
        "Sep 18–19 (D-2, D-1) — carb load: 6–8 g per kg bodyweight per day. Big rice, noodles and buns at every meal; protein moderate, fat and fibre right down",
        "Sep 19 dinner — white rice + steamed chicken or fish + a little veg + clear soup. Nothing new, nothing fried, nothing spicy, no alcohol",
        "Sep 20, wave −3h — congee or white rice + a banana + a little egg. Coffee as normal if you drink it",
        "Sep 20, wave −45min — a banana or a gel with sports drink",
        "During the race — sip electrolyte at the stations; a gel around station 4 if you’ll be over 60 minutes",
        "Within an hour of finishing — carbs + protein, keep walking, then hydrate hard on the flight to LAX"
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
    { label: "HYROX", value: "InBody HYROX Salt Lake City runs Fri Sep 18 – Sun Sep 20 at the Salt Palace Convention Center, 90 S West Temple. SUNDAY has only three divisions: Doubles Women 07:00–11:50, Women/Adaptive Women 12:20–14:20, Doubles Men 14:50–16:40. Individual Men is Fri 08:00–09:00 or Sat 08:00–11:20; Doubles Mixed is Sat 11:50–17:40. No car needed: a ~0.5 mi (10-min) walk from the Hyatt Place, then Uber to the airport (~15 min)." },
    { label: "Flight home", value: "Sep 20 (Sun) evening: SLC → LAX. Be at the airport 2 hrs before departure." }
  ],

  // ---- Booking / to-do checklist ----
  bookings: [
    "TODO — Flight SFO → SLC (Sep 13, evening arrival)",
    "TODO — Flight SLC → LAX (Sep 20, evening)",
    "TODO — Rental car: SLC Sep 13 night → Sep 19 afternoon (confirm one location, or airport pickup / downtown return)",
    "✅ Hyatt Place Salt Lake City / Downtown / The Gateway (55 N 400 W) — Sep 13 & Sep 19, both SLC nights. Free breakfast, mini-fridge, ~10-min walk to the Salt Palace",
    "✅ Dude & Roundup Motel, West Yellowstone (3 Madison Ave) — Double Deluxe, multiple beds, Sep 14–19. No kitchen, but a FRIDGE and MICROWAVE are confirmed by phone — just mention the rice cooker at check-in",
    "🍚 Buy an ELECTRIC RICE COOKER on Sep 13 — the fridge and microwave cover storage and reheating, but only the cooker does proper rice and congee (thermos fuel for the sunset wildlife sessions)",
    "⚠️ HYROX — CONFIRM YOUR DIVISION AND DAY IN THE APP. Sunday Sep 20 only runs Doubles Women, Women/Adaptive Women and Doubles Men. Individual Men is Fri or Sat; Doubles Mixed is Sat afternoon. Anything but Sunday breaks the Sep 19 drive back",
    "🎫 Park entry: Yellowstone $35/vehicle (7 days); Grand Teton normally a separate $35. 2026 sources conflict on whether one covers both — the $80 America the Beautiful pass settles it. Non-US residents 16+: extra $100 per person unless on an annual pass ($250 non-resident version)",
    "📦 Whole Foods package pickup (Sep 14 morning) — have the pickup code ready",
    "📡 Starlink Mini pickup (Sep 14 morning) — account activated & app signed in",
    "🐻 Bear spray — RENT it, don’t buy it. PICK UP: Bear Aware at Teton Backcountry Rentals, 565 N Cache St, Jackson, open 8am–6pm daily, (307) 828-1885 — N Cache is US-89, so it’s on the way north. Backup: the Jackson Hole Airport kiosk by baggage claim #3, 9am–6pm. DROP OFF: Freeheel & Wheel, 40 Yellowstone Ave, West Yellowstone, 24/7 box. $16 for the first two days then $4/day, capped at $28. Buying is ~$45–50 and it can’t fly home",
    "🛒 Grocery list for Chinatown Supermarket (Sep 13, Sunday till 10pm) — you have a fridge, microwave and rice cooker: rice, congee fixings, noodles, mantou/baozi, frozen dumplings, eggs, pre-cooked/braised meats, tofu, leafy greens, sauces, bananas, honey",
    "🍳 Target or Walmart list: ELECTRIC RICE COOKER, bowls, chopsticks, utensils, small knife + cutting board, thermos, cooler bag (for the long park days), dish soap + sponge, fleece, beanie, gloves (no pots or pans — there’s no stove)",
    "📲 Download before losing signal: NPS Yellowstone app (geyser predictions), offline Google Maps for the park, GeyserTimes",
    "── ROAD & PARK STATUS ──────────────",
    "🛣 Live status before every driving day: NPS Yellowstone road page, or text 82190 to 888-777 for alerts; recorded line (307) 344-2117. Madison River Bridge (your daily commute) ~15-min delays; Yellowstone River Bridge at Tower ~30-min, on the Sep 17 Lamar route",
    "🔥 Check fire/closure maps (inciweb.nwcg.gov) and AirNow for smoke before the Sep 17 Lamar day — main roads are open but trails and side areas can close",
    "🔁 Sep 19 returns: rental car, Starlink Mini, and anything else you’re returning — keep receipts + packaging together in one bag"
  ],

  // ---- Packing list ----
  packing: {
    "Essentials": ["ID / driver’s licence (for the rental car)", "Credit cards + a little cash", "Phone + car charger + power bank", "Starlink Mini + power (12V / USB-C) + app signed in", "Offline maps + NPS app downloaded", "Park pass / receipt", "Water bottles (2+) — altitude & dry air", "Sunscreen, sunglasses, lip balm (strong sun at 7,000 ft)", "Headlamp (after-dark drives home from Hayden & Lamar)", "Binoculars 🐺"],
    "Cold-weather layers": ["Fleece / down mid-layer", "Waterproof, windproof shell", "Beanie + gloves (mornings ~30°F)", "Thermal base layer", "Warm socks", "Comfortable broken-in walking / hiking shoes", "Rain pants or quick-dry pants"],
    "Hiking & wildlife": ["🐻 Bear spray — rented in Jackson, dropped in West Yellowstone (cannot fly)", "Day pack", "Trail snacks", "Thermos (congee / hot tea for the sunset wildlife sessions)", "Blister plasters / small first-aid kit", "Camera / phone lens wipe (geyser steam)"],
    "Cooking & food": ["Electric rice cooker (buy Sep 13 — for rice & congee)", "Bowls, chopsticks, utensils, small knife + cutting board", "Cooler bag + ice for the long park days (the room has a fridge)", "Dish soap + sponge + a few food containers", "Rice, congee fixings, noodles, mantou/baozi (race-week carbs)", "Eggs, frozen dumplings, pre-cooked meats, tofu, leafy greens, sauces", "Bananas, honey, juice, rice cakes (carb-load fillers)", "Electrolyte tabs / sports drink"],
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
  "Brink of the Lower Falls": [44.7185, -110.4990],
  "Artist Point": [44.7202, -110.4795],
  "Hayden Valley": [44.6500, -110.4700],
  "Mud Volcano": [44.6248, -110.4336],
  "Lamar Valley": [44.8985, -110.2280],
  "Tower Fall": [44.8920, -110.3873],
  "Mammoth Hot Springs": [44.9766, -110.7027],
  "Norris Geyser Basin": [44.7263, -110.7027],
  "Artists Paintpots": [44.6963, -110.7398],
  "Grizzly and Wolf Discovery Center West Yellowstone": [44.6580, -111.1013],
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
    "Salt Lake City":   { hi: 85, lo: 60, code: 0, rainChance: 10 },
    "Grand Teton":      { hi: 68, lo: 32, code: 1, rainChance: 15 },
    "West Yellowstone": { hi: 66, lo: 30, code: 1, rainChance: 20 }
  },
  // Forecast refreshed Sep 18, 2026. A cold front moved in: snow showers in
  // West Yellowstone today and on tomorrow's drive, then hot in Salt Lake.
  // app.js still re-fetches Open-Meteo when online and overrides these.
  byDate: {
    "2026-09-14": { hi: 68, lo: 32, code: 1,  rainChance: 15 },
    "2026-09-15": { hi: 60, lo: 24, code: 1,  rainChance: 20 },
    "2026-09-16": { hi: 61, lo: 28, code: 1,  rainChance: 20 },
    "2026-09-17": { hi: 68, lo: 33, code: 1,  rainChance: 15 },
    "2026-09-18": { hi: 50, lo: 23, code: 73, rainChance: 50 },
    "2026-09-19": { hi: 86, lo: 45, code: 3,  rainChance: 25 },
    "2026-09-20": { hi: 87, lo: 58, code: 95, rainChance: 30 }
  },
  coords: {
    "Salt Lake City": [40.7608, -111.8910],
    "Grand Teton": [43.6553, -110.7181],
    "West Yellowstone": [44.6621, -111.1041]
  }
};
