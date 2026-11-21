(function () {
  "use strict";
  var C = window.SITE_CONFIG || {};
  var LANG = (document.documentElement.lang || "zh").toLowerCase().indexOf("en") === 0 ? "en" : "zh";
  var T = {
    zh: {
      copied: "已复制，去微信粘贴发送即可",
      copyFail: "复制失败，请长按手动复制",
      copyInquiry: "复制咨询单",
      copyWechat: "复制微信号",
      wechatCopied: "微信号已复制：" + C.wechat,
      inquiryTitle: "【行程咨询】",
      fName: "称呼", fContact: "联系方式", fDate: "出行时间", fPax: "人数",
      fKids: "孩子年龄", fTrip: "意向行程", fMsg: "补充说明",
      fBrand: "产品线", none: "未填写",
      askTrip: "咨询这条行程", back: "再填一份",
      sentTitle: "咨询单已生成",
      sentDesc: "复制下面的咨询单，发到主理人微信（微信同号），他本人会回复你。"
    },
    en: {
      copied: "Copied — paste it into WhatsApp or WeChat",
      copyFail: "Copy failed — please select and copy manually",
      copyInquiry: "Copy inquiry",
      copyWechat: "Copy WeChat ID",
      wechatCopied: "WeChat ID copied: " + C.wechat,
      inquiryTitle: "[Trip Inquiry]",
      fName: "Name", fContact: "Contact", fDate: "Travel dates", fPax: "Party size",
      fKids: "Kids' ages", fTrip: "Trip of interest", fMsg: "Notes",
      fBrand: "Product line", none: "—",
      askTrip: "Ask about this trip", back: "Start over",
      sentTitle: "Your inquiry is ready",
      sentDesc: "Copy the inquiry below and send it via WhatsApp or WeChat — the founder replies personally."
    }
  }[LANG];

  var TRIP_IMG = {
    "winter-camp": "trip-winter-camp.jpg",
    "spring-festival": "trip-spring-festival.jpg",
    "summer-family": "brand-naheya.jpg",
    "hulunbuir-classic": "dest-hulunbuir.jpg",
    "volcano-stars": "trip-volcano.jpg",
    "kubuqi-desert": "trip-desert.jpg",
    "hohhot-culture": "dest-hohhot.jpg"
  };
  function imgBase() { return LANG === "en" ? "../assets/img/" : "assets/img/"; }

  /* ---------- 注入配置 ---------- */
  document.querySelectorAll("[data-tel]").forEach(function (a) { a.href = "tel:" + C.phoneIntl; });
  document.querySelectorAll("[data-phone-text]").forEach(function (el) { el.textContent = LANG === "en" ? C.phoneDisplayEn : C.phoneDisplayZh; });
  document.querySelectorAll("[data-wechat-text]").forEach(function (el) { el.textContent = C.wechat; });
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + C.whatsapp; });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- 导航 ---------- */
  var nav = document.getElementById("nav");
  function onScrollNav() { nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  var burger = document.getElementById("burger");
  var mobileMenu = document.querySelector(".mobile-menu");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    burger.setAttribute("aria-label", open ? (LANG === "en" ? "Close menu" : "关闭菜单") : (LANG === "en" ? "Open menu" : "打开菜单"));
  });
  document.querySelectorAll(".mobile-menu a").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  /* 微信号一键复制（联系区卡片） */
  document.querySelectorAll("[data-copy-wechat]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var spans = btn.querySelectorAll("div span");
      var hint = spans[spans.length - 1];
      var orig = hint.textContent;
      copyText(C.wechat, T.wechatCopied);
      hint.textContent = LANG === "en" ? "Copied ✓ WeChat ID: " + C.wechat : "已复制微信号 ✓ " + C.wechat;
      hint.style.color = "var(--sprout)";
      setTimeout(function () { hint.textContent = orig; hint.style.color = ""; }, 2600);
    });
  });

  /* scrollspy */
  var spyLinks = Array.prototype.slice.call(document.querySelectorAll(".nav__links a[href^='#']"));
  var spyMap = {};
  spyLinks.forEach(function (a) { spyMap[a.getAttribute("href").slice(1)] = a; });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        spyLinks.forEach(function (a) { a.classList.remove("active"); });
        var link = spyMap[e.target.id];
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-38% 0px -55% 0px" });
  Object.keys(spyMap).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });

  /* ---------- Reveal ---------- */
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { ro.observe(el); });

  /* ---------- 计数 ---------- */
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      co.unobserve(e.target);
      var el = e.target, target = parseInt(el.getAttribute("data-count"), 10), t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1300, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(function (el) { co.observe(el); });

  /* ---------- Hero 视差 ---------- */
  var heroBg = document.querySelector(".hero__bg");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroBg && !reduced) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) heroBg.style.transform = "translateY(" + y * 0.22 + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- 行程筛选 ---------- */
  var tabs = document.querySelectorAll(".filter-tabs button");
  var cards = document.querySelectorAll(".trip-card");
  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tabs.forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (card) {
        var show = f === "all" || (card.getAttribute("data-cats") || "").split(" ").indexOf(f) > -1;
        card.classList.toggle("hide", !show);
      });
    });
  });

  /* ---------- FAQ ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-item__q");
    var a = item.querySelector(".faq-item__a");
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-item__a").style.maxHeight = "0";
        o.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- 行程详情弹窗 ---------- */
  var modal = document.getElementById("trip-modal");
  var modalPanel = modal.querySelector(".modal__panel");
  var lastFocus = null;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  function openTrip(id) {
    var data = (window.TRIPS || {})[id];
    if (!data) return;
    var t = data[LANG];
    var brandCls = id === "winter-camp" || id === "spring-festival" || id === "summer-family" ? "tag--naheya" : "tag--nomad";
    var winter = id === "winter-camp" || id === "spring-festival";
    var html =
      '<div class="modal__hero"><img src="' + imgBase() + (TRIP_IMG[id] || "hero-grassland.jpg") + '" alt="' + esc(t.name) + '">' +
      '<button class="modal__close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<div class="modal__title"><div class="m-tags"><span class="' + brandCls + '">' + esc(t.brand) + '</span>' +
      (winter ? '<span class="tag--winter">' + esc(t.tag) + '</span>' : '<span class="tag--nomad">' + esc(t.tag) + '</span>') +
      '</div><h3>' + esc(t.name) + '</h3></div></div>' +
      '<div class="modal__body">' +
      '<div class="modal__meta">' +
      '<div><span>' + (LANG === "en" ? "DURATION" : "行程天数") + '</span><b>' + esc(t.days) + '</b></div>' +
      '<div><span>' + (LANG === "en" ? "GROUP" : "团队规模") + '</span><b>' + esc(t.group) + '</b></div>' +
      '<div><span>' + (LANG === "en" ? "DEPARTURE" : "集合地") + '</span><b>' + esc(t.depart) + '</b></div>' +
      '<div><span>' + (LANG === "en" ? "SEASON" : "适合季节") + '</span><b>' + esc(t.season) + '</b></div>' +
      '</div>' +
      '<p style="font-size:14.5px;color:var(--muted)">' + esc(t.summary) + '</p>' +
      '<h4>' + (LANG === "en" ? "Day-by-day" : "每日行程") + '</h4><ul class="m-days">' +
      t.itinerary.map(function (d) {
        return '<li><b>' + esc(d.d) + '</b><div><strong>' + esc(d.title) + '</strong><p>' + esc(d.text) + '</p></div></li>';
      }).join("") + '</ul>' +
      '<h4>' + (LANG === "en" ? "Included" : "费用包含") + '</h4><ul class="m-list">' +
      t.includes.map(function (i) { return '<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' + esc(i) + '</li>'; }).join("") + '</ul>' +
      '<h4>' + (LANG === "en" ? "Good to know" : "主理人提醒") + '</h4><ul class="m-list m-list--notes">' +
      t.notes.map(function (i) { return '<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>' + esc(i) + '</li>'; }).join("") + '</ul>' +
      '<div class="modal__foot"><span class="modal__price">' + esc(t.price) + '</span>' +
      '<button class="btn btn--primary btn--sm" data-ask="' + id + '">' + T.askTrip +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></button></div></div>';
    modalPanel.innerHTML = html;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    lastFocus = document.activeElement;
    modalPanel.querySelector(".modal__close").focus();
    modalPanel.querySelector(".modal__close").addEventListener("click", closeTrip);
    modalPanel.querySelector("[data-ask]").addEventListener("click", function () {
      var tripId = this.getAttribute("data-ask");
      closeTrip();
      var sel = document.getElementById("f-trip");
      if (sel) { sel.value = tripId; sel.dispatchEvent(new Event("change")); }
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(function () { var n = document.getElementById("f-name"); if (n) n.focus({ preventScroll: true }); }, 700);
    });
    modalPanel.scrollTop = 0;
  }
  function closeTrip() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }
  modal.querySelector(".modal__backdrop").addEventListener("click", closeTrip);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && modal.classList.contains("show")) closeTrip(); });
  cards.forEach(function (card) {
    card.addEventListener("click", function () { openTrip(card.getAttribute("data-trip")); });
    card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openTrip(card.getAttribute("data-trip")); } });
  });

  /* ---------- 咨询表单 ---------- */
  var form = document.getElementById("inquiry-form");
  var success = document.getElementById("form-success");
  var brandSel = document.getElementById("f-brand");
  var kidsField = document.getElementById("kids-field");
  function syncKids() { kidsField.style.display = brandSel.value === "naheya" ? "" : "none"; }
  brandSel.addEventListener("change", syncKids);
  syncKids();
  var tripSel = document.getElementById("f-trip");
  tripSel.addEventListener("change", function () {
    var id = tripSel.value;
    if (id === "winter-camp" || id === "spring-festival" || id === "summer-family") brandSel.value = "naheya";
    else if (id) brandSel.value = "nomad";
    syncKids();
  });

  function copyText(text, okMsg) {
    var status = document.getElementById("copy-status");
    function done(ok) {
      status.textContent = ok ? okMsg : T.copyFail;
      if (!ok) {
        var box = document.getElementById("inquiry-box");
        var target = box && box.textContent === text ? box : null;
        if (target && window.getSelection) {
          var range = document.createRange();
          range.selectNodeContents(target);
          var sel = window.getSelection();
          sel.removeAllRanges(); sel.addRange(range);
        }
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(); });
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { done(document.execCommand("copy")); } catch (e) { done(false); }
      document.body.removeChild(ta);
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("f-name");
    var contact = document.getElementById("f-contact");
    var ok = true;
    [name, contact].forEach(function (el) {
      var bad = !el.value.trim();
      el.classList.toggle("err", bad);
      if (bad) ok = false;
    });
    if (!ok) { (name.value.trim() ? contact : name).focus(); return; }

    var date = document.getElementById("f-date").value.trim() || T.none;
    var pax = document.getElementById("f-pax").value || T.none;
    var kids = document.getElementById("f-kids").value.trim();
    var tripOpt = tripSel.options[tripSel.selectedIndex];
    var tripName = tripSel.value ? tripOpt.textContent : T.none;
    var brandName = brandSel.options[brandSel.selectedIndex].textContent;
    var msg = document.getElementById("f-msg").value.trim() || T.none;

    var lines = [
      T.inquiryTitle + " " + (tripSel.value.indexOf("inbound-") === 0
        ? (LANG === "en" ? "Inbound China · custom route" : "入境中国 · 定制线路")
        : (LANG === "en" ? "Naheya × Nomad Inner Mongolia" : "娜荷芽 × 游牧人 · 内蒙古")),
      T.fName + ": " + name.value.trim(),
      T.fContact + ": " + contact.value.trim(),
      T.fBrand + ": " + brandName,
      T.fTrip + ": " + tripName,
      T.fDate + ": " + date,
      T.fPax + ": " + pax
    ];
    if (brandSel.value === "naheya" && kids) lines.push(T.fKids + ": " + kids);
    lines.push(T.fMsg + ": " + msg);
    lines.push(LANG === "en" ? "(Sent from naheya-nomad website)" : "(来自娜荷芽×游牧人官网咨询表单)");
    var inquiry = lines.join("\n");

    document.getElementById("inquiry-box").textContent = inquiry;
    form.style.display = "none";
    success.classList.add("show");
    document.getElementById("copy-inquiry").onclick = function () { copyText(inquiry, T.copied); };
    var waBtn = document.getElementById("wa-send");
    if (waBtn) waBtn.href = "https://wa.me/" + C.whatsapp + "?text=" + encodeURIComponent(inquiry);
    var wcBtn = document.getElementById("copy-wechat");
    if (wcBtn) wcBtn.onclick = function () { copyText(C.wechat, T.wechatCopied); };
    document.getElementById("form-back").onclick = function () {
      success.classList.remove("show");
      form.style.display = "";
      document.getElementById("copy-status").textContent = "";
    };
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  ["f-name", "f-contact"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () { this.classList.remove("err"); });
  });

  /* ---------- 资质 / 二维码 灯箱 ---------- */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var lbCap = lb.querySelector("figcaption");
    var lbClose = lb.querySelector(".lb__close");
    var lbLast = null;
    function closeLb() {
      lb.classList.remove("show");
      document.body.style.overflow = "";
      if (lbLast) lbLast.focus();
    }
    document.querySelectorAll("[data-lb]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        lbImg.src = btn.getAttribute("data-lb");
        lbImg.alt = btn.getAttribute("data-lb-caption") || "";
        lbCap.textContent = btn.getAttribute("data-lb-caption") || "";
        lb.classList.add("show");
        document.body.style.overflow = "hidden";
        lbLast = document.activeElement;
        lbClose.focus();
      });
    });
    lb.querySelector(".lb__backdrop").addEventListener("click", closeLb);
    lbClose.addEventListener("click", closeLb);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && lb.classList.contains("show")) closeLb(); });
  }

  /* ---------- 入境游城市合集（英文站） ---------- */
  if (document.getElementById("inbound")) {
    var CITY_DATA = {
      sha: { name: "Shanghai", stay: "2–3 days", months: "Mar–May · Sep–Nov", gateway: "PVG / SHA — densest international routes in East China", pairs: ["suz", "hgh", "pek"], angle: "Use it as the soft landing: one Bund evening, one Yu Garden morning, then rail out to Jiangnan." },
      pek: { name: "Beijing", stay: "3–4 days", months: "Apr–May · Sep–Oct", gateway: "PEK / PKX — two international airports", pairs: ["xiy", "sha"], angle: "Forbidden City and Great Wall on separate days; Mutianyu is the calmer Wall section for families." },
      can: { name: "Guangzhou", stay: "2–3 days", months: "Oct–Dec · Mar–Apr", gateway: "CAN — major Southeast-Asia hub", pairs: ["szx", "hak"], angle: "Time it with the Canton Fair if you are sourcing; otherwise yum cha at 8am and the Pearl River cruise after dark." },
      szx: { name: "Shenzhen", stay: "1–2 days", months: "Year-round (business)", gateway: "SZX — plus 30 min rail from Guangzhou", pairs: ["can", "hak"], angle: "Huaqiangbei rewards a prepared list: bring model numbers and budget bands, allow a full afternoon for the stalls." },
      ctu: { name: "Chengdu", stay: "2–3 days", months: "Mar–Jun · Sep–Nov", gateway: "TFU / CTU", pairs: ["ckg", "kmg"], angle: "Panda base early morning — the animals are active before 10am; hotpot afterwards, mild broth for kids." },
      ckg: { name: "Chongqing", stay: "2–3 days", months: "Mar–May · Sep–Nov", gateway: "CKG", pairs: ["ctu", "kmg"], angle: "The night view is the point: Hongyadong lights after dusk, Liziba rail platform by day. Expect stairs — pack light shoes." },
      hgh: { name: "Hangzhou", stay: "2 days", months: "Mar–May · Sep–Nov", gateway: "HGH — 45 min rail from Shanghai", pairs: ["sha", "suz"], angle: "Walk or cycle the West Lake causeways at sunrise; Longjing village for tea before the tour buses arrive." },
      xiy: { name: "Xi'an", stay: "2–3 days", months: "Mar–May · Sep–Nov", gateway: "XIY", pairs: ["pek", "urc"], angle: "Terracotta Warriors with a licensed English guide; cycle the city wall at sunset, Muslim Quarter for dinner." },
      kmg: { name: "Kunming", stay: "1–2 days + onward", months: "Year-round spring", gateway: "KMG — rail hub to Dali / Lijiang / Shangri-La", pairs: ["ctu", "ckg"], angle: "Treat it as a climate reset: one Stone Forest morning, then the Dali rail for Erhai sunsets." },
      suz: { name: "Suzhou", stay: "1–2 days", months: "Mar–May · Sep–Nov", gateway: "No commercial airport — ~30 min rail from Shanghai Hongqiao", pairs: ["sha", "hgh"], angle: "One garden done slowly beats three rushed; Pingjiang Road after 4pm when the day-trippers leave." },
      hak: { name: "Haikou", stay: "2–3 days", months: "Nov–Mar (winter escape)", gateway: "HAK — Hainan island entry", pairs: ["can", "szx"], angle: "Qilou old street for coffee and history, volcanic park for a half-day hike; beach time is the schedule, not a gap." },
      urc: { name: "Xinjiang", stay: "5–8 days", months: "Jun–Sep (Kashgar May–Oct)", gateway: "URC / KHG — Kashgar by air or the southern rail", pairs: ["xiy"], angle: "Kashgar's Sunday bazaar is the anchor; build the loop around it, not the other way round. Distances and altitude need buffer days." }
    };
    var cityCards = Array.prototype.slice.call(document.querySelectorAll(".city-card"));
    var inTabs = Array.prototype.slice.call(document.querySelectorAll("#inbound-tabs button"));
    var loopCards = Array.prototype.slice.call(document.querySelectorAll(".loop-card"));
    var loopClear = document.getElementById("loop-clear");
    var activeLoop = null;

    function clearLoop() {
      activeLoop = null;
      loopCards.forEach(function (c) { c.classList.remove("on"); c.querySelector(".loop-card__hit").setAttribute("aria-pressed", "false"); });
      cityCards.forEach(function (c) { c.classList.remove("lit", "dim"); });
      loopClear.hidden = true;
    }
    inTabs.forEach(function (btn) {
      btn.addEventListener("click", function () {
        inTabs.forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        var f = btn.getAttribute("data-if");
        cityCards.forEach(function (card) {
          var show = f === "all" || (card.getAttribute("data-cats") || "").split(" ").indexOf(f) > -1;
          card.classList.toggle("hide", !show);
        });
        clearLoop();
      });
    });
    loopCards.forEach(function (lc) {
      lc.querySelector(".loop-card__hit").addEventListener("click", function () {
        var id = lc.getAttribute("data-loop");
        if (activeLoop === id) { clearLoop(); return; }
        activeLoop = id;
        var members = (lc.getAttribute("data-cities") || "").split(" ");
        loopCards.forEach(function (c) {
          var on = c === lc;
          c.classList.toggle("on", on);
          c.querySelector(".loop-card__hit").setAttribute("aria-pressed", on ? "true" : "false");
        });
        cityCards.forEach(function (c) {
          var hit = members.indexOf(c.getAttribute("data-city")) > -1;
          c.classList.toggle("lit", hit);
          c.classList.toggle("dim", !hit);
        });
        loopClear.hidden = false;
      });
    });
    loopClear.addEventListener("click", clearLoop);

    var cmodal = document.getElementById("city-modal");
    var cpanel = cmodal.querySelector(".modal__panel");
    var cLast = null;
    function closeCity() {
      cmodal.classList.remove("show");
      document.body.style.overflow = "";
      if (cLast) cLast.focus();
    }
    function askInbound(value) {
      closeCity();
      tripSel.value = value;
      tripSel.dispatchEvent(new Event("change"));
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setTimeout(function () { var n = document.getElementById("f-name"); if (n) n.focus({ preventScroll: true }); }, 700);
    }
    function openCity(code) {
      var d = CITY_DATA[code];
      var card = document.querySelector('.city-card[data-city="' + code + '"]');
      if (!d || !card) return;
      var zh = card.querySelector(".city-card__zh").textContent;
      var region = card.querySelector(".city-card__foot span").textContent;
      var desc = card.querySelector(".city-card__desc").textContent;
      var spots = Array.prototype.slice.call(card.querySelectorAll(".city-card__spots li")).map(function (li) { return li.textContent; });
      var html =
        '<div class="cm__head"><button class="modal__close" aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
        '<span class="cm__stamp" aria-hidden="true">' + esc(zh) + '<br>ENTRY</span>' +
        '<span class="cm__code">' + esc(code.toUpperCase()) + '</span>' +
        '<span class="cm__region">' + esc(region) + ' · Inbound China</span>' +
        '<h3>' + esc(d.name) + '<span>' + esc(zh) + '</span></h3></div>' +
        '<div class="modal__body">' +
        '<div class="modal__meta">' +
        '<div><span>SUGGESTED STAY</span><b>' + esc(d.stay) + '</b></div>' +
        '<div><span>BEST MONTHS</span><b>' + esc(d.months) + '</b></div>' +
        '<div><span>GATEWAY</span><b>' + esc(d.gateway) + '</b></div>' +
        '</div>' +
        '<p style="font-size:14.5px;color:var(--muted)">' + esc(desc) + '</p>' +
        '<h4>Signature stops</h4><ul class="m-list">' +
        spots.map(function (s) { return '<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' + esc(s) + '</li>'; }).join("") + '</ul>' +
        '<h4>Pairs well with</h4><div class="cm__pairs">' +
        d.pairs.map(function (p) { return '<button type="button" data-pair="' + p + '">' + esc(CITY_DATA[p].name) + ' →</button>'; }).join("") + '</div>' +
        '<h4>Founder\'s angle</h4><p style="font-size:13.5px;color:var(--muted);line-height:1.7">' + esc(d.angle) + '</p>' +
        '<div class="modal__foot"><span class="modal__price">Quoted per party after route confirmation</span>' +
        '<button class="btn btn--primary btn--sm" data-ask-city="' + code + '">Customize this city into my route' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></button></div></div>';
      cpanel.innerHTML = html;
      if (!cmodal.classList.contains("show")) {
        cmodal.classList.add("show");
        document.body.style.overflow = "hidden";
        cLast = document.activeElement;
      }
      cpanel.scrollTop = 0;
      cpanel.querySelector(".modal__close").focus();
      cpanel.querySelector(".modal__close").addEventListener("click", closeCity);
      cpanel.querySelector("[data-ask-city]").addEventListener("click", function () { askInbound("inbound-" + this.getAttribute("data-ask-city")); });
      cpanel.querySelectorAll("[data-pair]").forEach(function (b) {
        b.addEventListener("click", function () { openCity(this.getAttribute("data-pair")); });
      });
    }
    cityCards.forEach(function (card) {
      card.addEventListener("click", function () { openCity(card.getAttribute("data-city")); });
      card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCity(card.getAttribute("data-city")); } });
    });
    document.querySelectorAll("[data-ask-loop]").forEach(function (b) {
      b.addEventListener("click", function () { askInbound("inbound-loop-" + this.getAttribute("data-ask-loop")); });
    });
    cmodal.querySelector(".modal__backdrop").addEventListener("click", closeCity);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && cmodal.classList.contains("show")) closeCity(); });
  }
})();