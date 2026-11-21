/* 行程详情数据：卡片静态写在 HTML 里（利于收录），点开详情用这份数据渲染 */
window.TRIPS = {
  "winter-camp": {
    zh: {
      name: "寒假草原独立营 · 5天4晚",
      brand: "娜荷芽亲子游", tag: "冬季限定 · 孩子单飞",
      days: "5天4晚", group: "8–14岁 · 10人小班", depart: "呼和浩特集合", season: "2027年1月中下旬（寒假窗口一）",
      price: "营期报价 · 询主理人",
      summary: "孩子第一次离开父母，也能把内蒙古的冬天过成一堂自然课。",
      itinerary: [
        { d: "D1", title: "呼和浩特集合 · 开营", text: "接机接站，入住营地酒店，开营仪式与安全课，晚上团队破冰。" },
        { d: "D2", title: "内蒙古博物院 · 草原文明课", text: "从匈奴到蒙古族的草原文明脉络，孩子领任务卡做小小讲解员。" },
        { d: "D3", title: "乌兰察布 · 冰雪火山", text: "乌兰哈达火山群雪地徒步，观察火山锥与玄武岩，晚上营地星空课（视天气）。" },
        { d: "D4", title: "雪原那达慕 · 蒙古包营地", text: "雪地骑马（牵引）、骆驼爬犁、射箭，入住保暖蒙古包，学熬奶茶、写蒙古文名字。" },
        { d: "D5", title: "结营 · 返程", text: "结营展示与颁证，送机送站，家长群全程直播照片。" }
      ],
      includes: ["全程用车与接送站", "4晚住宿（酒店+保暖蒙古包）", "营期餐食", "研学导师与生活老师（师生比不低于1:5）", "活动物料与保险", "每日照片反馈"],
      notes: ["师生比不低于1:5，夜间查房", "全程正规营运车辆，旅行社责任险+意外险", "家长可通过微信群实时看到孩子动态", "2027春节为2月6日，本营安排在1月中下旬独立窗口，不与春节档冲突"]
    },
    en: {
      name: "Winter Grassland Independence Camp · 5 Days",
      brand: "Naheya Family Journeys", tag: "Winter only · Kids without parents",
      days: "5 days / 4 nights", group: "Ages 8–14 · max 10 kids", depart: "Meet in Hohhot", season: "Mid-to-late January 2027 (winter break window)",
      price: "Camp pricing on request",
      summary: "A child's first trip without parents — Inner Mongolia's winter turned into a nature classroom.",
      itinerary: [
        { d: "D1", title: "Arrive Hohhot · Opening", text: "Airport/station pickup, check-in, opening ceremony and safety briefing, ice-breaker games." },
        { d: "D2", title: "Inner Mongolia Museum · Steppe Civilizations", text: "From Xiongnu to Mongol history; kids complete task cards and act as junior guides." },
        { d: "D3", title: "Ulanqab · Volcanoes in Snow", text: "Snow hike in the Ulanhada volcanic field, observe cinder cones and basalt; stargazing session if skies allow." },
        { d: "D4", title: "Snow Naadam · Yurt Camp", text: "Led horse riding, camel sled, archery; stay in heated yurts, learn milk tea and Mongolian script." },
        { d: "D5", title: "Closing · Departure", text: "Final showcase and certificates, airport/station transfer. Daily photos shared with parents." }
      ],
      includes: ["All transport and transfers", "4 nights (hotel + heated yurt)", "All camp meals", "Study mentors and care staff (ratio ≥ 1:5)", "Materials and insurance", "Daily photo updates"],
      notes: ["Staff-to-child ratio at least 1:5, nightly room checks", "Licensed tourist vehicles, agency liability + accident insurance", "Parents follow the trip live in a WeChat group", "Scheduled in the clean mid-January window, separate from Chinese New Year dates"]
    }
  },
  "spring-festival": {
    zh: {
      name: "春节三代同游营 · 6天5晚",
      brand: "娜荷芽亲子游", tag: "冬季限定 · 全年客单天花板",
      days: "6天5晚", group: "三代同堂 · 一家一团", depart: "呼和浩特集合", season: "2027年2月5日–2月13日（春节档）",
      price: "一家一价 · 询主理人",
      summary: "把年夜饭搬进蒙古包：老人有暖炕，孩子有雪原，中间一代终于不用做攻略。",
      itinerary: [
        { d: "D1", title: "呼和浩特集合 · 接机", text: "专车接机，入住酒店，晚上塞上老街年味散步。" },
        { d: "D2", title: "大召寺 · 内蒙古博物院", text: "上午大召寺祈福，下午博物院草原文明展，节奏放慢，老人孩子都跟得上。" },
        { d: "D3", title: "雪原蒙古包 · 年夜饭", text: "前往保暖蒙古包营地，写春联、剪窗花，晚上蒙古包里的年夜饭与篝火。" },
        { d: "D4", title: "冰雪那达慕", text: "雪地赛马观赏、骆驼爬犁、射箭，孩子骑马有教练牵引，老人可在暖房观礼。" },
        { d: "D5", title: "乌兰哈达火山 · 温泉休整", text: "火山群轻徒步（可选），下午温泉酒店休整，晚上家庭合影。" },
        { d: "D6", title: "返程", text: "睡到自然醒，专车送机送站。" }
      ],
      includes: ["一家一团专车专导", "5晚住宿（酒店+保暖蒙古包+温泉）", "年夜饭与营期餐食", "全家活动物料", "旅行社责任险+意外险", "全程跟拍（可选）"],
      notes: ["春节档房源紧张，建议提前30天以上锁定", "行程按老人膝盖和孩子体力设计，车程单日不超过3小时", "2027春节为2月6日，本营覆盖除夕前后完整假期"]
    },
    en: {
      name: "Chinese New Year Three-Generation Camp · 6 Days",
      brand: "Naheya Family Journeys", tag: "Winter only · One family, one team",
      days: "6 days / 5 nights", group: "Grandparents + parents + kids", depart: "Meet in Hohhot", season: "Feb 5–13, 2027 (Chinese New Year window)",
      price: "Per-family pricing on request",
      summary: "New Year's Eve dinner inside a yurt: warm beds for grandparents, snowfields for kids, and zero planning for the middle generation.",
      itinerary: [
        { d: "D1", title: "Arrive Hohhot", text: "Private pickup, hotel check-in, evening stroll through Saishang Old Street's festive lanterns." },
        { d: "D2", title: "Dazhao Temple · Museum", text: "Morning temple visit, afternoon Inner Mongolia Museum; slow pace for all ages." },
        { d: "D3", title: "Snow Yurt Camp · NYE Dinner", text: "Couplet writing and paper cutting, then a Mongolian New Year's Eve dinner and bonfire in a heated yurt." },
        { d: "D4", title: "Ice & Snow Naadam", text: "Horse racing on snow, camel sleds, archery; kids ride with instructors, elders watch from a warm lodge." },
        { d: "D5", title: "Volcanoes · Hot Spring", text: "Optional light hike in the Ulanhada volcanic field, afternoon hot-spring hotel, family photo session." },
        { d: "D6", title: "Departure", text: "Sleep in, private transfer to airport or station." }
      ],
      includes: ["Private vehicle and guide for your family only", "5 nights (hotel + heated yurt + hot spring)", "NYE dinner and camp meals", "Activity materials", "Agency liability + accident insurance", "Optional family photographer"],
      notes: ["CNY rooms are scarce — book 30+ days ahead", "Daily driving kept under 3 hours for elders and kids", "Covers the full holiday around CNY (Feb 6, 2027)"]
    }
  },
  "summer-family": {
    zh: {
      name: "暑期草原研学营 · 6天5晚",
      brand: "娜荷芽亲子游", tag: "亲子经典 · 呼伦贝尔",
      days: "6天5晚", group: "5–12岁孩子家庭 · 6组家庭小团", depart: "海拉尔集合", season: "6月中–9月中（7–8月最绿）",
      price: "营期报价 · 询主理人",
      summary: "莫日格勒河边的自然课：孩子认植物、数星星、学骑马，大人终于能放空。",
      itinerary: [
        { d: "D1", title: "海拉尔集合", text: "接机接站，开营，晚上草原行前课。" },
        { d: "D2", title: "莫日格勒河 · 草原腹地", text: "天下第一曲水，草原植物课与昆虫观察，傍晚入住草原营地。" },
        { d: "D3", title: "额尔古纳湿地 · 白桦林", text: "湿地观鸟与生态课，白桦林自然笔记，晚上住恩和俄罗斯民族乡。" },
        { d: "D4", title: "恩和 · 室韦 · 界河", text: "木刻楞民居探访，沿中俄界河骑行（亲子双人车），傍晚临江屯日落。" },
        { d: "D5", title: "黑山头骑马 · 篝火", text: "马术课（教练一对一牵引），草原运动会，晚上篝火与星空课。" },
        { d: "D6", title: "满洲里 · 返程", text: "国门与套娃广场外观，送海拉尔机场或火车站。" }
      ],
      includes: ["全程用车与接送站", "5晚住宿（酒店+木刻楞+草原营地）", "营期餐食", "研学导师+马术教练", "自然课物料与保险", "结营证书与成长记录"],
      notes: ["6组家庭封顶，不拼大团", "骑马全程教练牵引，配头盔护具", "7–8月为旺季，建议提前15–30天报名", "12月中开启次年暑期早鸟，可提前锁定名额"]
    },
    en: {
      name: "Summer Grassland Study Camp · 6 Days",
      brand: "Naheya Family Journeys", tag: "Family classic · Hulunbuir",
      days: "6 days / 5 nights", group: "Families with kids 5–12 · max 6 families", depart: "Meet in Hailar", season: "Mid-June to mid-September (greenest Jul–Aug)",
      price: "Camp pricing on request",
      summary: "Nature school by the Morigele River: kids learn plants, stars and riding — parents finally switch off.",
      itinerary: [
        { d: "D1", title: "Arrive Hailar", text: "Pickup, opening circle, evening grassland briefing." },
        { d: "D2", title: "Morigele River · Deep Steppe", text: "The 'first winding river under heaven'; botany and insect fieldwork; night in a grassland camp." },
        { d: "D3", title: "Ergun Wetland · Birch Forest", text: "Birdwatching and ecology session, nature journaling in birch woods; overnight in Enhe Russian ethnic village." },
        { d: "D4", title: "Enhe · Shiwei · Border River", text: "Visit traditional wooden houses, tandem cycling along the China–Russia border river, sunset at Linjiang." },
        { d: "D5", title: "Heishantou Riding · Bonfire", text: "One-on-one instructed horse riding, grassland games night, bonfire and astronomy session." },
        { d: "D6", title: "Manzhouli · Departure", text: "National Gate and Matryoshka Square views, transfer to Hailar airport/station." }
      ],
      includes: ["All transport and transfers", "5 nights (hotel + wooden lodge + camp)", "Camp meals", "Study mentors + riding instructors", "Fieldwork materials and insurance", "Closing certificate and growth journal"],
      notes: ["Capped at 6 families — never a big bus group", "All rides instructor-led with helmets", "Peak Jul–Aug: register 15–30 days ahead", "Early-bird for next summer opens mid-December"]
    }
  },
  "hulunbuir-classic": {
    zh: {
      name: "呼伦贝尔经典环线 · 5天4晚",
      brand: "游牧人定制旅行", tag: "定制经典 · 不走回头路",
      days: "5天4晚", group: "2–6人小包团 · 1人也可定制", depart: "海拉尔进出", season: "6–9月草原季 / 9月下旬秋色",
      price: "定制报价 · 按人数核算",
      summary: "草原、湿地、白桦林、边境村落、满洲里，一次走全，节奏由你定。",
      itinerary: [
        { d: "D1", title: "海拉尔 → 莫日格勒河", text: "接机后直奔草原腹地，沿曲水走走停停，傍晚入住草原营地看日落。" },
        { d: "D2", title: "额尔古纳湿地 → 恩和", text: "上午亚洲第一湿地，下午白桦林，晚上住俄罗斯民族乡木刻楞。" },
        { d: "D3", title: "室韦 → 临江屯", text: "沿中俄界河一路向北，老鹰嘴看日落，晚上临江屯安静住下。" },
        { d: "D4", title: "黑山头骑马 → 满洲里", text: "上午马场骑马（可选），下午赴满洲里，晚上套娃广场夜景。" },
        { d: "D5", title: "国门 → 返程", text: "国门与猛犸公园（可选），送海拉尔机场或火车站。" }
      ],
      includes: ["专车专导（SUV/商务可选）", "4晚住宿可按预算调档", "油费过路费停车费全含", "行程单+费用清单出发前确认", "旅行社责任险+意外险"],
      notes: ["纯玩无购物，不推自费，写进行程单", "想多待就多待，行程每天可微调", "9月下旬白桦林转黄，是摄影最佳窗口"]
    },
    en: {
      name: "Hulunbuir Classic Loop · 5 Days",
      brand: "Nomad Bespoke Travel", tag: "Bespoke classic · No backtracking",
      days: "5 days / 4 nights", group: "Private 2–6 guests · solo travelers welcome", depart: "Start & end Hailar", season: "Jun–Sep grassland / late-Sep autumn colors",
      price: "Tailor-made quote per party size",
      summary: "Steppe, wetland, birch forest, border villages and Manzhouli in one loop — at your pace.",
      itinerary: [
        { d: "D1", title: "Hailar → Morigele River", text: "Pickup and straight into the deep steppe; stop-and-go along the winding river, sunset at a grassland camp." },
        { d: "D2", title: "Ergun Wetland → Enhe", text: "Asia's largest wetland in the morning, birch forest in the afternoon, overnight in a wooden lodge in Enhe." },
        { d: "D3", title: "Shiwei → Linjiang", text: "North along the China–Russia border river; sunset at Eagle's Beak cliff, quiet night in Linjiang village." },
        { d: "D4", title: "Heishantou Riding → Manzhouli", text: "Optional morning ride, afternoon drive to Manzhouli, Matryoshka Square lights at night." },
        { d: "D5", title: "National Gate → Departure", text: "Optional National Gate and Mammoth Park, transfer to Hailar airport/station." }
      ],
      includes: ["Private vehicle and guide (SUV or van)", "4 nights, hotel tier adjustable to budget", "Fuel, tolls and parking included", "Written itinerary + cost sheet before departure", "Agency liability + accident insurance"],
      notes: ["Zero shopping stops, zero forced extras — in writing", "The plan flexes daily; linger where you love", "Late September turns the birch forest gold — best for photography"]
    }
  },
  "volcano-stars": {
    zh: {
      name: "乌兰哈达火山星空 · 2天1晚",
      brand: "游牧人定制旅行", tag: "小众 · 周末可走",
      days: "2天1晚", group: "2–6人 · 摄影爱好者优先", depart: "呼和浩特出发", season: "4–10月（夏季银河最清晰）",
      price: "定制报价 · 询主理人",
      summary: "草原上突兀立起的火山锥，白天像火星，晚上头顶是银河。",
      itinerary: [
        { d: "D1", title: "呼和浩特 → 火山群", text: "上午出发，下午登3号/5号火山锥，观察玄武岩与火山弹，日落机位拍摄，晚上营地星空课与银河摄影（视天气）。" },
        { d: "D2", title: "辉腾锡勒草原 → 返程", text: "清晨火山日出（可选），上午辉腾锡勒草原与风车阵，下午返呼和浩特。" }
      ],
      includes: ["往返专车", "1晚营地或酒店", "星空摄影指导（可选）", "保险"],
      notes: ["星空视天气与月相安排，出发前会确认", "火山锥徒步约40分钟，穿防滑鞋", "可与呼和浩特市区行程拼成3–4天"]
    },
    en: {
      name: "Ulanhada Volcanoes & Milky Way · 2 Days",
      brand: "Nomad Bespoke Travel", tag: "Offbeat · Weekend-friendly",
      days: "2 days / 1 night", group: "2–6 guests · photographers welcome", depart: "From Hohhot", season: "Apr–Oct (clearest Milky Way in summer)",
      price: "Tailor-made quote on request",
      summary: "Cinder cones rising abruptly from the steppe — Mars by day, the Milky Way overhead by night.",
      itinerary: [
        { d: "D1", title: "Hohhot → Volcanic Field", text: "Morning drive, afternoon climb of cones No.3/No.5, basalt and volcanic bomb observation, sunset shoot, night astronomy and astrophotography session (weather permitting)." },
        { d: "D2", title: "Huitengxile Grassland → Return", text: "Optional sunrise at the cones, morning on Huitengxile grassland with its wind-turbine array, afternoon return to Hohhot." }
      ],
      includes: ["Round-trip private vehicle", "1 night camp or hotel", "Optional astrophotography guidance", "Insurance"],
      notes: ["Stargazing depends on weather and moon phase — confirmed before departure", "Cone hike ~40 minutes; grippy shoes needed", "Combines with Hohhot city days into a 3–4 day trip"]
    }
  },
  "kubuqi-desert": {
    zh: {
      name: "库布齐沙漠越野 · 1日",
      brand: "游牧人定制旅行", tag: "沙漠 · 一天玩透",
      days: "1日", group: "2–8人", depart: "呼和浩特/鄂尔多斯出发", season: "春秋最佳（夏季避开正午）",
      price: "定制报价 · 询主理人",
      summary: "冲沙、骑骆驼、滑沙，日落时分沙丘的金线最出片，晚上回城吃火锅。",
      itinerary: [
        { d: "上午", title: "出发 → 沙漠腹地", text: "专车赴库布齐，换乘越野车冲沙（专业司机），沙丘顶端看沙海曲线。" },
        { d: "下午", title: "骆驼 · 滑沙", text: "骆驼队穿越（约40分钟），滑沙与沙地摩托（可选），日落机位拍摄。" },
        { d: "晚上", title: "返程", text: "回呼和浩特或鄂尔多斯，晚餐推荐本地火锅与焖面。" }
      ],
      includes: ["往返专车", "越野车冲沙（专业司机）", "骆驼骑行与滑沙", "保险"],
      notes: ["冲沙由持证越野司机驾驶，不自驾", "防晒防沙装备清单出发前发你", "亲子家庭可选温和路线，孩子身高1.2米以上可骑骆驼"]
    },
    en: {
      name: "Kubuqi Desert Off-Road Day Trip",
      brand: "Nomad Bespoke Travel", tag: "Desert · One full day",
      days: "1 day", group: "2–8 guests", depart: "From Hohhot or Ordos", season: "Spring & autumn best (avoid midday in summer)",
      price: "Tailor-made quote on request",
      summary: "Dune bashing, camel caravan, sand sliding — golden ridge lines at sunset, hotpot back in town.",
      itinerary: [
        { d: "AM", title: "Drive → Deep Desert", text: "Private transfer to Kubuqi, switch to a professional-driven 4x4 for dune bashing, stop at the crest for the sand-sea panorama." },
        { d: "PM", title: "Camels · Sand Sliding", text: "~40-minute camel caravan, sand sliding and optional quad bikes, sunset photo stop on the ridge." },
        { d: "EVE", title: "Return", text: "Back to Hohhot or Ordos; local hotpot and braised-noodle dinner recommendations." }
      ],
      includes: ["Round-trip private vehicle", "Professional-driven 4x4 dune bashing", "Camel ride and sand sliding", "Insurance"],
      notes: ["Dune driving by licensed off-road drivers only — never self-drive", "Sun/sand gear checklist sent before departure", "Gentle route for families; kids over 1.2 m can ride camels"]
    }
  },
  "hohhot-culture": {
    zh: {
      name: "呼和浩特文化美食 · 3天2晚",
      brand: "游牧人定制旅行", tag: "城市 · 第一次来首选",
      days: "3天2晚", group: "1–6人", depart: "呼和浩特进出", season: "全年（冬季有冰雪消费券加成）",
      price: "定制报价 · 询主理人",
      summary: "塞外青城的寺庙、老街与烧麦：第一天就吃明白、看明白。",
      itinerary: [
        { d: "D1", title: "大召寺 · 塞上老街", text: "上午大召寺与五塔寺，下午塞上老街，晚上老街夜市与羊杂碎。" },
        { d: "D2", title: "内蒙古博物院 · 昭君博物院", text: "上午博物院草原文明展（主理人讲解），下午昭君博物院，晚上手把肉与奶茶。" },
        { d: "D3", title: "烧麦早餐 · 返程", text: "清晨本地人排队的烧麦馆（一两八个，配砖茶），自由采购伴手礼，送机送站。" }
      ],
      includes: ["市区专车", "2晚酒店", "主理人或资深向导讲解", "美食清单与代订（不加价）", "保险"],
      notes: ["烧麦按『两』点，一两八个，别按个点", "博物院周一闭馆，行程会避开", "可加一天乌兰哈达火山或库布齐沙漠"]
    },
    en: {
      name: "Hohhot Culture & Food · 3 Days",
      brand: "Nomad Bespoke Travel", tag: "City · Best first visit",
      days: "3 days / 2 nights", group: "1–6 guests", depart: "Start & end Hohhot", season: "Year-round (winter tourism vouchers apply)",
      price: "Tailor-made quote on request",
      summary: "Temples, old streets and shaomai in the 'Blue City beyond the Great Wall' — eat and understand it from day one.",
      itinerary: [
        { d: "D1", title: "Dazhao Temple · Old Street", text: "Morning Dazhao and Five-Pagoda temples, afternoon Saishang Old Street, night market and lamb offal soup." },
        { d: "D2", title: "Inner Mongolia Museum · Zhaojun Museum", text: "Steppe-civilization exhibits with founder-level commentary, Zhaojun Museum in the afternoon, hand-grabbed mutton and milk tea for dinner." },
        { d: "D3", title: "Shaomai Breakfast · Departure", text: "Early shaomai at the shop locals queue for (order by 'liang' — eight pieces, with brick tea), souvenir time, airport/station transfer." }
      ],
      includes: ["City private vehicle", "2 nights hotel", "Founder or senior guide commentary", "Food list and reservations at cost", "Insurance"],
      notes: ["Shaomai is ordered by 'liang' (8 pieces), not by piece", "Museum closed Mondays — the plan avoids it", "Add a day for Ulanhada volcanoes or Kubuqi desert"]
    }
  }
};