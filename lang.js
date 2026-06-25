/*
 * Chinese (Simplified) localization overlay + UI dictionary.
 *
 * IMPORTANT: English (data.js) stays the single source of truth. This file is
 * an OVERLAY — app.js deep-merges TRIP_ZH onto TRIP, field by field, and falls
 * back to the English value wherever a Chinese string is missing. So when you
 * update the trip in the future, edit data.js in English; translations here are
 * optional and degrade gracefully.
 *
 * Structure of TRIP_ZH mirrors TRIP in data.js (same array order / keys).
 * Proper nouns kept in English on purpose (hotel names, "Amtrak", "OMNY",
 * "Sweet Home Café", etc.) so staff/maps still recognize them.
 */

// ---- Interface chrome (everything not in the trip data) ----
const UICOPY = {
  en: {
    tab_overview: "Overview", tab_itinerary: "Itinerary", tab_stays: "Stays",
    tab_weather: "Weather", tab_bookings: "Bookings", tab_packing: "Packing",
    cd_days: "days", cd_cities: "cities", cd_daysPlanned: "days planned",
    cd_home: "Welcome home! Hope it was unforgettable. ✈️",
    cd_during: "🎉 You’re on the trip right now — go have fun!",
    ov_glance: "Trip at a glance", ov_where: "Where you’ll be", ov_logistics: "Logistics",
    stays_title: "Where you’re staying", stays_sub: "All confirmed. Tap a hotel to open it in Maps.",
    night: "night", nights: "nights",
    itin_title: "Day by day", itin_sub: "Tap any day to expand. Each stop has an “Open in Maps” link.",
    daymap_places: "🗺 Places this day", daymap_route: "↗ Route in Google Maps",
    leg_nextdoor: "next door", eat_label: "Eat", tips_label: "Tips",
    openMaps: "🗺 Open in Maps", openGoogleMaps: "Open in Google Maps",
    weather_title: "Weather", weather_high: "High", weather_low: "Low", weather_rain: "Rain",
    weather_live: "live forecast", weather_normal: "seasonal average",
    weather_sub: "Jun 28 – Jul 4. Shows typical seasonal averages until the dates come within forecast range (~16 days out), then auto-updates to the live forecast when online.",
    weather_loading: "Checking for a live forecast…",
    weather_offline: "Showing seasonal averages (no live forecast — offline or dates still too far out).",
    weather_packTitle: "What to pack for this weather",
    weather_updated: (t) => `Updated ${t} · live forecast`,
    weather_updatedNormal: "Seasonal averages — no live forecast yet",
    wxAdvice: {
      rain: "☔ Rain likely — pack a compact umbrella & a packable rain jacket",
      storm: "⛈ Thunderstorms expected — umbrella + a backup indoor plan for the afternoon",
      hot: "🥵 Hot days — light breathable clothes, a hat, sunscreen & extra water",
      mild: "🌤 Pleasant stretches — a light layer for the evenings",
      sun: "🧴 Strong sun — sunglasses, hat & sunscreen"
    },
    book_title: "Booking checklist", book_sub: "Lock these in ahead of time — most sell out or get pricey for the holiday.",
    pack_title: "Packing list", pack_sub: "Hot, humid, lots of walking. Check items off as you pack.",
    reset: "Reset list",
    progress: (d, t) => `${d} of ${t} done`,
    leg_from: (i, mi) => `${mi} mi from #${i}`,
    heroDates: (fs, fe) => `${fs} – ${fe}, 2026`,
    docTitle: " · Itinerary",
    footer: "Your personal travel agent · the itinerary updates itself",
    packGroups: {} // identity in English; keys are already English
  },
  zh: {
    tab_overview: "概览", tab_itinerary: "行程", tab_stays: "住宿",
    tab_weather: "天气", tab_bookings: "预订清单", tab_packing: "行李",
    cd_days: "天", cd_cities: "座城市", cd_daysPlanned: "天行程",
    cd_home: "欢迎回家！希望这趟旅程难以忘怀。✈️",
    cd_during: "🎉 你们正在旅途中——尽情玩吧！",
    ov_glance: "行程速览", ov_where: "你们会去的地方", ov_logistics: "交通与衔接",
    stays_title: "住宿安排", stays_sub: "全部已确认。点酒店名可在地图中打开。",
    night: "晚", nights: "晚",
    itin_title: "逐日行程", itin_sub: "点任意一天展开。每个地点都有“在地图中打开”的链接。",
    daymap_places: "🗺 当天地点", daymap_route: "↗ 在 Google 地图看路线",
    leg_nextdoor: "就在隔壁", eat_label: "吃", tips_label: "小贴士",
    openMaps: "🗺 在地图中打开", openGoogleMaps: "在 Google 地图中打开",
    weather_title: "天气", weather_high: "最高", weather_low: "最低", weather_rain: "降雨",
    weather_live: "实时预报", weather_normal: "常年平均",
    weather_sub: "6月28日 – 7月4日。在日期进入可预报范围（约提前16天）之前显示常年同期平均值，之后联网时会自动更新为实时预报。",
    weather_loading: "正在获取实时预报…",
    weather_offline: "显示常年同期平均值（暂无实时预报——可能离线，或日期还太远）。",
    weather_packTitle: "针对天气的行李建议",
    weather_updated: (t) => `更新于 ${t} · 实时预报`,
    weather_updatedNormal: "常年同期平均值——暂无实时预报",
    wxAdvice: {
      rain: "☔ 大概率有雨——带把折叠伞和可收纳雨衣",
      storm: "⛈ 预计有雷阵雨——带伞，午后留个室内备选方案",
      hot: "🥵 天气炎热——穿轻薄透气的衣服，戴帽子、涂防晒、多带水",
      mild: "🌤 有舒适时段——晚上备一件薄外套",
      sun: "🧴 日晒较强——墨镜、帽子、防晒霜"
    },
    book_title: "预订清单", book_sub: "提前把这些订好——大多在节日期间会售罄或涨价。",
    pack_title: "行李清单", pack_sub: "又热又潮、要走很多路。一边收拾一边打勾。",
    reset: "重置清单",
    progress: (d, t) => `已完成 ${d}/${t}`,
    leg_from: (i, mi) => `距第${i}站 ${mi} 英里`,
    heroDates: (fs, fe) => `2026年 ${fs} – ${fe}`,
    docTitle: " · 行程",
    footer: "你的专属旅行助手 · 行程会自动更新",
    packGroups: {
      "Essentials": "必备物品",
      "Clothes (hot & humid)": "衣物（炎热潮湿）",
      "Health & comfort": "健康与舒适",
      "Smart extras": "实用小物"
    }
  }
};

// ---- Trip content overlay (mirrors TRIP in data.js) ----
const TRIP_ZH = {
  title: "美东之旅 2026",
  subtitle: "旧金山 → 华盛顿特区 → 纽约 → 旧金山",

  highlights: [
    "🎆 2026年7月4日是美国独立250周年纪念日（“America250”半千禧庆典）。华盛顿和纽约都会有空前盛大的庆祝——同时也意味着更多人潮、更严的安检和更高的物价。",
    "✈️ 你们的7月4日是赶飞机的一天：肯尼迪机场（JFK）飞旧金山的航班晚上6:55起飞，所以梅西烟花表演时你们正在飞机上。这个取舍已由订票决定——见7月4日的说明。",
    "⛵ Sail4th 250（7月3–8日）：30多艘高桅帆船和40多艘海军舰艇驶入纽约港、环绕自由女神像——难得一遇的海上巡游，正好赶上你们在纽约的几天。",
    "🚆 华盛顿到纽约你们坐火车（Amtrak，约3.5小时，抵达全新的 Moynihan 车站大厅）——比这一段坐飞机方便太多。",
    "🏛 华盛顿大多数史密森尼博物馆都免费；你们预约的三家（航空航天、非裔美国人历史、大屠杀纪念馆）都已订好。",
    "☀️ 6月底到7月初的美东又热又潮（最高约30–35°C，午后常有雷阵雨）。穿轻便透气的衣服，多补水。"
  ],

  cities: [
    { name: "华盛顿特区", dates: "6月26–30日" },
    { name: "纽约市", dates: "6月30日 – 7月4日" }
  ],

  stays: [
    { city: "华盛顿特区", dates: "6月26–30日", area: "市区，靠近白宫——步行可到国家广场，地铁方便。" },
    { city: "纽约市", dates: "6月30日 – 7月4日", area: "中城一家酒店住满四晚——紧邻时代广场、帝国大厦和剧院区，中途不用换酒店。" }
  ],

  days: [
    {
      title: "✈️ 飞往华盛顿 · 傍晚抵达",
      summary: "横跨美国的飞行日——傍晚5:59落地，所以今晚就办理入住、吃晚饭，顺便在附近的白宫边轻松逛一圈。",
      blocks: [
        { time: "上午9:39", title: "✅ 旧金山飞华盛顿（DCA）", detail: "已订：旧金山飞里根国家机场（DCA），太平洋时间上午9:39起飞，东部时间下午5:59抵达（直飞约5小时20分 + 3小时时差）。DCA 是离市区最近的机场——到酒店约15分钟。" },
        { time: "傍晚", title: "✅ 入住凯悦嘉轩 华盛顿/白宫店", detail: "从 DCA 坐地铁（蓝线/黄线）或打车约15分钟到白宫附近的酒店。放下行李、洗漱一下——你们会又累又饿，所以今晚安排得轻松些。" },
        { time: "夜晚", title: "晚餐 + 夜游白宫", detail: "在酒店附近/市区吃晚饭；如果还有精力，散步到白宫（北侧、拉法耶特广场）——夜里灯火通明、安静宜人。夏天天黑得晚，过了8:30还有光。" }
      ],
      eat: "在酒店附近/市区吃晚饭（14th 街一带选择很多）。第一晚从简，别安排太满。",
      tips: ["飞机上多补水——华盛顿的潮湿很难受。", "在机场就把地铁的 SmarTrip / 手机刷卡设置好。", "你们傍晚才落地，所以把大景点的纪念碑留到后面某个晚上。"]
    },
    {
      title: "国会山、航空航天与夜游纪念碑",
      summary: "从容的晚出发广场日，全程步行、几乎不用通勤：已订的上午11:20国会大厦导览、下午1点航空航天，一座博物馆，最后夜里看亮灯的林肯纪念堂。",
      blocks: [
        { time: "上午11:20", title: "✅ 国会大厦——导览团（已订3张票）", detail: "你们预约的国会大厦导览是上午11:20——约11:00到国会游客中心（地下、东侧）过安检。先看一段简短的介绍影片，再由导览带你们参观圆形大厅和雕像厅。隔着广场对面就是国会图书馆（华美的杰斐逊大楼），有几分钟可以顺便看看。", map: "United States Capitol" },
        { time: "下午1:00", title: "✅ 国家航空航天博物馆（已订3张票）", detail: "你们的定时票是下午1:00——离国会大厦约12分钟步行，导览结束直接过去。提醒：截至2026年6月底只开放了约一半（8个全新展厅 + 翻新的天文馆）；建馆50周年再开5个展厅是在7月1日，刚好在你们离开之后。", map: "National Air and Space Museum Washington DC" },
        { time: "下午", title: "国家自然历史博物馆——免预约", detail: "穿过广场走几步就到（免费、无需门票）。希望钻石、恐龙与化石展厅、圆厅大象——第一次来很讨喜。隔壁的国家美术馆也免费，有精力可以加。", map: "National Museum of Natural History Washington DC" },
        { time: "夜晚", title: "🏛 林肯纪念堂与夜游纪念碑", detail: "国家广场的压轴、也是最佳时段：走二战纪念碑、倒影池，一直到林肯纪念堂——打着灯、非常美，也比白天凉快。华盛顿纪念碑在身后高耸。第一次来会很难忘。", map: "Lincoln Memorial Washington DC" }
      ],
      eat: "导览前后在国会游客中心咖啡厅或买点带走的；航空航天之后再吃个迟午餐；晚餐在 Penn Quarter / 中国城。",
      tips: ["减少通勤：国会山 → 航空航天 → 自然历史 → 林肯纪念堂，沿国家广场由东向西一条线走完，不用坐地铁。", "时间安排：国会大厦导览11:20（约11:00到过安检），再步行约12分钟到航空航天赶下午1:00。", "晚一点出发、比较从容，适合父母。广场来回约2英里——穿舒服的鞋、带水、放慢节奏。", "林肯纪念堂夜景是重头戏——留到晚上,亮灯又凉快。"]
    },
    {
      title: "白宫、非裔美国人历史博物馆与美国的故事",
      summary: "一早先看白宫（就在你们酒店旁），再去两个预约博物馆——上午11点 NMAAHC、下午3:30大屠杀纪念馆。全都在15街一带，几乎不用通勤。",
      blocks: [
        { time: "上午9:30", title: "🏛 白宫", detail: "你们酒店就在旁边，从这儿开始。最佳视角：北侧从宾州大道/拉法耶特广场（经典的门廊正面照），再到南侧从椭圆草坪（the Ellipse）看。（进内部要提前数月通过使馆/国会安排——现实就是看外观。）从这儿往南步行约10分钟到 NMAAHC。", map: "The White House" },
        { time: "上午11:00", title: "✅ 非裔美国人历史与文化博物馆（NMAAHC，已订3张票）", detail: "你们的定时票是上午11:00——提前约10分钟到过安检。从地下的历史展厅开始、自下而上参观；按时间顺序、很有震撼力。安排约3小时，在馆内的 Sweet Home Café 吃午饭。", map: "National Museum of African American History and Culture" },
        { time: "约下午2:00", title: "国家美国历史博物馆——免预约（有时间的话）", detail: "就在附近，无需预约。今天的机动项：如果 NMAAHC 超时，就只进去看看星条旗和“美国民主”展（很应250周年的景），或者干脆跳过、在去大屠杀纪念馆前歇一歇。", map: "National Museum of American History" },
        { time: "下午3:30", title: "✅ 大屠杀纪念馆——常设展（已订3张票）", detail: "预约的是3:30–3:45入场，地址 100 Raoul Wallenberg Pl SW（从美国历史博物馆步行约12分钟）。常设展约需2–3小时，非常震撼；最晚入场4:30，闭馆5:30。看完留点安静的时间。", map: "United States Holocaust Memorial Museum" },
        { time: "夜晚", title: "The Wharf 或 U Street", detail: "去 The Wharf 海滨吃海鲜放松一下（约15分钟），或去 U Street 听现场爵士、吃 Ben’s Chili Bowl。", map: "The Wharf Washington DC" }
      ],
      eat: "午餐在 NMAAHC 馆内的 Sweet Home Café；晚餐在 The Wharf 或 U Street。",
      tips: ["减少通勤：白宫 → NMAAHC → 大屠杀纪念馆都沿15街一线——白宫甚至从你们酒店就能走过去。", "两个固定时间：NMAAHC 上午11:00，大屠杀纪念馆下午3:30。中间的美国历史博物馆可选——来不及就放弃。", "NMAAHC + 大屠杀纪念馆放在同一天情绪上很重——慢慢来，看完留点空白时间。", "大约下午3:15前从 NMAAHC/美国历史博物馆一带出发，步行约12分钟到大屠杀纪念馆。"]
    },
    {
      title: "阿灵顿、五角大楼与乔治城",
      summary: "过河到弗吉尼亚一侧，把挨在一起的两个大景点一并看了——阿灵顿国家公墓和五角大楼9/11纪念园，再回到迷人的乔治城。把两个弗吉尼亚景点凑在一起，通勤最省。",
      blocks: [
        { time: "上午", title: "阿灵顿国家公墓", detail: "无名战士墓的换岗仪式、肯尼迪墓与长明火、从阿灵顿庄园回望华盛顿的景色。坐地铁（蓝线）直达 Arlington Cemetery 站——趁早去，凉快、人也少。", map: "Arlington National Cemetery" },
        { time: "上午晚些", title: "🏛 五角大楼9/11纪念园（五角大楼）", detail: "离阿灵顿就一站地铁（Pentagon 站）——几乎不用额外通勤。户外的9/11纪念园免费、每天开放、无需预约、不用安检——184条长椅纪念在此遇难者。旁边就能看到五角大楼本体。（进大楼内部参观要提前14–90天预约；纪念园才是现实的选择。）", map: "Pentagon 9/11 Memorial Arlington" },
        { time: "下午", title: "乔治城", detail: "再过河回到乔治城：历史悠久的鹅卵石街道、C&O 运河、海滨公园，沿 M 街和 Wisconsin 大道购物。喜欢的话来个纸杯蛋糕。", map: "Georgetown Washington DC" },
        { time: "夜晚", title: "收拾行李、为坐火车做准备", detail: "在白宫附近的酒店早点休息。明天的 Amtrak 订的是上午7:45——是早班车，把车票下载好、重新打包、把上车穿的衣服备好。联合车站离酒店约10分钟。", map: "Hyatt Place Washington DC White House" }
      ],
      eat: "午餐在乔治城（海滨露台餐厅）；晚餐在酒店附近随意吃。",
      tips: ["减少通勤：阿灵顿 + 五角大楼纪念园只隔一站地铁——一起看完再过河回乔治城。", "阿灵顿要在坡地上走很多路——还是穿舒服的鞋、放慢节奏。", "五角大楼纪念园免费、无需预约；进大楼内部才需要提前几周预约。", "今晚把 Amtrak 车票存到 App 里——是早上7:45的早班车。"]
    },
    {
      title: "火车 华盛顿→纽约 · 联合国导览与帝国大厦",
      summary: "坐早班火车到宾州车站，入住时代广场的酒店（四晚都住这儿），下午3:15联合国中文导览，然后帝国大厦登顶，晚上逛灯火通明的时代广场。",
      blocks: [
        { time: "上午7:45", title: "✅ Amtrak：华盛顿→纽约（已订3张票）", detail: "华盛顿联合车站上午7:45发车，约上午11:14抵达纽约宾州车站（约3小时29分）。提前约20分钟检票上车；离开华盛顿时坐左/西侧能看到水景。上车前在联合车站买杯咖啡 + 早饭。" },
        { time: "中午12:00", title: "✅ 入住 Candlewood Suites 时代广场", detail: "从宾州车站步行约10分钟，或一站地铁就到酒店——不用转车。放下行李、休整一下。这是你们纽约四晚唯一的落脚点，可以好好打开行李。" },
        { time: "约12:30", title: "时代广场附近午饭（约1小时）", detail: "在酒店附近吃午饭——往西几个街区的 Hell’s Kitchen（9th Ave）选择最多。控制在一小时左右，大约1:45往联合国方向走。" },
        { time: "下午2:00", title: "到达联合国（2点）— 带护照 + 证件", detail: "为3:15的导览，下午2:00前到联合国总部。约2:15开始安检——机场级别，**必须带护照 + 带照片的证件**（没护照进不去）。访客入口在 1st Ave 和 46 街路口。" },
        { time: "下午3:15", title: "✅ 联合国 — 中文导览团（已预约）", detail: "你们预约的中文导览3:15开始——联合国大会堂、安理会会议厅、各国捐赠的艺术品。约1小时。" },
        { time: "下午5:45", title: "帝国大厦登顶 — 🎟️ Go City 通票", detail: "从联合国走/坐车约20–25分钟到帝国大厦（含在你们的 Go City 通票里）。5:45到黄昏最棒——在86层观景台能同时看到白天、日落和城市亮灯。在 Go City App 里预约时段可免排队。" },
        { time: "夜晚", title: "夜晚的时代广场 + 晚餐", detail: "逛灯火全开的时代广场（你们就住这儿，会常经过）。晚餐往西几个街区的 Hell’s Kitchen 比广场里好太多。" }
      ],
      eat: "联合国之前在酒店附近吃午饭（约1小时）；帝国大厦之后在 Hell’s Kitchen（9th Ave）吃晚饭。",
      tips: ["⚠️ 联合国导览：带**护照 + 带照片的证件**——进场必需。2:00前到、约2:15安检、3:15导览。", "时间够用：联合国导览（约1小时）大约4:15–4:30结束，再约20分钟到帝国大厦，赶5:45不慌。", "宾州车站到酒店步行可达——拖着行李也不用研究地铁。", "帝国大厦 + One World（7月1日）+ 洛克菲勒之巅（7月2日）都在 Go City 通票里——记得在 App 里预约时段。"]
    },
    {
      title: "自由女神、埃利斯岛、9/11 与 One World",
      summary: "充实又顺路的下城一天，基本不走回头路：赶首班船游两岛，下午看 9/11，再到隔壁的 One World 观景台——晚上回时代广场。",
      blocks: [
        { time: "上午6:30", title: "起床 · 咖啡和松饼", detail: "6:30 起床、洗漱，在大堂拿杯咖啡 + 松饼。早出发 = 能赶首班船，避开人潮和正午的暑热。" },
        { time: "上午7:40", title: "Uber 去 Battery Park（约18分钟）", detail: "Uber 下到 Battery Park。清晨车少，从时代广场过去很快。" },
        { time: "上午8:00", title: "到 Battery Park · 找 Castle Clinton", detail: "走到 Castle Clinton——那座圆形的红砂岩古堡，登船和取票都在这里。" },
        { time: "上午8:15", title: "取登船牌", detail: "领取你们基座参观团的登船牌。" },
        { time: "上午8:30", title: "过安检", detail: "上船前有机场级安检——别带大件行李，会拖慢你们、甚至被拦下。" },
        { time: "上午9:00", title: "✅ 首班船 → 自由岛", detail: "已订基座参观团。从纽约一侧坐当天首班渡轮前往自由岛。" },
        { time: "上午9:20–11:15", title: "自由岛：基座 + 博物馆 + 拍照", detail: "登上基座近距离观景，逛自由女神博物馆，以海港和天际线为背景拍照。" },
        { time: "上午11:15", title: "摆渡 → 埃利斯岛（约20分钟）", detail: "坐接驳渡轮前往埃利斯岛。" },
        { time: "上午11:35–下午1:00", title: "埃利斯岛移民博物馆", detail: "参观感人的国家移民博物馆——很被低估，值得花时间。" },
        { time: "下午1:00", title: "摆渡 → 回 Battery（约20分钟）", detail: "坐渡轮回到 Battery Park。" },
        { time: "下午1:30", title: "世贸/Battery 附近午饭", detail: "在世贸中心 / Battery 一带吃迟一点的午饭，再去下午的博物馆。" },
        { time: "下午2:30–4:30", title: "✅ 9/11纪念馆与博物馆（已订3张票）", detail: "先看双子塔原址上免费的户外纪念水池，再凭定时票进博物馆。安排约2小时；很有冲击力、也很肃穆。" },
        { time: "下午4:30", title: "步行约3分钟到隔壁", detail: "从 9/11 博物馆走几分钟到 One World Trade Center。" },
        { time: "下午5:00–6:30", title: "One World 观景台 — 🎟️ Go City 通票", detail: "在西半球最高楼俯瞰白天的景色（含在你们的 Go City 通票里）。日落留给明天的洛克菲勒之巅，两者不重复。" },
        { time: "下午6:30", title: "下城晚饭，或坐 ① 号线回中城", detail: "在 Stone Street / 金融区一带很有味道的石板老街吃晚饭，或坐 1 号线直接回时代广场和酒店。" }
      ],
      eat: "渡轮回来后在世贸附近吃迟午餐；晚餐在下城 Stone Street（鹅卵石露台），或回中城酒店附近吃。",
      tips: ["满但顺——基本不走回头路，而且 One World 就在 9/11 博物馆隔壁。", "已订的固定时间：上午9:00首班船（基座），9/11 博物馆下午2:30。大约8:00前到 Castle Clinton。", "过渡轮安检别带大件行李。", "🎟️ 今天的 One World + 帝国大厦（6月30日）+ 洛克菲勒之巅（7月2日）都在 Go City 通票里。", "1 号线从金融区直达时代广场——今晚回去很方便。"]
    },
    {
      title: "布鲁克林大桥、华尔街、中央公园与日落",
      summary: "上午下城、下午上城：布鲁克林大桥 + 华尔街，再到中央公园，最后黄昏登洛克菲勒之巅。（大都会挪到了7月4日，用 BOA 周末免门票。）",
      blocks: [
        { time: "上午", title: "走布鲁克林大桥", detail: "坐地铁到 City Hall / 布鲁克林大桥。走桥上的人行步道，经典天际线 + 海港景——趁早走更凉快、人也少。可以走一半折返，或一直走到布鲁克林一侧的 DUMBO 拍照。" },
        { time: "上午晚些", title: "华尔街与金融区", detail: "折回金融区：华尔街铜牛、纽约证券交易所、联邦大厅、三一教堂。一片很集中、步行可达——安排约1小时。" },
        { time: "下午", title: "中央公园", detail: "坐地铁上城到哥伦布圆环（2/3 或 A/C 快线很快）。Bethesda 露台、林荫道、Bow 桥、眺望台城堡。租辆自行车或随意闲逛——和上午形成轻松的对比。" },
        { time: "日落", title: "洛克菲勒之巅 — 🎟️ Go City 通票", detail: "黄昏登洛克菲勒之巅（含在你们的 Go City 通票里）——经典天际线、帝国大厦入镜。在 Go City App 里预约日落时段，会卖光。离酒店步行即到。" }
      ],
      eat: "午餐在下城 Stone Street / 金融区；看完观景台回中城吃。",
      tips: ["由下城到上城的动线：先走布鲁克林大桥 + 华尔街，再上城去中央公园，不用来回穿城。", "🎟️ 洛克菲勒之巅在 Go City 通票里——预约日落时段（会卖光）。", "趁早走布鲁克林大桥——临近中午又热又挤。", "大都会改到了7月4日（那个周末用 BOA 卡免票），所以今天不去。"]
    },
    {
      title: "下城的酷：高线公园、格林威治村、百老汇",
      summary: "最有“在地感”的一天，路线由北到南再折回：高线公园→村子，再上去酒店旁的百老汇。全程步行/一趟地铁可达。",
      blocks: [
        { time: "上午", title: "高线公园 + 切尔西市场", detail: "从时代广场到高线公园北端（Hudson Yards）约1英里。沿这座高架公园一路向南走到肉库区，在切尔西市场边走边吃。" },
        { time: "下午", title: "格林威治村 / SoHo / 华盛顿广场", detail: "在华盛顿广场公园、村子绿树成荫的街道、SoHo 的铸铁建筑购物街区闲逛。可选：小意大利和中国城。" },
        { time: "傍晚", title: "百老汇演出——⚠️ 需购票", detail: "看一场百老汇演出——提前订某个剧目，或到时代广场的 TKTS 亭（离酒店几步）碰当日折扣票。演出前后在剧院区吃饭。" }
      ],
      eat: "演出前在剧院区吃套餐，或在村里吃经典（披萨、意面）。",
      tips: ["2026年独有：时代广场的水晶球在7月3日落下——连落八次，对应美国每个时区的午夜，为250周年揭幕。你们就住在那儿——一定去看。", "Sail4th 250 的高桅帆船今天到7月8日都停在港里。", "7月3日随着节日临近会很挤——晚饭记得订位。"]
    },
    {
      title: "美国250周年 · 大都会 · 飞回旧金山",
      summary: "一早先逛大都会（7月4–5日那个周末用 BOA 卡免门票），然后退房去 JFK 赶6:55的航班。紧凑但来得及。",
      decision: {
        title: "✈️ 7月4日是赶路日——上午逛大都会，下午3点前离开",
        body: "机票已订：JFK 飞 SFO，晚上6:55起飞。7月4–5日是当月第一个完整周末，所以凭 Bank of America 卡进大都会免费——但4号也是你们的出发日。一早先看大都会，然后下午3点左右离开曼哈顿。梅西8–10点烟花时你们已在机场/空中——这个取舍由订票决定。",
        options: [
          "退房后把行李寄存在酒店，空手逛大都会。",
          "大约12:30前走出大都会——节日周六从大都会（东82街）到 JFK 要不少时间。",
          "更想看烟花？只能把航班改到7月5日——否则在 NBC/Peacock 上看直播。"
        ]
      },
      blocks: [
        { time: "上午9:00", title: "退房 + 寄存行李", detail: "在酒店附近吃早饭，从 Candlewood Suites 退房，把行李寄存在前台，空手去逛大都会。" },
        { time: "上午10:00", title: "🎟️ 大都会博物馆 — 凭 BOA 卡免门票", detail: "大都会10点开门。7月4日（周六）是当月第一个完整周末，所以 Bank of America「Museums on Us」让你们俩免费入场——在售票处出示 BOA 卡 + 带照片的证件即可（无需提前订票）。直奔必看：埃及馆与丹铎神庙、欧洲绘画、（开放的话）屋顶花园。安排约2–2.5小时。" },
        { time: "约12:30", title: "午饭 + 取行李", detail: "在博物馆附近或回中城快速吃个午饭，再回酒店取行李。争取2:30前一切就绪。" },
        { time: "约下午3:00", title: "动身去 JFK", detail: "为晚上6:55的航班，下午3点左右离开曼哈顿——7月4日 + 250周年意味着严重堵车和安检排队。从中城：坐地铁/长岛铁路接 JFK 的 AirTrain，或叫车（多留时间）。争取下午5点左右到登机口。" },
        { time: "晚上6:55", title: "✅ 肯尼迪机场飞旧金山", detail: "已订：JFK 飞 SFO，东部时间晚上6:55起飞，太平洋时间晚上10:33抵达（约6小时40分 + 3小时时差）。烟花时你们在空中——如果航班有电视/Wi-Fi，可以在 NBC/Peacock 上看。" }
      ],
      eat: "在大都会附近或中城快速午餐；赶路这天买点带走的，正式坐下来吃不现实。",
      tips: ["🎟️ 带上实体 BOA 卡 + 带照片的证件——靠这个在大都会免费入场（第一个完整周末项目）。", "大约12:30前离开大都会；节日周六从大都会到 JFK 要多留缓冲。", "退房后把行李寄存在酒店，空手逛大都会。", "你们会错过现场的梅西烟花（在飞机上）——NBC/Peacock 晚上8–10点直播。"]
    }
  ],

  logistics: [
    { label: "去程航班", value: "✅ 旧金山→里根国家机场（DCA），6月26日（周五）：太平洋时间上午9:39起飞，东部时间下午5:59抵达。DCA 离酒店约15分钟。" },
    { label: "华盛顿→纽约", value: "✅ Amtrak，6月30日（周二）：华盛顿联合车站上午11:06 → 宾州车站 Moynihan 大厅约下午2:34（3小时28分）。" },
    { label: "回程航班", value: "✅ JFK→旧金山，7月4日（周六）：东部时间晚上6:55起飞，太平洋时间晚上10:33抵达。下午3点左右离开曼哈顿（节日 + 250周年人潮）。" },
    { label: "华盛顿出行", value: "从白宫附近的酒店坐地铁 + 步行。用 SmarTrip / 手机刷卡。国家广场从头走到尾都行。" },
    { label: "纽约出行", value: "从时代广场的落脚点（四晚都住这儿）坐地铁 + 步行。1/2/3 号线连接时代广场↔下城。Citi Bike 很适合逛公园和海滨。" }
  ],

  bookings: [
    "✅ 已完成 — 机票 旧金山→DCA（6月26日 上午9:39）",
    "✅ 已完成 — 机票 JFK→旧金山（7月4日 晚上6:55）",
    "✅ 已完成 — Amtrak 华盛顿→纽约（6月30日 上午11:06）",
    "✅ 已完成 — 凯悦嘉轩 华盛顿/白宫店（6月26–30日）",
    "✅ 已完成 — Candlewood Suites 时代广场，纽约（6月30日–7月4日，共四晚）",
    "✅ 已完成 — 航空航天博物馆门票（6月27日 下午1点，3张票）",
    "✅ 已完成 — NMAAHC 门票（6月28日 上午11点）",
    "✅ 已完成 — 大屠杀纪念馆门票（6月28日 下午3:30）",
    "✅ 已完成 — 自由女神像基座参观渡轮（7月1日 上午9点首班船，纽约出发）",
    "✅ 已完成 — 9/11纪念馆与博物馆（7月1日 下午2:30）",
    "✅ 已完成 — 联合国中文导览团（6月30日 下午3:15）— 带护照 + 证件",
    "✅ 已完成 — Go City 纽约通票（含帝国大厦、One World 观景台、洛克菲勒之巅等）",
    "🎟️ 在 Go City App 里预约时段：帝国大厦（6月30日晚）、One World（7月1日约下午5点）、洛克菲勒之巅（7月2日日落）——时段会卖光",
    "待办 — 百老汇演出（订剧目，或在时代广场 TKTS 碰当日票）",
    "可选 — 国家档案馆定时票（免费/1美元）看《独立宣言》",
    "可选 — 华盛顿纪念碑定时票（recreation.gov，提前90天）",
    "✅ 已完成 — 国会大厦导览（6月27日 上午11:20，3张票）",
    "🎟️ 大都会（7月4日上午）：凭 Bank of America 卡免门票——7月4–5日是当月第一个完整周末，适用「Museums on Us」。带实体 BOA 卡 + 带照片的证件，无需提前订票。",
    "提示 — 大都会、MoMA、自然历史博物馆（纽约）普通入场无需提前预约，但 MoMA 和 AMNH 提前订时段会更顺。",
    "── 公共交通与 App ──────────────",
    "🚇 纽约地铁/公交：直接用手机（Apple Pay/Google Pay）或非接触式银行卡在闸机上刷——这就是 OMNY。MetroCard 已于2026年1月彻底停用，不用买卡。每次都刷同一部手机/同一张卡。",
    "💰 纽约车费上限：7天周期内（周一到周日）刷满35美元后，本周余下的行程全部免费——所以不会多花钱。用同一种支付方式，刷卡才会累计到上限。",
    "🚇 华盛顿地铁：一样——在闸机刷手机/非接触卡（“Tap. Ride. Go.”）。实体 SmarTrip 现在可有可无；除非想留个纪念，否则不用买。",
    "📲 出发前装好的 App：Google 地图 + Apple 地图（都有实时公交线路和发车时间）、Citymapper（纽约/华盛顿最好用的公交 App——线路、出口、晚点都清楚）、Transit（实时到站很好用）。",
    "📲 现在就把银行卡加到 Apple Pay / Google 钱包，并用你真正会随身带的那部手机刷卡（包里带个充电宝——刷卡要有电！）。",
    "🚗 Uber/Lyft：不要预充 Uber Cash。预充余额不退、没有折扣、还可能用不完；绑卡按次扣费没有任何坏处。Uber 和 Lyft 都装上、比价。纽约黄色出租可用 Curb，应对7月4日的加价。",
    "🚆 Amtrak App：把华盛顿→纽约的车票（6月30日 上午11:06）存进 App，方便离线查看。",
    "✈️ 7月4日去 JFK：节日堵车时，AirTrain + 地铁/长岛铁路最靠谱；用 Uber/Lyft 会大幅加价——多留预算、下午3点左右就出发。"
  ],

  packing: {
    "Essentials": ["证件 / REAL ID（登机用）", "🛂 护照——联合国导览（6月30日）必须带；也可作为备用带照片证件", "💳 Bank of America 实体卡——7月4日大都会免门票", "🎟️ 谷歌工牌——在华盛顿和纽约的一些热门博物馆可能可以免费入场（如企业/文化福利）；带上它、在售票处问一问", "手机 + 充电器 + 充电宝", "🔌 中国→美国 转换插头（给父母的中国插头充电器；手机/电脑充电器多为100–240V通用，只需转换插头；220V电器需变压器）", "银行卡 + 少量现金", "可重复使用的水壶", "防晒霜 + 墨镜 + 帽子"],
    "Clothes (hot & humid)": ["轻便透气的上衣", "舒服的步行鞋（提前穿松！）", "一套稍正式的衣服（百老汇/晚餐用）", "折叠伞 / 可收纳雨衣", "🌧 带帽防水雨衣/冲锋衣（华盛顿午后多雷阵雨）", "泳衣（酒店泳池）"],
    "Health & comfort": ["水泡贴 / 创可贴", "止痛药 + 常用药", "免洗洗手液 + 湿巾", "止汗剂（会出很多汗）", "眼罩 + 耳塞"],
    "Smart extras": ["日用双肩包", "便携风扇 / 降温毛巾", "火车上的零食", "离线地图 + Amtrak/航空公司 App", "所有预订的离线存档/打印件"]
  }
};
