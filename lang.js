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
    tab_budget: "Budget", tab_bookings: "Bookings", tab_packing: "Packing",
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
    budget_title: "Budget estimate", th_item: "Item", th_low: "Low", th_high: "High",
    budget_total: "Estimated total / person",
    budget_note: "Tip: book flights, Amtrak, and hotels early — holiday-weekend prices climb fast. A NYC CityPASS can trim attraction costs.",
    book_title: "Booking checklist", book_sub: "Lock these in ahead of time — most sell out or get pricey for the holiday.",
    pack_title: "Packing list", pack_sub: "Hot, humid, lots of walking. Check items off as you pack.",
    reset: "Reset list",
    budget_sub: (n) => `Rough per-person planning ballparks (USD) for ${n === 1 ? "one traveler" : n + " travelers"}. Not quotes — the July 4th / 250th window pushes lodging toward the high end.`,
    progress: (d, t) => `${d} of ${t} done`,
    leg_from: (i, mi) => `${mi} mi from #${i}`,
    heroDates: (fs, fe) => `${fs} – ${fe}, 2026`,
    docTitle: " · Itinerary",
    packGroups: {} // identity in English; keys are already English
  },
  zh: {
    tab_overview: "概览", tab_itinerary: "行程", tab_stays: "住宿",
    tab_budget: "预算", tab_bookings: "预订清单", tab_packing: "行李",
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
    budget_title: "预算估算", th_item: "项目", th_low: "低", th_high: "高",
    budget_total: "预计总额 / 每人",
    budget_note: "建议：尽早订机票、Amtrak 和酒店——节日周末价格涨得快。买 NYC CityPASS 能省下部分景点门票。",
    book_title: "预订清单", book_sub: "提前把这些订好——大多在节日期间会售罄或涨价。",
    pack_title: "行李清单", pack_sub: "又热又潮、要走很多路。一边收拾一边打勾。",
    reset: "重置清单",
    budget_sub: (n) => `粗略的人均预算区间（美元），按${n === 1 ? "一位旅客" : n + "位旅客"}估算。仅供规划、并非报价——7月4日 / 250周年这段时间住宿会偏向高位。`,
    progress: (d, t) => `已完成 ${d}/${t}`,
    leg_from: (i, mi) => `距第${i}站 ${mi} 英里`,
    heroDates: (fs, fe) => `2026年 ${fs} – ${fe}`,
    docTitle: " · 行程",
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
    { city: "纽约市", dates: "6月30日 – 7月2日", area: "下曼哈顿——是你们参观自由女神、埃利斯岛、9/11 那天的理想落脚点。" },
    { city: "纽约市", dates: "7月2日 – 7月4日", area: "中城——离百老汇几步之遥，最后两晚感受时代广场的热闹。" }
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
      title: "博物馆第一天 · 航空、航天与自然科学",
      summary: "国家广场南侧的史密森尼博物馆，以你们上午11点的航空航天博物馆门票为核心。今天其它地方都免预约、随到随进。",
      blocks: [
        { time: "上午11:00", title: "✅ 国家航空航天博物馆（已订2张票）", detail: "你们的定时入场票是上午11:00——提前约10分钟到过安检。提醒：截至2026年6月底，博物馆只开放了大约一半（8个全新展厅 + 翻新的天文馆）；庆祝建馆50周年、再开5个展厅是在7月1日，刚好在你们离开之后。但仍非常值得一看。" },
        { time: "下午", title: "国家自然历史博物馆——免预约", detail: "直接进（免费、无需门票）。希望钻石、恐龙与化石展厅、圆厅大象、海洋厅。安排约2小时。" },
        { time: "傍晚", title: "国家美术馆——免预约", detail: "免费、无需门票。西馆的古典大师作品（美洲唯一一幅达·芬奇真迹），或到地下连廊和雕塑花园纳凉。看累了可跳过。" },
        { time: "夜晚", title: "夜游纪念碑", detail: "夜里纪念碑打着灯，非常美，也比白天凉快。沿二战纪念碑、林肯纪念堂、华盛顿纪念碑一带散步，然后在 Penn Quarter 吃晚饭。" }
      ],
      eat: "午餐在广场的餐车或自然历史博物馆的咖啡厅；晚餐在 Penn Quarter / 中国城。",
      tips: ["航空航天博物馆订的是上午11:00——提前约10分钟到过安检。", "上午是博物馆门票时段，之后去自然历史博物馆 + 国家美术馆，晚上看纪念碑。", "周六是博物馆最挤的一天——免预约的几家越早去越清静。"]
    },
    {
      title: "博物馆第二天 · 美国的故事",
      summary: "两个预约博物馆撑起一整天：上午11点非裔美国人历史博物馆，下午3:30大屠杀纪念馆。两家都很沉重——注意节奏。",
      blocks: [
        { time: "上午11:00", title: "✅ 非裔美国人历史与文化博物馆（NMAAHC，已订2张票）", detail: "你们的定时票是上午11:00——提前约10分钟到过安检。从地下的历史展厅开始、自下而上参观；按时间顺序、很有震撼力。安排约3小时，在馆内的 Sweet Home Café 吃午饭。" },
        { time: "约下午2:00", title: "国家美国历史博物馆——免预约（有时间的话）", detail: "就在附近，无需预约。这是今天的机动项：如果 NMAAHC 超时，就只进去看看星条旗和“美国民主”展（很应250周年的景），或者干脆跳过、在去大屠杀纪念馆前歇一歇。" },
        { time: "下午3:30", title: "✅ 大屠杀纪念馆——常设展（已订2张票）", detail: "预约的是3:30–3:45入场，地址 100 Raoul Wallenberg Pl SW（从美国历史博物馆步行约12分钟）。常设展约需2–3小时，非常震撼；最晚入场4:30，闭馆5:30。看完留点安静的时间。" },
        { time: "夜晚", title: "The Wharf 或 U Street", detail: "去 The Wharf 海滨吃海鲜放松一下（约15分钟），或去 U Street 听现场爵士、吃 Ben’s Chili Bowl。" }
      ],
      eat: "午餐在 NMAAHC 馆内的 Sweet Home Café；晚餐在 The Wharf 或 U Street。",
      tips: ["今天两个固定时间：NMAAHC 上午11:00，大屠杀纪念馆下午3:30。中间的美国历史博物馆可选——来不及就放弃。", "NMAAHC + 大屠杀纪念馆放在同一天情绪上很重——慢慢来，看完留点空白时间。", "到大屠杀纪念馆步行约12分钟——大约下午3:15前从那一带出发。"]
    },
    {
      title: "阿灵顿、乔治城与另一面的华盛顿",
      summary: "走出国家广场：上午是肃穆的历史，下午是迷人的街区。",
      blocks: [
        { time: "上午", title: "阿灵顿国家公墓", detail: "无名战士墓的换岗仪式、肯尼迪墓与长明火、从阿灵顿庄园回望华盛顿的景色。坐地铁（蓝线）可达。" },
        { time: "下午", title: "乔治城", detail: "历史悠久的鹅卵石街道、C&O 运河、海滨公园，沿 M 街和 Wisconsin 大道购物。喜欢的话来个纸杯蛋糕。" },
        { time: "夜晚", title: "收拾行李、为坐火车做准备", detail: "在白宫附近的酒店早点休息。明天的 Amtrak 订的是上午11:06——把车票下载好、重新打包、把上车穿的衣服备好。" }
      ],
      eat: "午餐在乔治城（海滨露台餐厅）；晚餐在酒店附近随意吃。",
      tips: ["阿灵顿要在坡地上走很多路——还是穿舒服的鞋。", "今晚把 Amtrak 车票存到 App 里；联合车站离酒店约10分钟。"]
    },
    {
      title: "火车 华盛顿→纽约 · 你好，纽约",
      summary: "沿东北走廊坐约3.5小时火车，抵达全新的 Moynihan 大厅，然后在下曼哈顿的落脚点安顿下来。",
      blocks: [
        { time: "上午11:06", title: "✅ Amtrak：华盛顿→纽约（已订2张票）", detail: "华盛顿联合车站上午11:06发车，约下午2:34抵达宾州车站的 Moynihan 大厅（3小时28分）。Moynihan 是有天窗的漂亮大厅——比老宾州车站好太多。离开华盛顿时坐左/西侧，能看到水景。提前约20分钟检票上车。" },
        { time: "约下午2:45", title: "✅ 入住 Fairfield Inn（下曼哈顿金融区）", detail: "从 Moynihan 坐地铁往南（A/C/E 或 1/2/3 线）约20分钟到金融区的酒店。放下行李、休整一下——这里离明天的自由女神 + 9/11 行程非常近。" },
        { time: "傍晚", title: "黄昏时的下曼哈顿", detail: "在落脚点附近轻松逛逛：Stone Street 吃晚饭、东河边的南街海港，或往炮台公园方向走、第一次远眺海港和自由女神像。（等7月2日搬到时代广场，热闹有的是。）" }
      ],
      eat: "晚餐在下城——Stone Street 的鹅卵石露台或南街海港。",
      tips: ["到之前先设置好地铁的手机/银行卡刷卡（OMNY）。", "行李随身——从 Moynihan 到金融区一趟地铁就到。", "提醒：华盛顿的“Salute to America”250周年游行和烟花在7月4日——那时你们已经离开了。纽约才是你们的压轴。"]
    },
    {
      title: "下曼哈顿：自由女神、埃利斯岛、9/11",
      summary: "海港 + 下城经典，全都从金融区落脚点步行可达。两个固定时间：上午11点渡轮、下午4点9/11博物馆。",
      blocks: [
        { time: "上午11:00", title: "✅ 自由女神像——基座参观团（已订2张票）", detail: "已订：上午11:00从炮台公园（离酒店步行很近）出发的纽约线渡轮，含登上自由女神像基座。提前约45分钟到——码头有类似机场的安检。渡轮接着开往埃利斯岛；参观感人的移民博物馆，再坐渡轮回炮台公园。" },
        { time: "约下午3:00", title: "回炮台公园 + 步行到9/11一带", detail: "游完埃利斯岛，渡轮回到炮台公园。在附近吃个迟一点的午饭，然后往北步行约12分钟到9/11遗址——路上经过华尔街铜牛和 Oculus。" },
        { time: "下午4:00", title: "✅ 9/11纪念馆与博物馆（已订2张票）", detail: "预约下午4:00。先看双子塔原址上免费的纪念水池，再凭定时票进博物馆。安排约2小时；很有冲击力、也很肃穆。旁边的 Oculus 交通枢纽值得一看。" },
        { time: "夜晚", title: "Stone Street / 海港晚餐", detail: "在历史悠久的 Stone Street 或能看东河景的南街海港吃晚饭——都离酒店几分钟。" }
      ],
      eat: "渡轮回来后在炮台公园附近吃迟午餐；晚餐在 Stone Street（鹅卵石露台）或南街海港。",
      tips: ["今天两个固定时间：渡轮上午11:00，9/11博物馆下午4:00——中间的两个岛刚好填满白天。", "上午10:15左右到炮台公园过渡轮安检。", "基座参观需要在码头单独安检——已含在你们订的团里。", "住在金融区，今天哪儿都能走着去；需要的话回酒店放东西。"]
    },
    {
      title: "中央公园、大都会博物馆与天际线",
      summary: "换酒店的一天（金融区→时代广场），中间穿插上城的人文和黄昏天际线。",
      blocks: [
        { time: "上午", title: "换酒店 → 上城去中央公园", detail: "从 Fairfield Inn（金融区）退房。最省事的做法：先把行李寄存在 Pod 时代广场（下午才能入住），再坐地铁上城去中央公园——从哥伦布圆环进，逛 Bethesda 露台、林荫道、Bow 桥、眺望台城堡。" },
        { time: "下午", title: "大都会艺术博物馆（博物馆大道）", detail: "大都会艺术博物馆世界一流——安排2–3小时。普通门票无需提前预约。附近备选：古根海姆，或穿过公园到美国自然历史博物馆。" },
        { time: "傍晚", title: "✅ 入住 Pod 时代广场 + 黄昏观景台", detail: "入住 Pod 时代广场，然后步行去附近的黄昏观景台——挑一个并提前订定时票：洛克菲勒之巅（天际线最佳、帝国大厦入镜）、Summit One Vanderbilt（镜面沉浸式）、Edge，或帝国大厦。" }
      ],
      eat: "午餐在公园附近的上东/上西区；看完观景台回中城吃。",
      tips: ["小提醒：大都会在上东区、离你们时代广场的酒店约2英里，而黄昏观景台又回到中城——所以会有一段折返。把它降到最低：中央公园（哥伦布圆环进）→ 穿过去大都会 → 再坐地铁直接回中城的观景台。", "观景台需要定时票，黄昏时段会卖光——提前订一个。", "上午把行李寄存在 Pod 时代广场，免得拖着行李逛大都会（金融区→Pod 约3.7英里，一趟地铁）。", "完全不想折返？把大都会换成美国自然历史博物馆——它就在中央公园西侧、离你们酒店更近。"]
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
      title: "美国250周年 · 独立日 · 飞回旧金山",
      summary: "赶飞机的一天。肯尼迪机场的航班晚上6:55起飞，所以上午在纽约轻松一点，下午动身去机场。",
      decision: {
        title: "✈️ 你们的7月4日是赶路的一天——烟花的取舍已成定局",
        body: "机票已订：肯尼迪机场（JFK）飞旧金山，晚上6:55起飞。赶上250周年 + 节日的人潮，你们得下午3点左右离开曼哈顿、4:30–5:00到 JFK——也就是说梅西8–10点的烟花时，你们已经在机场/在飞机上了。这个取舍订票时就定了。把白天过好：",
        options: [
          "上午：在时代广场一带感受250周年的白天氛围，然后从 Pod 时代广场退房。",
          "下午3点左右：动身去 JFK（AirTrain + 长岛铁路/地铁，或打车——节日堵车要多留时间）。",
          "更想看烟花？唯一的办法是把航班改到7月5日——否则就好好享受这趟送别，在 NBC/Peacock 上看直播。"
        ]
      },
      blocks: [
        { time: "上午", title: "纽约最后一个上午 + 250周年气氛", detail: "吃个贝果，在时代广场附近做最后的闲逛。城里到处都有 America250 的白天活动。从 Pod 时代广场退房，想轻松几个小时就把行李寄存好。" },
        { time: "约下午3:00", title: "动身去 JFK", detail: "为晚上6:55的航班，下午3点左右离开曼哈顿——7月4日 + 250周年意味着严重堵车和安检排队。从中城：坐地铁/长岛铁路接 JFK 的 AirTrain，或叫车（多留时间）。争取下午5点左右到登机口。" },
        { time: "晚上6:55", title: "✅ 肯尼迪机场飞旧金山", detail: "已订：JFK 飞 SFO，东部时间晚上6:55起飞，太平洋时间晚上10:33抵达（约6小时40分 + 3小时时差）。烟花时你们在空中——如果航班有电视/Wi-Fi，可以在 NBC/Peacock 上看。" }
      ],
      eat: "在酒店附近买点带走的；赶路这天坐下来正式吃一顿不现实。",
      tips: ["下午3点左右离开曼哈顿——节日 + 250周年 = 机场堵车和排队极其夸张。", "上午从 Pod 时代广场退房；想空着手过最后几小时就把行李寄存好。", "你们会错过现场的梅西烟花（在飞机上）——NBC/Peacock 晚上8–10点直播。"]
    }
  ],

  logistics: [
    { label: "去程航班", value: "✅ 旧金山→里根国家机场（DCA），6月26日（周五）：太平洋时间上午9:39起飞，东部时间下午5:59抵达。DCA 离酒店约15分钟。" },
    { label: "华盛顿→纽约", value: "✅ Amtrak，6月30日（周二）：华盛顿联合车站上午11:06 → 宾州车站 Moynihan 大厅约下午2:34（3小时28分）。" },
    { label: "回程航班", value: "✅ JFK→旧金山，7月4日（周六）：东部时间晚上6:55起飞，太平洋时间晚上10:33抵达。下午3点左右离开曼哈顿（节日 + 250周年人潮）。" },
    { label: "华盛顿出行", value: "从白宫附近的酒店坐地铁 + 步行。用 SmarTrip / 手机刷卡。国家广场从头走到尾都行。" },
    { label: "纽约出行", value: "地铁（OMNY 刷卡）+ 步行。前半程住金融区，后半程住时代广场。Citi Bike 很适合逛公园和海滨。" }
  ],

  budget: [
    { item: "机票（旧金山→华盛顿，纽约→旧金山）" },
    { item: "Amtrak 华盛顿→纽约" },
    { item: "住宿 – 华盛顿（4晚）" },
    { item: "住宿 – 纽约（4晚）" },
    { item: "餐饮（9天）" },
    { item: "景点/行程/演出" },
    { item: "市内交通 + 打车" }
  ],

  bookings: [
    "✅ 已完成 — 机票 旧金山→DCA（6月26日 上午9:39）",
    "✅ 已完成 — 机票 JFK→旧金山（7月4日 晚上6:55）",
    "✅ 已完成 — Amtrak 华盛顿→纽约（6月30日 上午11:06）",
    "✅ 已完成 — 凯悦嘉轩 华盛顿/白宫店（6月26–30日）",
    "✅ 已完成 — Fairfield Inn 金融区，纽约（6月30日–7月2日）",
    "✅ 已完成 — Pod 时代广场，纽约（7月2–4日）",
    "✅ 已完成 — 航空航天博物馆门票（6月27日 上午11点）",
    "✅ 已完成 — NMAAHC 门票（6月28日 上午11点）",
    "✅ 已完成 — 大屠杀纪念馆门票（6月28日 下午3:30）",
    "✅ 已完成 — 自由女神像基座参观渡轮（7月1日 上午11点，纽约出发）",
    "✅ 已完成 — 9/11纪念馆与博物馆（7月1日 下午4点）",
    "待办 — 一个观景台，黄昏定时票（洛克菲勒之巅 / Summit / Edge / 帝国大厦）",
    "待办 — 百老汇演出（订剧目，或在时代广场 TKTS 碰当日票）",
    "可选 — 国家档案馆定时票（免费/1美元）看《独立宣言》",
    "可选 — 华盛顿纪念碑定时票（recreation.gov，提前90天）",
    "可选 — 国会大厦导览（visitthecapitol.gov，免费）",
    "提示 — 大都会、MoMA、自然历史博物馆（纽约）普通入场无需提前预约，但 MoMA 和 AMNH 提前订时段会更顺。",
    "考虑 — 如果要去3个以上收费景点，可买 NYC CityPASS",
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
    "Essentials": ["证件 / REAL ID（登机用）", "🎟️ 谷歌工牌——在华盛顿和纽约的一些热门博物馆可能可以免费入场（如企业/文化福利）；带上它、在售票处问一问", "手机 + 充电器 + 充电宝", "银行卡 + 少量现金", "可重复使用的水壶", "防晒霜 + 墨镜 + 帽子"],
    "Clothes (hot & humid)": ["轻便透气的上衣", "舒服的步行鞋（提前穿松！）", "一套稍正式的衣服（百老汇/晚餐用）", "折叠伞 / 可收纳雨衣", "泳衣（酒店泳池）"],
    "Health & comfort": ["水泡贴 / 创可贴", "止痛药 + 常用药", "免洗洗手液 + 湿巾", "止汗剂（会出很多汗）", "眼罩 + 耳塞"],
    "Smart extras": ["日用双肩包", "便携风扇 / 降温毛巾", "火车上的零食", "离线地图 + Amtrak/航空公司 App", "所有预订的离线存档/打印件"]
  }
};
