/*
 * Chinese (Simplified) localization overlay + UI dictionary for the
 * Yellowstone 2026 page (yellowstone.html).
 *
 * Same contract as lang.js: English (yellowstone-data.js) is the source of
 * truth; TRIP_ZH is an OVERLAY that app.js deep-merges onto TRIP field by
 * field, falling back to English wherever a Chinese string is missing.
 * Array order / lengths must mirror yellowstone-data.js exactly.
 * Proper nouns (place names, "HYROX", "Starlink") are kept in English so
 * maps and signage still match.
 */

// ---- Interface chrome ----
const UICOPY = {
  en: {
    tab_overview: "Overview", tab_itinerary: "Itinerary", tab_stays: "Stays",
    tab_weather: "Weather", tab_bookings: "Bookings", tab_packing: "Packing",
    ov_glance: "Trip at a glance", ov_where: "Where you’ll be", ov_logistics: "Logistics",
    stays_title: "Where you’re staying", stays_sub: "Tap a place to open it in Maps. Confirm the ones still marked TODO.",
    night: "night", nights: "nights",
    itin_title: "Day by day", itin_sub: "Tap any day to expand. Each stop has an “Open in Maps” link and a numbered pin on the day map.",
    daymap_places: "🗺 Places this day", daymap_route: "↗ Route in Google Maps", daymap_nav: "🧭 Navigate to start",
    leg_nextdoor: "next door", eat_label: "Eat", tips_label: "Tips",
    openMaps: "🗺 Open in Maps", openGoogleMaps: "Open in Google Maps",
    weather_title: "Weather", weather_high: "High", weather_low: "Low", weather_rain: "Rain",
    weather_live: "live forecast", weather_normal: "seasonal average",
    weather_sub: "Sep 13 – 20. These are the current forecast numbers (captured Sep 12); the page auto-refreshes to the live Open-Meteo forecast when you’re online. Watch the lows — Yellowstone mornings run 26–33°F — and thundershowers build Sep 17–18.",
    weather_loading: "Checking for a live forecast…",
    weather_offline: "Showing seasonal averages (no live forecast — offline or dates still too far out).",
    weather_packTitle: "What to pack for this weather",
    weather_updated: (t) => `Updated ${t} · live forecast`,
    weather_updatedNormal: "Seasonal averages — no live forecast yet",
    wxAdvice: {
      rain: "☔ Rain likely — waterproof shell, and a dry layer in the car",
      storm: "⛈ Thunderstorms possible — get off exposed boardwalks and ridges when they roll in",
      hot: "🥵 Hot days — light clothes, a hat, sunscreen & extra water",
      mild: "🌤 Pleasant daytime stretches — a light layer for the evenings",
      sun: "🧴 Strong high-altitude sun — sunglasses, hat, sunscreen & lip balm",
      cold: "🧤 Freezing mornings — fleece, shell, beanie & gloves; layer up and shed by noon",
      snow: "🌨 Snow possible — waterproof shell, warm layers, and check the park road status each morning"
    },
    book_title: "Bookings & to-dos", book_sub: "Confirm these before you leave — mid-September lodging near the park fills up, and a few items can only be bought on arrival.",
    pack_title: "Packing list", pack_sub: "Cold mornings, big sun, a lot of driving, and a race at the end. Check items off as you pack.",
    reset: "Reset list",
    progress: (d, t) => `${d} of ${t} done`,
    leg_from: (i, mi) => `${mi} mi from #${i}`,
    heroDates: (fs, fe) => `${fs} – ${fe}, 2026`,
    docTitle: " · Itinerary",
    footer: "Your personal travel agent · Yellowstone edition",
    packGroups: {}
  },
  zh: {
    tab_overview: "概览", tab_itinerary: "行程", tab_stays: "住宿",
    tab_weather: "天气", tab_bookings: "预订清单", tab_packing: "行李",
    ov_glance: "行程速览", ov_where: "你会去的地方", ov_logistics: "交通与衔接",
    stays_title: "住宿安排", stays_sub: "点住处名可在地图中打开。标着“待办”的记得确认。",
    night: "晚", nights: "晚",
    itin_title: "逐日行程", itin_sub: "点任意一天展开。每个地点都有“在地图中打开”的链接，并在当天地图上有编号标记。",
    daymap_places: "🗺 当天地点", daymap_route: "↗ 在 Google 地图看路线", daymap_nav: "🧭 导航到第一站",
    leg_nextdoor: "就在隔壁", eat_label: "吃", tips_label: "小贴士",
    openMaps: "🗺 在地图中打开", openGoogleMaps: "在 Google 地图中打开",
    weather_title: "天气", weather_high: "最高", weather_low: "最低", weather_rain: "降雨",
    weather_live: "实时预报", weather_normal: "常年平均",
    weather_sub: "9月13日 – 20日。下面是最新预报（9月12日抓取），联网时会自动刷新为 Open-Meteo 实时预报。注意最低温：黄石清晨 −3～1°C；9月17–18日午后可能有雷阵雨。",
    weather_loading: "正在获取实时预报…",
    weather_offline: "显示常年同期平均值（暂无实时预报——可能离线，或日期还太远）。",
    weather_packTitle: "针对天气的行李建议",
    weather_updated: (t) => `更新于 ${t} · 实时预报`,
    weather_updatedNormal: "常年同期平均值——暂无实时预报",
    wxAdvice: {
      rain: "☔ 大概率有雨——防水外壳，车里备一套干的",
      storm: "⛈ 可能有雷阵雨——雷雨来时离开开阔的木栈道和山脊",
      hot: "🥵 天气炎热——轻薄衣物、帽子、防晒、多带水",
      mild: "🌤 白天有舒适时段——晚上备一件薄外套",
      sun: "🧴 高原日晒很强——墨镜、帽子、防晒霜、润唇膏",
      cold: "🧤 清晨结冰——抓绒、外壳、帽子、手套；层层穿好、中午再脱",
      snow: "🌨 可能下雪——防水外壳、保暖层，每天早上查公园路况"
    },
    book_title: "预订与待办", book_sub: "出发前确认这些——9月中旬公园附近的住宿很紧张，有几样东西只能到了再买。",
    pack_title: "行李清单", pack_sub: "清晨很冷、日晒强、开车多，最后还有比赛。一边收拾一边打勾。",
    reset: "重置清单",
    progress: (d, t) => `已完成 ${d}/${t}`,
    leg_from: (i, mi) => `距第${i}站 ${mi} 英里`,
    heroDates: (fs, fe) => `2026年 ${fs} – ${fe}`,
    docTitle: " · 行程",
    footer: "你的专属旅行助手 · 黄石篇",
    packGroups: {
      "Essentials": "必备物品",
      "Cold-weather layers": "保暖衣物",
      "Hiking & wildlife": "徒步与观兽",
      "Cooking & food": "厨具与食材",
      "HYROX race kit": "HYROX 比赛装备"
    }
  }
};

// ---- Trip content overlay (mirrors TRIP in yellowstone-data.js) ----
const TRIP_ZH = {
  title: "黄石之旅 2026",
  subtitle: "盐湖城 → 大提顿 → 黄石 → HYROX 盐湖城 → 洛杉矶",

  highlights: [
    "🐻 灰熊区：任何步道都要带熊喷雾。**租**不要买——进园路上在 Jackson 租（5天约$28），最后在西黄石还掉，比买便宜，而且反正不能带上飞机。离熊/狼 100 码、野牛/麋鹿 25 码；9月 Mammoth 的麋鹿发情期是亮点，但公鹿会冲人。",
    "🛣 四个公园日各走「8字形」的一条臂，尽量不重复走同一段路：9/15 走 Madison 以南的间歇泉群，9/16 往东走 Norris + 大峡谷 + 海登谷，9/17 往北走猛犸 + 塔瀑 + 拉马尔谷，9/18 就在镇子附近轻松一天。所有「额外」的景点都安排在你本来就要开的路上。",
    "🧥 9月中旬的黄石：白天 13–18°C，清晨 −4～2°C，海拔 2,000–2,700m 随时可能下雪。每天早上抓绒 + 防风雨外套 + 帽子；高原日晒强。",
    "🛣 园内道路全开，含 Dunraven Pass（10月12日关闭）——但 Tower Junction 的 Yellowstone River 桥施工到 9月30日，单车道最多等 30 分钟，正好在你的拉马尔谷那天。",
    "🏋️ 这周是 HYROX 减量周：黄石是主动恢复（木栈道、一条短步道），不是训练——而且没有天亮前出发：每天 9:30–10 点才出门，看动物改到日落。苦练已经完成；9月17日开始碳水加载。",
    "📡 园内几乎无信号。Starlink Mini 需要开阔天空——酒店停车场、步道口停车场、观景点都能用；同时也把离线地图和间歇泉预测下载好。",
    "🍚 酒店没有厨房，但会配冰箱和微波炉，再加一个电饭煲（9月13日买）：煮饭、煮粥、煮面、蒸馒头包子、煮蛋、焯青菜都能搞定。食材第一晚在中国城超市买齐；一壶粥让日落观兽和摸黑回家的长途都舒服起来。"
  ],

  cities: [
    { name: "盐湖城", dates: "9月13日 & 19日" },
    { name: "大提顿", dates: "9月14日（下午）" },
    { name: "西黄石", dates: "9月14–19日" }
  ],

  stays: [
    { hotel: "Hyatt Place Salt Lake City / Downtown / The Gateway", city: "盐湖城", dates: "9月13日 & 19日", area: "55 N 400 W，在 The Gateway 商区——离机场约15分钟，步行到 Salt Palace 约0.5英里（10分钟），比赛当天不用开车也不用打 Uber。含免费热早餐（平日 6:30–9:00，周末稍晚），房间有小冰箱。" },
    { hotel: "Dude & Roundup Motel（西黄石）", city: "西黄石", dates: "9月14–19日", area: "3 Madison Ave，Double Deluxe 房、多张床——离黄石西门只有一个街区，每天进园立刻出发（到 Madison Junction 14 英里），晚上摸黑回来也很快到。没有厨房，但酒店会配冰箱和微波炉（已电话确认）；再加上电饭煲煮饭煮粥，就是个够用的小厨房。Starlink Mini 在停车场能用。" }
  ],

  days: [
    {
      title: "飞抵盐湖城 · 夜里取车 + 采购",
      summary: "旅行日。傍晚落地、取租车，然后一路向北一站式夜购：在中国城超市（周日开到10pm）买齐一周的中餐食材，再买个电饭煲和保暖衣物——酒店会配冰箱和微波炉，加上这个电饭煲就是个够用的小厨房。",
      blocks: [
        { time: "傍晚", title: "✈️ 落地 SLC → 取租车", detail: "租车柜台在航站楼/租车中心。记一下里程——9月19日下午还车。确认后备箱装得下一周的食物和装备。" },
        { time: "约晚上8:00", title: "🛒 中国城超市——买一周食材", detail: "3390 S State St（周日开到10pm，离机场约20分钟）。你有冰箱、微波炉和电饭煲，可以正常买：米、粥料、面条、馒头/包子（赛前碳水）、速冻饺子、鸡蛋、熟食/卤味、豆腐、叶菜、调料、香蕉、蜂蜜。保温袋还是值得买一个，留给园里长途的那几天。" },
        { time: "约晚上9:00", title: "🍳 Target / Walmart——电饭煲和保暖衣物", detail: "最值得买的一件：**电饭煲**。酒店的微波炉能加热、能蒸，但只有电饭煲能煮出像样的饭和粥——而一壶热粥正是日落观兽时最舒服的东西。再加碗筷餐具、小刀+砧板、保温壶、洗洁精+海绵，以及抓绒、帽子、手套——黄石清晨接近零度。锅和平底锅不用买，没有灶。多数店 10–11pm 关门，这是最后一站。" },
        { time: "夜里", title: "🏨 入住 Hyatt Place Downtown / The Gateway", detail: "55 N 400 W。明天不用赶——10点才出发，免费热早餐平日 6:30–9:00，办事前先在这儿吃。把所有设备充满电。" }
      ],
      eat: "在商店附近或 The Gateway 随便吃点快的；电饭煲从明晚开始派上用场。",
      tips: [
        "如果晚于9点落地，把中国超市挪到9月14日早上（8am 开门）——从 Whole Foods 过去顺路。",
        "熊喷雾不能上飞机——明天在 Jackson 或西黄石买（约$45–50），今晚不用找。",
        "飞机上多喝水：犹他很干，而且你要去 2,000–2,700m 的高原。"
      ]
    },
    {
      title: "取件 → 大提顿 → 进黄石",
      summary: "不用定闹钟：9点去办事（Whole Foods 取件、Starlink Mini），10点上路，约5小时车程到大提顿看几个经典点，再从黄石南门一路向北，天黑前到西黄石的住处。",
      blocks: [
        { time: "约上午9:00", title: "📦 Whole Foods——取快递", detail: "先在酒店吃免费早餐（平日 6:30–9:00），再去客服/Amazon 柜台取件。" },
        { time: "约上午9:45", title: "📡 取 Starlink Mini", detail: "在车里通电测试、确认 App 已登录，再离开有信号的地方——园内几乎没有服务。" },
        { time: "上午10:00", title: "🚗 从 SLC 出发 → 大提顿（约5小时）", detail: "I-15 北 → US-89 经 Star Valley 进 Jackson（风景好），或 I-15 → Idaho Falls → US-26（稍快）。在 Jackson 加油，并在这儿**租**熊喷雾（Bear Aware / Teton Backcountry Rentals，5天约$28）——从这里起就是灰熊区，而且可以在西黄石还，不用折回来。争取3点前到 Jackson。" },
        { time: "约下午3:15", title: "🏔 Mormon Row——Moulton 谷仓", detail: "明信片画面：斑驳的谷仓背后是提顿山脉。20分钟，就在 Antelope Flats Road 边。附近常有野牛——保持25码。" },
        { time: "约下午3:50", title: "📸 Snake River Overlook", detail: "安塞尔·亚当斯的机位——河湾与远处群峰。北上 US-89 路边快停。" },
        { time: "约下午4:10", title: "🏞 Jenny Lake——只在时间充裕时去", detail: "园里最美的湖，但来回各要绕约20分钟。只有3:15前到了 Mormon Row 才去湖边短走一下；否则跳过——Oxbow 的光线和天黑前穿过公园更重要。" },
        { time: "约下午4:30", title: "🦌 Oxbow Bend", detail: "Moran 山倒映在 Snake River 里；午后光线下有驼鹿和麋鹿。最北的一站——从这儿直接北上黄石。" },
        { time: "下午4:45", title: "🚗 穿黄石南门北上 → West Thumb", detail: "4:45pm 前离开 Oxbow。黄石南门约40分钟，然后 West Thumb 间歇泉盆地（20–30分钟：湖边间歇泉、Fishing Cone）——之后就不用再绕回来了。再往西经老忠实 → Madison → 西黄石。日落约7:35pm；最后一段在黄昏，慢开——路上有动物。" },
        { time: "约晚上8:00", title: "🏠 入住 Dude & Roundup Motel", detail: "3 Madison Ave，离西门一个街区——5晚的大本营。把食材放进冰箱，把电饭煲支起来，先把明天保温壶要用的饭或粥焖上，再把 Starlink Mini 放在能看到开阔天空的地方。" }
      ],
      eat: "早餐在盐湖城酒店吃；午餐在 Jackson（加油站）；晚餐在酒店用电饭煲做第一顿。",
      tips: [
        "5:15pm 后才离开 Oxbow？改走爱达荷线：Jackson → Teton Pass → Victor → Ashton → Island Park → 西黄石（约2h45，没有动物堵车，公路照明好）——West Thumb 就跳过，没关系。",
        "门票：大提顿 $35 + 黄石 $35（每车7天）= $70；一年内还去别的国家公园再买 $80 年票。",
        "在 Jackson 租熊喷雾（Bear Aware，5天约$28），从此每条步道都带着——可以在西黄石还掉，不用折回来。",
        "减量周：今天只轻松走走——开车就是运动量。"
      ]
    },
    {
      title: "黄石 Day 1 · 间歇泉之乡：老忠实与大棱镜",
      summary: "最近、回报最高的一天，晚出发：Firehole 河沿线的间歇泉盆地、从观景台看大棱镜、一次老忠实喷发、Upper Geyser Basin 木栈道，黄昏在 Madison 草甸看野牛。8–10 公里平坦木栈道——完美的主动恢复。",
      blocks: [
        { time: "约上午10:00", title: "🌊 Firehole Canyon Drive 与 Firehole 瀑布", detail: "慢慢吃完早饭，刚过 Madison Junction——2英里单行景观支路，到一个12米的瀑布。10分钟。" },
        { time: "约上午10:45", title: "🫧 Fountain Paint Pot", detail: "一条短环线看全四种地热景观：泥泉、喷气孔、温泉和间歇泉（Clepsydra 几乎一直在喷）。30分钟。" },
        { time: "约上午11:30", title: "🌈 Midway Geyser Basin——近看大棱镜", detail: "木栈道经过 Excelsior 间歇泉冒着蒸汽的坑，到大棱镜边缘。上午晚些正好——蒸汽比清晨少，颜色看得见。" },
        { time: "约中午12:30", title: "🥾 Fairy Falls 步道 → 大棱镜观景台", detail: "从 Fairy Falls 停车场，平路 1.2 公里再短爬一段到观景台——彩虹圈的俯瞰角度就是这里，正午太阳在头顶时最好看。往返约1小时。" },
        { time: "约下午2:00", title: "⛲ 老忠实 + Old Faithful Inn（在这儿吃午饭）", detail: "在游客中心或 NPS App 查下一次预测喷发（约每90分钟，±10分钟）。提前15分钟占个长椅。吃带的午饭，然后去隔壁的历史旅馆大厅。" },
        { time: "约下午3:00", title: "🚶 Upper Geyser Basin 木栈道——Morning Glory Pool", detail: "2.4 公里木栈道，经过 Castle、Grand、Riverside 间歇泉到 Morning Glory Pool。Grand 的预测时段在游客中心的板上——30分钟内的话值得等。" },
        { time: "约下午5:00", title: "🧿 Biscuit Basin 与 Black Sand Basin", detail: "回程路上两个色彩鲜艳的小盆地——Sapphire Pool 和 Emerald Pool，各20分钟。还有精力？从 Biscuit Basin 出发到 Mystic Falls 往返3.5公里、很平缓，今天正是时候——之后不会再往这条路上来了。" },
        { time: "约下午6:30", title: "🦬 黄昏的 Madison 草甸——野牛与麋鹿", detail: "你的第一场日落观兽，离家15分钟：最后的光线里野牛和麋鹿在 Madison 河草甸吃草（日落约7:35）。在观景停车位停下；待在车里或车边。" }
      ],
      eat: "在酒店用电饭煲吃晚一点的早餐；带午饭（米饭+蛋白质）在老忠实吃；黄昏后回酒店吃晚饭。",
      tips: [
        "老忠实预测：NPS App 或 geysertimes.org。Riverside 和 Grand 是另外两个可预测的——看板子。",
        "只走木栈道——地壳很薄、水是沸腾的。手机帽子拿稳，掉下去什么都捡不回来。",
        "减量：出门前轻松跑 25–30 分钟 + 6×20 秒加速跑（上午晚些也行），之后木栈道就是你的恢复散步。",
        "10点出发躲过了结冰的那一小时，但 2,000 米海拔中午前还是 5–13°C——抓绒 + 外壳，下午早些再脱。"
      ]
    },
    {
      title: "黄石 Day 2 · Norris、大峡谷与日落的海登谷",
      summary: "往东一条线去、一条线回，没有一段路重复走：去的路上看 Norris 间歇泉盆地，然后从两岸看黄石大峡谷、泥火山，最后在海登谷看日落观兽，摸黑慢慢开回家。",
      blocks: [
        { time: "约上午9:30", title: "🚗 出发 → Norris（14英里）", detail: "从西门进园，沿 Madison–Norris 那条路走。这段路明天还要再走一次，所以今天把真正需要时间的那站留在这儿。" },
        { time: "约上午10:15", title: "♨️ Norris 间歇泉盆地——Porcelain 与 Back Basin", detail: "园里最热、最古老的地热区，而且正好在今天的路线上。两条平坦的木栈道环线（约2小时）：Porcelain Basin 的乳蓝色池子，和 Back Basin 里的 Steamboat——世界最高的活跃间歇泉（无法预测，但蒸汽很壮观）。" },
        { time: "约中午12:45", title: "💦 大峡谷北岸——Brink of the Lower Falls", detail: "Norris 到 Canyon 12英里。先在 Canyon Village 野餐区吃午饭，再走 Brink of the Lower Falls：陡峭的往返1公里（下180米再上来），站到94米瀑布的顶端——今天唯一的腿部训练。然后沿岸边路看 Lookout Point 和 Grand View。" },
        { time: "约下午2:45", title: "🎨 大峡谷南岸——Artist Point", detail: "经典油画视角：下瀑布和黄色峡谷壁，从停车场走5分钟。" },
        { time: "约下午3:45", title: "🌋 泥火山与 Dragon’s Mouth 温泉", detail: "往南穿过海登谷10英里——先看一眼，因为马上就回来看日落。短木栈道环线上翻滚的硫磺泥景观。30分钟。" },
        { time: "约下午4:30", title: "🌅 海登谷——日落观兽", detail: "回到北边的海登谷，用最后三小时的光线（日落约7:30）。先慢慢开一遍，再在观景停车位（Grizzly Overlook 或 Alum Creek 一带）安顿下来，带着望远镜和保温壶：野牛群、麋鹿，灰熊和狼就在这个时段出来。绝不靠近；离野牛25码、离熊100码。" },
        { time: "约晚上7:45", title: "🌙 摸黑回家：Canyon → Norris → Madison", detail: "约2小时。慢开（最多45英里/小时），路上没车就开远光——野牛会站在柏油路上取暖。回酒店吃晚一点的晚饭。" }
      ],
      eat: "午餐在 Canyon Village 野餐区；海登谷吃保温壶 + 包子；回酒店吃晚一点的晚饭。",
      tips: [
        "把 Norris 挪到今天是有意的——它就在你本来要走的 Madison–Norris 路上，等于不多开一英里，不用单独占一天。",
        "黄石湖已经看过了：进园那天（9/14）走了 West Thumb，所以今天跳过 Fishing Bridge / Lake Hotel 那条岔路，省掉约50英里的往返。",
        "海登谷在天黑前的最后两小时最好——这就是你的观兽时段，不用闹钟。野牛必看到；黄昏时灰熊和狼很有机会。",
        "Brink of the Lower Falls 是这周唯一真正的爬升——稳着来。另外“野牛堵车”能停20分钟：享受它，别按喇叭、别下车。"
      ]
    },
    {
      title: "黄石 Day 3 · 猛犸热泉、塔瀑与日落的拉马尔谷",
      summary: "不用天亮前出发：上午晚些出门，中午看猛犸热泉的台地和吼叫的麋鹿，然后塔瀑，再到拉马尔谷待到日落——仅次于黎明的看狼时段，野牛必看到。长长的一天、回得晚（约10:30pm）；明天是睡懒觉的日子。",
      blocks: [
        { time: "约上午9:30", title: "🚗 出发 → Norris → Mammoth", detail: "好好吃完早饭约9:30出发。Madison → Norris → Mammoth，约1.5小时（Norris 的木栈道留到明天）。" },
        { time: "约上午11:00", title: "🪨 猛犸热泉——台地与麋鹿发情期", detail: "上下两段木栈道看石灰华台地（约1.5小时），然后在 Mammoth 吃午饭。9月公麋鹿整天在 Mammoth 的草坪上吼叫——很壮观，但它们会冲人：保持25码以上，让车挡在你和它之间。" },
        { time: "约下午2:00", title: "🏞 塔瀑与 Roosevelt", detail: "沿北线往东18英里（约40分钟，加上等桥）。40米瀑布观景点，离停车场5分钟。在 Roosevelt Lodge 一带喝杯咖啡。" },
        { time: "约下午3:30", title: "🐺 拉马尔谷——下午一直待到日落", detail: "美洲的塞伦盖蒂，从下午一直看到日落（约7:30）。整个下午都有野牛群和叉角羚；天黑前的最后两小时是狼和熊出现的时候。在 Slough Creek 到 Soda Butte 之间的观景停车位用望远镜扫，看到有人架着单筒望远镜就凑过去——观狼者知道狼群在哪。" },
        { time: "约晚上7:45", title: "🌙 天黑后原路回家", detail: "拉马尔 → Tower → Mammoth → Norris → 西黄石，走低处熟悉的路约2.5–3小时（黑天别走 Dunraven Pass）。稳稳地开；约10:30pm 到家。路上吃保温壶和包子，回去吃点清淡宵夜或直接睡。" }
      ],
      eat: "在酒店用电饭煲吃晚一点的早餐；午餐在 Mammoth；保温壶里的粥 + 包子留给拉马尔谷和回程；回来吃点清淡宵夜。",
      tips: [
        "⚠️ Tower Junction 旁 Yellowstone River 桥施工：单车道信号灯，最多等30分钟，到9月30日——来回都留出时间（天黑后也一样）。",
        "黄昏是仅次于黎明的看狼时段，而且不用定闹钟。望远镜决定你是“看到了狼”还是“看到了一个点”。",
        "回程走来时的路（Tower → Mammoth → Norris），而不是绕 Dunraven Pass 走一圈：这样会重复约36英里，但避免了赛前两天在黑夜里翻2,700米的山口。约2.5–3小时，45英里/小时，留意路上的野牛——明天早上什么都别安排。",
        "减量日：只开车和走木栈道。睡前或明天睡醒后拉伸/泡沫轴。"
      ]
    },
    {
      title: "黄石 Day 4 · 在西黄石镇附近轻松一天",
      summary: "昨晚回得晚，今天睡到自然醒，然后就在附近活动：把这一周天天开车路过的两个小站好好看一遍，再去镇上的探索中心看灰熊和狼，下午休息、碳水加载、打包。离比赛两天，这一天的作用就是让腿保持新鲜。",
      blocks: [
        { time: "约上午10:30", title: "🎨 Gibbon 瀑布与 Artists Paintpots", detail: "这一周天天从 Madison–Norris 路上开过去的两个站，今天终于好好看：路边停车位看 Gibbon 瀑布，再走1.6公里环线去看 Artists Paintpots 咕嘟咕嘟的彩色泥泉。离酒店15–25分钟，午饭前就能回来。" },
        { time: "约中午12:30", title: "🐻 灰熊与狼探索中心（就在镇上）", detail: "201 S Canyon St，离酒店几个街区。常驻的灰熊、一个狼群、还有猛禽，都能近距离看——这一周你举着望远镜找的东西，这里给你保证版，而且完全不用开车。约1.5小时；预报说今天可能有雷阵雨，正好是个室内选择。" },
        { time: "约下午2:30", title: "🏠 在酒店吃午饭、休息、打包", detail: "大份碳水午餐，把脚翘起来。收拾房间、把车装好、徒步装备收起来——公园部分结束了。顺便在镇上把租的熊喷雾还到 Freeheel & Wheel（40 Yellowstone Ave，24小时投递箱）。" },
        { time: "约下午5:00", title: "🏃 D-2 唤醒跑（镇上）", detail: "在安静的街道上轻松慢跑15–20分钟 + 4×15秒加速，再轻量过一遍站点动作（10个徒手深蹲上举、20步弓步、几个波比）——只找技术，不发力。之后拉伸、泡沫轴。" },
        { time: "傍晚", title: "🌇 Madison 看日落，然后早点睡", detail: "公园的最后一眼：Madison 草甸的最后一抹光，进园14英里（日落约7:30）。回来吃碳水大餐（米饭、面、馒头），别太晚睡——明天11点出发，不用闹钟。" }
      ],
      eat: "正式碳水加载：每餐米饭/面/馒头，瘦肉蛋白，少油少纤维。",
      tips: [
        "今天故意只在附近活动。Norris 挪到了9/16（本来就在那天的路上），所以赛前两天不用再开两小时进园。",
        "今明两天碳水目标：每公斤体重约6–8克。米饼、香蕉、蜂蜜水和果汁补空档。",
        "今天把熊喷雾还掉——Freeheel & Wheel，40 Yellowstone Ave，24小时投递箱。它不能上飞机，而且是租的。",
        "预报今天可能有雷阵雨，这也是把探索中心和下午室内休息放在今天的另一个理由。"
      ]
    },
    {
      title: "开回盐湖城 · 退还物品与赛前夜",
      summary: "11点出发，沿 US-20 和 I-15 轻松5小时到盐湖城，下午还车并退还所有东西，回到市中心的 Hyatt Place，做赛前夜的例行准备。",
      blocks: [
        { time: "上午11:00", title: "🚗 退房、离开西黄石", detail: "US-20 南下经 Island Park、Ashton → Idaho Falls → I-15 南。约320英里，含一次停车约5小时。从2,000米降到1,300米——会觉得轻松。" },
        { time: "约下午1:00", title: "⛽ Idaho Falls 加油、伸展", detail: "半程。加油、洗手间、走10分钟、补水。午饭吃保温袋里的（米饭+鸡肉）——熟悉、低纤维。" },
        { time: "约下午4:00", title: "🔁 到达 SLC——还车和退还所有东西", detail: "还租车（机场或市中心网点），还有 Starlink Mini 和其它计划退回的东西——收据和包装放在一起。电饭煲任务完成：留下、送人，或托运带走。然后打 Uber 去酒店。" },
        { time: "约下午5:30", title: "🏨 入住 Hyatt Place Downtown / The Gateway", detail: "55 N 400 W——步行到 Salt Palace 约0.5英里、10分钟，比赛早上完全不用操心交通。今天能领的话把参赛包领了。" },
        { time: "晚上", title: "🏁 赛前夜例行", detail: "15–20分钟散步或极轻慢跑 + 10分钟活动度（或完全休息）。晚餐：白米饭 + 清蒸鸡/鱼 + 少量蔬菜 + 清汤——不吃新的、油炸、辣的、高纤维的，不喝酒。摆好装备、灌满水瓶、定好闹钟，早睡。" }
      ],
      eat: "Idaho Falls 吃保温袋里的午饭；市中心吃碳水为主、低纤维、熟悉的晚餐（米饭类）。",
      tips: [
        "今晚确认你9月20日的出发波次——当天各组别从 07:00 到 16:40——并对照晚上飞 LAX 的航班（完赛 + 冲澡 + 15分钟 Uber 到机场 + 提前2小时）。",
        "整个下午补水 + 电解质——在高原干燥环境待了一周，你的水分是欠着的。",
        "今晚睡眠压倒一切；赛前两晚的睡眠比前一晚更重要，所以你已经存好了。"
      ]
    },
    {
      title: "HYROX 盐湖城 · 飞洛杉矶",
      summary: "在市中心 Salt Palace 会展中心比赛。出发前 2.5–3 小时吃熟悉的早餐，好好热身，比赛，恢复——然后 Uber 去机场，晚上飞 LAX。",
      blocks: [
        { time: "出发前3小时", title: "🍚 赛前早餐", detail: "粥/白饭/燕麦 + 一根香蕉 + 少量蛋或鸡肉，出发前 2.5–3 小时吃。平时喝咖啡就照常。⚠️ 酒店免费早餐周末开得晚（约7:00），所以如果你是早场，前一晚把自己的早餐放进房间冰箱；中午的场次可以下楼吃。出发前 45–60 分钟：一根香蕉或一支胶 + 运动饮料。" },
        { time: "出发前25分钟", title: "🔥 热身", detail: "8–10分钟轻松跑 → 动态活动度 → 3×20秒渐进加速 → 每个站点轻碰一下（划船30秒/SkiErg 30秒、几步雪橇、5个 wall ball）→ 出发前安静5分钟。" },
        { time: "你的波次", title: "🏁 HYROX 盐湖城——Salt Palace 会展中心", detail: "90 S West Temple，市中心。配速：第一个1公里比目标慢10–15秒/公里；雪橇推低髋小步；农夫行走不放手；wall ball 按计划分组（如25/25/25/25）短歇；Ski 和划船用长桨低桨频。在站点抿电解质；预计超过60分钟就在第4站前后来一支胶。" },
        { time: "赛后", title: "🥤 恢复餐与冲澡", detail: "一小时内碳水 + 蛋白（米饭+鸡肉或恢复奶昔），继续走动，然后回酒店冲澡、退房。" },
        { time: "晚上", title: "✈️ Uber 去 SLC → 飞 LAX", detail: "Salt Palace 到 SLC 机场约15分钟。提前2小时到。飞机上穿压缩袜、多喝水——靠窗的位置是你应得的。" }
      ],
      eat: "赛前早餐在酒店；恢复餐在市中心；飞机上的零食。",
      tips: [
        "带上：号码布/参赛包、证件、穿惯的鞋、允许的话带镁粉、一套换洗衣服、自己的补给——比赛当天不试任何新东西。",
        "9月20日波次：女子双人 07:00–11:50 · 女子/适应组 12:20–14:20 · 男子双人 14:50–16:40——在 HYROX App 里确认你的。",
        "赛后：别一坐几个小时——在航站楼走走、补水、继续补蛋白。"
      ]
    }
  ],

  logistics: [
    { label: "去程航班", value: "9月13日（周日）：飞盐湖城，傍晚到达。当晚在 SLC 取租车。" },
    { label: "租车", value: "9月13日夜在 SLC 取车 → 9月19日下午还车（6天）。往返约900英里：SLC → 大提顿 → 西黄石（园内环线）→ SLC。" },
    { label: "SLC → 大提顿", value: "9月14日：约280英里/约5小时，走 I-15 → US-89（Star Valley → Jackson）或 I-15 → Idaho Falls → US-26。然后从黄石南门北上到西黄石（含 West Thumb 约3小时）。" },
    { label: "黄石大本营", value: "Dude & Roundup Motel，3 Madison Ave，西黄石——离西门一个街区，9月14–19日共5晚。Madison Junction 在园内14英里；老忠实约45分钟、Canyon 约1小时15分、Mammoth 约1.5小时、拉马尔谷约2.5小时。" },
    { label: "西黄石 → SLC", value: "9月19日：11点出发，约320英里/约5小时，走 US-20 → I-15（Idaho Falls 停一次）。下午还车并退还所有东西。" },
    { label: "HYROX", value: "9月20日（周日）在 Salt Palace 会展中心，90 S West Temple，盐湖城市中心。各组别波次 07:00–16:40——确认你的。不需要车：从 Hyatt Place 步行约0.5英里（10分钟），之后打 Uber 去机场（约15分钟）。" },
    { label: "回程航班", value: "9月20日（周日）晚上：SLC → LAX。提前2小时到机场。" }
  ],

  bookings: [
    "待办 — 机票 SFO → SLC（9月13日，傍晚到）",
    "待办 — 机票 SLC → LAX（9月20日晚）",
    "待办 — 租车：9月13日夜 SLC 取 → 9月19日下午还（确认同一网点，或机场取/市中心还）",
    "✅ Hyatt Place Salt Lake City / Downtown / The Gateway（55 N 400 W）— 9月13日 & 19日，盐湖城两晚都住这儿。含免费早餐、小冰箱，步行约10分钟到 Salt Palace",
    "✅ Dude & Roundup Motel，西黄石（3 Madison Ave）— Double Deluxe、多张床，9月14–19日。没有厨房，但已电话确认会配冰箱和微波炉——入住时跟前台提一下电饭煲就行",
    "🍚 9月13日买一个电饭煲 — 冰箱和微波炉能存能加热，但只有电饭煲能煮出像样的饭和粥（日落观兽的保温壶就靠它）",
    "✅ HYROX 盐湖城报名（9月20日）——在 App 里确认波次时间",
    "📦 Whole Foods 取快递（9月14日早上）——准备好取件码",
    "📡 Starlink Mini 取货（9月14日早上）——账号已激活、App 已登录",
    "🎫 门票：大提顿 $35 + 黄石 $35（每车7天），或 $80 America the Beautiful 年票",
    "🐻 熊喷雾——**租**，别买。Jackson 的 Bear Aware / Teton Backcountry Rentals：前两天$16，之后每天$4，上限$28。9月14日在 Jackson 取，9月18日还到西黄石的 Freeheel & Wheel（40 Yellowstone Ave，24小时投递箱）——他们有12个取货点、19个还货点，可以异地还。买要约$45–50，而且不能带上飞机",
    "🛒 中国城超市购物清单（9月13日，周日开到10pm）——你有冰箱、微波炉和电饭煲：米、粥料、面条、馒头/包子、速冻饺子、鸡蛋、熟食/卤味、豆腐、叶菜、调料、香蕉、蜂蜜",
    "🍳 Target/Walmart 清单：电饭煲、碗筷餐具、小刀+砧板、保温壶、保温袋（园里长途那几天用）、洗洁精+海绵、抓绒、帽子、手套（不用买锅——没有灶）",
    "📲 失去信号前下载：NPS 黄石 App（间歇泉预测）、公园离线 Google 地图、GeyserTimes",
    "── 道路与公园状态 ──────────────",
    "🛣 每个公园日的前一晚查 NPS 路况（早雪可能关闭 Dunraven Pass）；Tower Junction 桥施工：单车道最多等30分钟，到9月30日",
    "🔁 9月19日退还：租车、Starlink Mini，以及其它要退的东西——收据 + 包装放在一个袋子里"
  ],

  packing: {
    "Essentials": ["证件/驾照（租车用）", "银行卡 + 少量现金", "手机 + 车充 + 充电宝", "Starlink Mini + 供电（12V/USB-C）+ App 已登录", "离线地图 + NPS App 已下载", "公园门票/收据", "水瓶（2个以上）——高原、干燥", "防晒霜、墨镜、润唇膏（2,000米高原日晒强）", "头灯（从海登谷和拉马尔谷摸黑回家）", "望远镜 🐺"],
    "Cold-weather layers": ["抓绒/羽绒中间层", "防水防风外壳", "帽子 + 手套（清晨约 −1°C）", "保暖内层", "厚袜子", "穿惯的舒适步行/徒步鞋", "雨裤或速干裤"],
    "Hiking & wildlife": ["🐻 熊喷雾——在 Jackson 租、在西黄石还（不能上飞机）", "日用背包", "路上零食", "保温壶（日落观兽时喝粥/热茶）", "水泡贴/小急救包", "相机/手机镜头布（间歇泉蒸汽）"],
    "Cooking & food": ["电饭煲（9月13日买——煮饭煮粥用）", "碗、筷子、餐具、小刀 + 砧板", "保温袋 + 冰（园里长途那几天用；房间有冰箱）", "洗洁精 + 海绵 + 几个食物盒", "米、粥料、面条、馒头/包子（赛前碳水）", "鸡蛋、速冻饺子、熟食/卤味、豆腐、叶菜、调料", "香蕉、蜂蜜、果汁、米饼（碳水加载补充）", "电解质片/运动饮料"],
    "HYROX race kit": ["比赛鞋（穿惯的）+ 袜子", "比赛上衣/短裤 + 一套换洗", "能量胶/咀嚼糖（试过的）+ 电解质", "镁粉（允许的话）+ 护腕/握力带（用的话）", "号码布/参赛包确认", "泡沫轴或按摩球", "回程飞机穿的压缩袜"]
  }
};
