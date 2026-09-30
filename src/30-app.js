/* ============ App ============ */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const strip = (html) => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; };
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const REDUCE = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const norm = (s) => String(s).normalize("NFC").toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s*'\s*/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?;,:]+$/, "").trim();
  const fold = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe");

  const ICON = {
    say: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5 10 17 19 7"/></svg>'
  };

  /* ---------- per-viewer storage ---------- */
  const PREFIX = "ligneB1:";
  const STORE_KEYS = ["progress", "seen", "last", "checklist", "lang"];
  let storageOk = true;
  const memory = {};
  const store = {
    get(k, d) {
      try { const v = localStorage.getItem(PREFIX + k); return v ? JSON.parse(v) : (k in memory ? memory[k] : d); }
      catch (e) { storageOk = false; return k in memory ? memory[k] : d; }
    },
    set(k, v) {
      memory[k] = v;
      try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { storageOk = false; }
    },
    remove(k) { delete memory[k]; try { localStorage.removeItem(PREFIX + k); } catch (e) { storageOk = false; } }
  };
  const obj = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v : {});
  let progress = obj(store.get("progress", {}));  /* "lessonId:gameIndex" -> best % */
  let seen = obj(store.get("seen", {}));          /* lessonId -> { theory, vocab, examples, links } */
  let last = obj(store.get("last", {}));          /* { id, sec, y, at } */

  /* ---------- language ---------- */
  let LANG = store.get("lang", null);
  if (LANG !== "es" && LANG !== "fr") LANG = "es";
  function R(v) {
    if (Array.isArray(v)) return v.map(R);
    if (v && typeof v === "object") {
      if (v.__bi) return v[LANG];
      const o = {};
      for (const k in v) o[k] = R(v[k]);
      return o;
    }
    return v;
  }
  function t(key, vars) {
    let s = (UI[LANG] && UI[LANG][key] !== undefined) ? UI[LANG][key] : UI.es[key];
    if (s === undefined) return key;
    if (vars && typeof s === "string") s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    return s;
  }
  function applyStaticI18n() {
    document.documentElement.lang = LANG;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (!b || b.dataset.lang === LANG) return;
    LANG = b.dataset.lang;
    store.set("lang", LANG);
    const y = window.scrollY;
    applyStaticI18n();
    renderSide();
    route({ keepScroll: y });
  });

  /* ---------- course structure & progress ---------- */
  const ORDER = MODULES.reduce((a, m) => a.concat(m.lessons), []);
  const MOD_OF = {};
  MODULES.forEach((m) => m.lessons.forEach((id) => { MOD_OF[id] = m; }));
  const SECTIONS = ["theory", "vocab", "examples", "links"];

  const gamesPassed = (id) => LESSONS[id].games.filter((g, i) => (progress[id + ":" + i] || 0) >= 70).length;
  const sectionsSeen = (id) => SECTIONS.filter((s) => seen[id] && seen[id][s]).length;
  function lessonPct(id) {
    const n = LESSONS[id].games.length;
    return Math.round(((sectionsSeen(id) + gamesPassed(id)) / (SECTIONS.length + n)) * 100);
  }
  function lessonStatus(id) {
    const p = lessonPct(id);
    const anyGame = LESSONS[id].games.some((g, i) => typeof progress[id + ":" + i] === "number");
    return p >= 100 ? "done" : (p > 0 || anyGame) ? "started" : "";
  }
  const completedCount = () => ORDER.filter((id) => lessonStatus(id) === "done").length;
  const overallPct = () => Math.round(ORDER.reduce((a, id) => a + lessonPct(id), 0) / ORDER.length);

  function markSeen(id, sec) {
    if (!LESSONS[id] || (seen[id] && seen[id][sec])) return;
    const before = lessonStatus(id);
    seen[id] = Object.assign({}, seen[id], { [sec]: 1 });
    store.set("seen", seen);
    const chip = $(`.chips-nav [data-target="s-${sec}"]`);
    if (chip) chip.classList.add("seen");
    refreshLessonStatus(id);
    updateProgressUI();
    if (before !== "done" && lessonStatus(id) === "done") { toast(t("stationDone", { n: LESSONS[id].name })); confetti(); }
  }
  let lastSaveT = 0;
  function saveLast(id, sec) {
    const now = Date.now();
    if (now - lastSaveT < 400 && last.id === id && last.sec === sec) return;
    lastSaveT = now;
    last = { id, sec: sec || "", y: Math.round(window.scrollY), at: now };
    store.set("last", last);
  }

  /* ---------- audio: recorded clips first, speech synthesis as fallback ---------- */
  const TTS = "speechSynthesis" in window && typeof window.SpeechSynthesisUtterance === "function";
  let frVoice = null;
  function pickVoice() {
    try {
      const vs = speechSynthesis.getVoices();
      frVoice = vs.find((v) => /^fr[-_]FR/i.test(v.lang)) || vs.find((v) => /^fr/i.test(v.lang)) || null;
    } catch (e) { frVoice = null; }
  }
  if (TTS) { pickVoice(); try { speechSynthesis.addEventListener("voiceschanged", pickVoice); } catch (e) { /* old engines */ } }

  const Sound = (function () {
    const HAS_MAP = typeof AUDIO_MAP === "object" && typeof AUDIO_SPRITES === "object";
    const AC = window.AudioContext || window.webkitAudioContext;
    let ctx = null, current = null, currentBtn = null, timer = null, seq = 0;
    const buffers = {}, elements = {};
    const url = (name) => "audio/" + name + ".mp4";
    function ensureCtx() { if (!ctx && AC) { try { ctx = new AC(); } catch (e) { ctx = null; } } return ctx; }
    function load(name) {
      if (buffers[name]) return buffers[name];
      const c = ensureCtx();
      if (!c || !window.fetch) { buffers[name] = Promise.resolve(null); return buffers[name]; }
      buffers[name] = fetch(url(name))
        .then((r) => { if (!r.ok) throw new Error("http " + r.status); return r.arrayBuffer(); })
        .then((ab) => new Promise((res, rej) => { const p = c.decodeAudioData(ab, res, rej); if (p && p.then) p.then(res, rej); }))
        .catch(() => null);
      return buffers[name];
    }
    function lookup(text) {
      if (!HAS_MAP) return null;
      const m = AUDIO_MAP[speakText(text)];
      return m ? { name: AUDIO_SPRITES[m[0]], st: m[1] / 1000, du: m[2] / 1000 } : null;
    }
    function stop() {
      seq++;
      clearTimeout(timer);
      if (current) { try { if (current.stop) current.stop(); else current.pause(); } catch (e) { /* already stopped */ } current = null; }
      if (currentBtn) { currentBtn.classList.remove("speaking"); currentBtn = null; }
      if (TTS) { try { speechSynthesis.cancel(); } catch (e) { /* ignore */ } }
    }
    function busy(btn, ms, onEnd) {
      if (btn) { currentBtn = btn; btn.classList.add("speaking"); }
      timer = setTimeout(() => { if (onEnd) onEnd(); if (currentBtn) currentBtn.classList.remove("speaking"); currentBtn = null; current = null; }, ms);
    }
    function tts(text, btn) {
      if (!TTS) return false;
      try {
        const u = new SpeechSynthesisUtterance(speakText(text));
        u.lang = "fr-FR"; if (frVoice) u.voice = frVoice; u.rate = 0.9;
        if (btn) { currentBtn = btn; btn.classList.add("speaking"); u.onend = u.onerror = () => btn.classList.remove("speaking"); }
        speechSynthesis.speak(u);
        return true;
      } catch (e) { return false; }
    }
    function viaElement(c, btn, text, my) {
      let a = elements[c.name];
      if (!a) { a = new Audio(url(c.name)); a.preload = "auto"; elements[c.name] = a; }
      const go = () => {
        if (my !== seq) return;
        try { a.currentTime = Math.max(0, c.st - 0.05); } catch (e) { /* not seekable yet */ }
        const p = a.play();
        current = a;
        busy(btn, (c.du + 0.2) * 1000, () => { try { a.pause(); } catch (e) { /* ignore */ } });
        if (p && p.catch) p.catch(() => { if (my === seq) { stop(); tts(text, btn); } });
      };
      if (a.readyState >= 1) go();
      else { a.addEventListener("loadedmetadata", go, { once: true }); a.addEventListener("error", () => { if (my === seq) tts(text, btn); }, { once: true }); a.load(); }
    }
    function play(text, btn) {
      stop();
      const my = seq;
      const c = lookup(text);
      if (!c) { tts(text, btn); return; }
      const ac = ensureCtx();
      if (ac && ac.state === "suspended") { try { ac.resume(); } catch (e) { /* ignore */ } }
      if (btn) btn.classList.add("speaking");
      load(c.name).then((buf) => {
        if (my !== seq) return;
        if (buf && ctx) {
          const s = ctx.createBufferSource();
          s.buffer = buf; s.connect(ctx.destination);
          s.start(0, Math.max(0, c.st - 0.03), c.du + 0.1);
          current = s;
          busy(btn, (c.du + 0.15) * 1000);
        } else viaElement(c, btn, text, my);
      });
    }
    function preload(name) { if (HAS_MAP && AUDIO_SPRITES.indexOf(name) >= 0) load(name); }
    const has = (text) => !!lookup(text);
    const available = () => HAS_MAP || TTS;
    return { play, stop, preload, has, available };
  })();
  if (!Sound.available()) document.documentElement.classList.add("no-tts");

  const sayBtn = (text) => `<button class="say" type="button" data-say="${esc(text)}" aria-label="${esc(t("listen"))}: ${esc(strip(text))}">${ICON.say}</button>`;
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) { e.preventDefault(); e.stopPropagation(); Sound.play(b.getAttribute("data-say"), b); }
  });

  /* ---------- toast & confetti ---------- */
  let toastT;
  function toast(msg) {
    let el = $(".toast");
    if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
    clearTimeout(toastT);
    toastT = setTimeout(() => el.remove(), 3200);
  }
  function confetti() {
    if (REDUCE) return;
    const c = $("#confetti");
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const W = innerWidth, H = innerHeight, dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = W * dpr; c.height = H * dpr; ctx.scale(dpr, dpr);
    const cs = getComputedStyle(document.documentElement);
    const cols = ["--bleu", "--accent", "--rouge", "--or", "--line"].map((v) => cs.getPropertyValue(v).trim() || "#2C57CF");
    const P = Array.from({ length: 160 }, () => ({
      x: W / 2 + (Math.random() - 0.5) * 200, y: H * 0.42,
      vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 5,
      r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.3,
      w: 6 + Math.random() * 6, h: 9 + Math.random() * 9, c: pick(cols)
    }));
    const t0 = performance.now();
    (function frame(tm) {
      const el = tm - t0;
      ctx.clearRect(0, 0, W, H);
      P.forEach((p) => {
        p.vy += 0.33; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, 1 - el / 2800);
        ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)) + 1);
        ctx.restore();
      });
      if (el < 2800) requestAnimationFrame(frame); else ctx.clearRect(0, 0, W, H);
    })(t0);
  }

  /* ---------- sidebar ---------- */
  function renderSide() {
    let html = "";
    let n = 0;
    MODULES.forEach((m) => {
      html += `<div class="route-group"><h4><span class="mod">${m.id}</span>${esc(m.name)}</h4><ol>`;
      m.lessons.forEach((id) => {
        n++;
        const L = LESSONS[id];
        html += `<li class="stop" data-id="${id}"><a href="#${id}"><span class="dot"></span><span class="t"><b><span class="num">${String(n).padStart(2, "0")}</span>${esc(L.name)}</b><span>${esc(R(L.sub))}</span></span></a></li>`;
      });
      html += "</ol></div>";
    });
    html += `<div class="route-group"><h4><span class="mod">+</span>${esc(t("tools"))}</h4><ol>` +
      TOOLS.map((tl) => `<li class="stop tool" data-id="${tl.id}"><a href="#${tl.id}"><span class="dot"></span><span class="t"><b>${esc(tl.name)}</b><span>${esc(R(tl.sub))}</span></span></a></li>`).join("") +
      "</ol></div>";
    $("#route").innerHTML = html;
    updateProgressUI();
    markCurrent(currentId);
  }
  function updateProgressUI() {
    const c = completedCount(), tot = ORDER.length;
    $("#progLabel").textContent = t("stationsOf", { c, t: tot });
    $("#progBar").style.width = overallPct() + "%";
    $("#miniProg").textContent = `${c}/${tot}`;
    $$(".stop[data-id]").forEach((li) => {
      const id = li.dataset.id;
      if (!LESSONS[id]) return;
      li.classList.remove("done", "started");
      const s = lessonStatus(id);
      if (s) li.classList.add(s);
      li.style.setProperty("--p", lessonPct(id) + "%");
    });
  }
  function markCurrent(id) {
    $$(".stop a").forEach((a) => a.removeAttribute("aria-current"));
    const a = $(`.stop[data-id="${id}"] a`);
    if (a) {
      a.setAttribute("aria-current", "page");
      const side = $("#side");
      const r = a.getBoundingClientRect(), sr = side.getBoundingClientRect();
      if (r.top < sr.top || r.bottom > sr.bottom) side.scrollTop += r.top - sr.top - sr.height / 3;
    }
  }

  /* ---------- building blocks ---------- */
  const TAG = { rule: "Règle", tip: "Astuce", trap: "Piège", delf: "DELF", info: "Note" };
  const table = (tb, plain) => `<div class="table-wrap${plain ? " plain" : ""}"><table><thead><tr>${tb.h.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${tb.r.map((row) => `<tr>${row.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  function renderTheory(blocks) {
    return blocks.map(([k, x]) => {
      if (k === "p") return `<p>${x}</p>`;
      if (k === "h") return `<h3 class="h3" style="margin-top:8px">${x}</h3>`;
      if (k === "table") return table(x);
      if (k === "list") return `<ul>${x.map((li) => `<li>${li}</li>`).join("")}</ul>`;
      if (k === "timeline") return `<div class="timeline">${x.map((s, i) => `<div class="${i === x.length - 1 ? "now" : ""}"><small>${s[0]}</small><b>${s[1]}</b><span>${s[2]}</span></div>`).join("")}</div>`;
      if (k === "model") return `<div style="display:flex;flex-direction:column;gap:8px"><h3 class="h3">${x[0]}</h3><div class="letter-model"><p>${x[1]}</p></div></div>`;
      return `<div class="note ${k}"><span class="tag">${TAG[k] || k}</span><div>${x}</div></div>`;
    }).join("");
  }
  const term = (fr, es) => `<div class="term"><span class="fr">${fr}</span>${sayBtn(fr)}<span class="es">${es}</span></div>`;
  function renderVocab(L) {
    if (L.vocabGroups) return L.vocabGroups.map((g) => `<div class="vocab-group"><h3>${esc(g.t)}</h3><div class="vocab">${g.items.map((v) => term(v[0], v[1])).join("")}</div></div>`).join("");
    return `<div class="vocab">${L.vocab.map((v) => term(v[0], v[1])).join("")}</div>`;
  }
  const examples = (ex) => `<ul class="examples">${ex.map(([fr, es]) => `<li><span class="fr">${fr}</span>${sayBtn(fr)}<span class="es">${es}</span></li>`).join("")}</ul>`;
  function host(u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return u; } }
  const links = (ls) => `<ul class="links">${ls.map(([n, u, d]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener noreferrer"><span class="ln">${esc(n)}${ICON.ext}</span><span class="ld">${d}</span><span class="lu">${esc(host(u))}</span></a></li>`).join("")}</ul>`;
  const sectionHead = (title, count) => `<div class="section-head"><h2 class="h2">${title}</h2>${count ? `<span class="count">${count}</span>` : ""}</div>`;
  const chipsNav = (items, seenMap) => `<nav class="chips-nav" aria-label="${esc(t("sectionsAria"))}">${items.map(([id, label], i) => {
    const sec = id.replace(/^s-/, "");
    const isSeen = seenMap && seenMap[sec];
    return `<button type="button" class="chip${isSeen ? " seen" : ""}" data-target="${id}" aria-pressed="${i === 0}"><span class="tick" aria-label="${esc(t("seenAria"))}">${ICON.check}</span>${label}</button>`;
  }).join("")}</nav>`;
  const plaque = (arr, title, sub) => `<div class="plaque"><div class="plaque-in"><span class="arr">${arr}</span><h1>${esc(title)}</h1><span class="rule-line"></span><span class="es">${sub}</span></div></div>`;

  let io = null, seenIo = null;
  const seenTimers = {};
  function wireChips(view, lessonId) {
    const nav = $(".chips-nav", view);
    if (!nav) return;
    nav.addEventListener("click", (e) => {
      const b = e.target.closest("[data-target]");
      if (!b) return;
      const el = document.getElementById(b.dataset.target);
      if (el) el.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "start" });
    });
    if (!("IntersectionObserver" in window)) return;
    io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (!en.isIntersecting) return;
        $$("[data-target]", nav).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.target === en.target.id)));
        if (currentId) saveLast(currentId, en.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".section[id]", view).forEach((s) => io.observe(s));
    if (!lessonId) return;
    /* A section counts as read after it has crossed the middle of the screen for a moment. */
    seenIo = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        const sec = en.target.id.replace(/^s-/, "");
        if (SECTIONS.indexOf(sec) < 0) return;
        clearTimeout(seenTimers[sec]);
        if (en.isIntersecting) seenTimers[sec] = setTimeout(() => markSeen(lessonId, sec), 1200);
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    $$(".section[id]", view).forEach((s) => seenIo.observe(s));
  }

  /* ---------- home ---------- */
  function renderHome(view) {
    const c = completedCount(), tot = ORDER.length;
    const next = ORDER.find((id) => lessonStatus(id) !== "done") || "autoevaluation";
    const totalGames = ORDER.reduce((a, id) => a + LESSONS[id].games.length, 0);
    const lastPage = last.id && (LESSONS[last.id] || TOOLS.find((x) => x.id === last.id)) ? last.id : null;
    const secLabel = { "s-theory": "secTheory", "s-vocab": "secVocab", "s-examples": "secExamples", "s-links": "secLinks", "s-practice": "secPractice" }[last.sec];
    const lastName = lastPage ? (LESSONS[lastPage] ? LESSONS[lastPage].name : TOOLS.find((x) => x.id === lastPage).name) : "";
    view.innerHTML = `
      <section class="hero">
        <p class="eyebrow">Cadre européen commun de référence · Niveau B1 · DELF</p>
        <h1><span class="w">Le</span> <span class="w" style="animation-delay:.08s">français,</span><br><em><span class="w" style="animation-delay:.22s">ligne</span> <span class="w" style="animation-delay:.32s">B1</span></em></h1>
        <p class="lead">${t("heroLead", { t: tot })}</p>
        <div class="row">
          <a class="btn primary" href="#${next}">${c || overallPct() ? t("cont") : t("start")}: ${esc(LESSONS[next].name)} →</a>
          <a class="btn ghost" href="#resume">${ICON.dl}${t("pdfBtn")}</a>
        </div>
        <div class="stats">
          <div><b>${c}/${tot}</b>${t("statStations")}</div>
          <div><b>${overallPct()} %</b>${t("statProgress")}</div>
          <div><b>${totalGames}</b>${t("statGames")}</div>
          <div><b>${VERBS.length}</b>${t("statVerbs")}</div>
        </div>
      </section>

      ${lastPage ? `<a class="resume-card" href="#${lastPage}" data-resume>
        <span class="rc-ring" style="--p:${LESSONS[lastPage] ? lessonPct(lastPage) : 0}%"><span>${LESSONS[lastPage] ? lessonPct(lastPage) + "%" : "→"}</span></span>
        <span class="rc-text"><span class="eyebrow">${t("resumeTitle")}</span><b>${esc(lastName)}</b><span>${secLabel ? t(secLabel) : ""}</span></span>
        <span class="btn primary">${t("resumeBtn")}</span></a>` : ""}

      <section class="section" id="h-map">
        ${sectionHead(t("mapTitle"), t("mapCount"))}
        <p class="game-inst" style="font-size:15px">${t("mapIntro")}</p>
        <div class="plan-map">
          ${MODULES.map((m, mi) => `
            <div class="line-row">
              <div class="lbl"><span class="mod">${t("segment")} ${m.id}</span><b>${esc(m.name)}</b><span>${esc(R(m.sub))}</span></div>
              <ol class="track">${m.lessons.map((id, i) => `<li class="${lessonStatus(id)}" style="--d:${(mi * 0.1 + i * 0.08).toFixed(2)}s;--p:${lessonPct(id)}%"><a href="#${id}" title="${lessonPct(id)} %"><span class="c"><span>${ORDER.indexOf(id) + 1}</span></span><span class="n">${esc(LESSONS[id].name)}</span></a></li>`).join("")}</ol>
            </div>`).join("")}
        </div>
      </section>

      <section class="section">
        ${sectionHead(t("threeVerbs"))}
        <div class="cards3">
          <div class="card"><span class="eyebrow">${t("savoirFaire")}</span><h3 class="h3">Raconter</h3><p>${t("v1")}</p></div>
          <div class="card"><span class="eyebrow">${t("savoirFaire")}</span><h3 class="h3">Projeter</h3><p>${t("v2")}</p></div>
          <div class="card"><span class="eyebrow">${t("savoirFaire")}</span><h3 class="h3">Argumenter</h3><p>${t("v3")}</p></div>
        </div>
      </section>

      <section class="section">
        ${sectionHead(t("howTitle"))}
        <div class="prose">
          <ol><li>${t("how1")}</li><li>${t("how2")}</li><li>${t("how3")}</li><li>${t("how4")}</li></ol>
          <div class="note rule"><span class="tag">Règle</span><div>${t("lgRule")}</div></div>
          <div class="note tip"><span class="tag">Astuce</span><div>${t("lgTip")}</div></div>
          <div class="note trap"><span class="tag">Piège</span><div>${t("lgTrap")}</div></div>
          <div class="note delf"><span class="tag">DELF</span><div>${t("lgDelf")}</div></div>
        </div>
      </section>

      <section class="section">
        ${sectionHead(t("toolsTitle"))}
        <div class="cards3">
          ${TOOLS.map((tl) => `<a class="card" href="#${tl.id}" style="text-decoration:none;color:inherit"><span class="eyebrow">${t("reference")}</span><h3 class="h3">${esc(tl.name)}</h3><p>${esc(R(tl.sub))}</p></a>`).join("")}
        </div>
      </section>

      <section class="section" id="h-progress">
        ${sectionHead(t("progressTitle"), `${overallPct()} %`)}
        <div class="progress-panel">
          <div class="bar big"><i style="width:${overallPct()}%"></i></div>
          <p class="game-inst">${t("progressText")}</p>
          ${storageOk ? "" : `<div class="feedback warn"><span class="fi">!</span><div>${t("storageOff")}</div></div>`}
          <div class="row">
            <button type="button" class="btn ghost" id="pExport">${ICON.dl}${t("exportBtn")}</button>
            <label class="btn ghost" for="pImport">${ICON.up}${t("importBtn")}</label>
            <input type="file" id="pImport" accept="application/json,.json" hidden>
            <button type="button" class="btn ghost danger" id="pReset">${t("resetBtn")}</button>
          </div>
          <p class="dl-status" id="pStatus" aria-live="polite"></p>
        </div>
      </section>`;
    wireProgressPanel(view);
  }

  function wireProgressPanel(view) {
    const status = $("#pStatus", view);
    $("#pExport", view).addEventListener("click", async () => {
      const data = { app: "ligne-b1", version: 2, exportedAt: new Date().toISOString() };
      STORE_KEYS.forEach((k) => { data[k] = store.get(k, null); });
      const json = JSON.stringify(data, null, 2);
      const ok = await saveFile(t("fileProgress"), new Blob([json], { type: "application/json" }), status);
      if (ok) toast(t("exported"));
    });
    $("#pImport", view).addEventListener("change", (e) => {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = () => {
        try {
          const d = JSON.parse(String(r.result));
          if (!d || d.app !== "ligne-b1") throw new Error("format");
          STORE_KEYS.forEach((k) => { if (d[k] !== undefined && d[k] !== null) store.set(k, d[k]); });
          progress = obj(store.get("progress", {})); seen = obj(store.get("seen", {})); last = obj(store.get("last", {}));
          const lg = store.get("lang", LANG); if (lg === "es" || lg === "fr") LANG = lg;
          applyStaticI18n(); renderSide(); route();
          toast(t("imported"));
        } catch (err) { status.textContent = t("importError"); }
      };
      r.readAsText(f);
    });
    $("#pReset", view).addEventListener("click", resetAllLearning);
  }

  /* ---------- restart learning ---------- */
  function confirmDialog(title, text, okLabel) {
    return new Promise((resolve) => {
      const back = document.activeElement;
      const scrim = document.createElement("div");
      scrim.className = "modal-scrim";
      scrim.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle" aria-describedby="mText">
        <h3 class="h3" id="mTitle">${esc(title)}</h3><p id="mText">${esc(text)}</p>
        <div class="row"><button type="button" class="btn ghost" data-m="0">${esc(t("cancel"))}</button><button type="button" class="btn primary danger-fill" data-m="1">${esc(okLabel)}</button></div></div>`;
      document.body.appendChild(scrim);
      document.body.classList.add("modal-open");
      const btns = $$("[data-m]", scrim);
      const close = (v) => {
        document.removeEventListener("keydown", onKey, true);
        scrim.classList.add("closing");
        setTimeout(() => { scrim.remove(); document.body.classList.remove("modal-open"); }, REDUCE ? 0 : 180);
        if (back && back.focus) { try { back.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
        resolve(v);
      };
      function onKey(e) {
        if (e.key === "Escape") { e.preventDefault(); close(false); }
        else if (e.key === "Tab") { e.preventDefault(); (document.activeElement === btns[0] ? btns[1] : btns[0]).focus(); }
      }
      document.addEventListener("keydown", onKey, true);
      scrim.addEventListener("click", (e) => { if (e.target === scrim) close(false); const b = e.target.closest("[data-m]"); if (b) close(b.dataset.m === "1"); });
      btns[0].focus();
    });
  }
  async function resetAllLearning() {
    closeNav();
    if (!(await confirmDialog(t("resetAllTitle"), t("resetAllText"), t("confirmReset")))) return;
    ["progress", "seen", "last", "checklist"].forEach((k) => store.remove(k));
    progress = {}; seen = {}; last = {};
    renderSide();
    if (location.hash && location.hash !== "#accueil") location.hash = "#accueil"; else route();
    toast(t("resetDone"));
  }
  async function resetLesson(id) {
    const name = LESSONS[id].name;
    if (!(await confirmDialog(t("resetLessonTitle", { n: name }), t("resetLessonText"), t("confirmReset")))) return;
    Object.keys(progress).forEach((k) => { if (k.indexOf(id + ":") === 0) delete progress[k]; });
    delete seen[id];
    store.set("progress", progress); store.set("seen", seen);
    updateProgressUI();
    route();
    toast(t("lessonResetDone", { n: name }));
  }
  $("#resetAll").addEventListener("click", resetAllLearning);

  /* ---------- lesson ---------- */
  function statusText(id) {
    const s = lessonStatus(id), n = LESSONS[id].games.length;
    return s === "done" ? t("stDone") : s === "started" ? t("stProg", { p: lessonPct(id), g: gamesPassed(id), n }) : t("stNone");
  }
  function refreshLessonStatus(id) {
    const ls = $("#lstatus"); if (ls && currentId === id) ls.textContent = statusText(id);
    const pr = $("#lprog"); if (pr && currentId === id) pr.style.width = lessonPct(id) + "%";
    const rb = $("#lreset"); if (rb && currentId === id) rb.hidden = !lessonStatus(id);
  }
  function renderLesson(view, id) {
    const L = R(LESSONS[id]), m = MOD_OF[id], idx = ORDER.indexOf(id), n = idx + 1;
    const prev = ORDER[idx - 1], next = ORDER[idx + 1];
    const vcount = L.vocabGroups ? L.vocabGroups.reduce((a, g) => a + g.items.length, 0) : L.vocab.length;
    const ng = L.games.length;
    view.innerHTML = `
      <div class="plaque-wrap">
        ${plaque(t("lessonArr", { n, sup: n === 1 ? "re" : "e", m: m.id }), L.name, esc(L.sub))}
        <p class="lead">${L.goal}</p>
        <div class="lesson-meta"><span>${t("segment")} ${m.id} · ${esc(m.name)} (${esc(R(m.sub))})</span><span>${t(ng > 1 ? "gamesN" : "games1", { n: ng })}</span><span id="lstatus">${statusText(id)}</span><button type="button" class="reset-link inline" id="lreset"${lessonStatus(id) ? "" : " hidden"}><span aria-hidden="true">↺</span> ${t("resetLesson")}</button></div>
        <div class="bar lesson-bar"><i id="lprog" style="width:${lessonPct(id)}%"></i></div>
      </div>
      ${chipsNav([["s-theory", t("secTheory")], ["s-vocab", t("secVocab")], ["s-examples", t("secExamples")], ["s-links", t("secLinks")], ["s-practice", t("secPractice")]], seen[id])}
      <section class="section" id="s-theory">${sectionHead(t("secTheory"))}<div class="prose">${renderTheory(L.theory)}</div></section>
      <section class="section" id="s-vocab">${sectionHead(t("hVocab"), t("terms", { n: vcount }))}${renderVocab(L)}</section>
      <section class="section" id="s-examples">${sectionHead(t("secExamples"), t("phrases", { n: L.examples.length }))}${examples(L.examples)}</section>
      <section class="section" id="s-links">${sectionHead(t("hLinks"), t("sites", { n: L.links.length }))}${links(L.links)}</section>
      <section class="section" id="s-practice">${sectionHead(t("secPractice"), t("practiceHint"))}<div class="games-tabs"></div><div class="game-host"></div></section>
      <nav class="pager" aria-label="${esc(t("stationsAria"))}">
        ${prev ? `<a href="#${prev}"><small>${t("prev")}</small><b>${esc(LESSONS[prev].name)}</b></a>` : `<a href="#accueil"><small>${t("home")}</small><b>${t("homeMap")}</b></a>`}
        ${next ? `<a class="next" href="#${next}"><small>${t("next")}</small><b>${esc(LESSONS[next].name)}</b></a>` : `<a class="next" href="#resume"><small>${t("terminus")}</small><b>Résumé des règles</b></a>`}
      </nav>`;
    Sound.preload(id);
    $("#lreset", view).addEventListener("click", () => resetLesson(id));
    mountGames($("#s-practice", view), id, L.games, { lesson: L, next });
  }

  /* ---------- games ---------- */
  const TYPE_KEY = { mcq: "tMcq", fill: "tFill", sort: "tSort", match: "tMatch", order: "tOrder", flash: "tFlash", listen: "tListen" };
  const PRAISE = ["Parfait !", "Bravo !", "Excellent !", "C'est ça !", "Très bien !", "Super !"];

  function mountGames(section, pageId, games, ctx) {
    const tabs = $(".games-tabs", section), stage = $(".game-host", section);
    function badge(i) { const v = progress[pageId + ":" + i]; return typeof v === "number" ? ` · ${v} %` : ""; }
    function show(i) {
      tabs.innerHTML = games.length > 1 ? games.map((g, k) => `<button type="button" class="chip" aria-pressed="${k === i}" data-g="${k}">${k + 1}. ${esc(g.title)}${badge(k)}</button>`).join("") : "";
      runGame(stage, games[i], pageId, i, {
        lesson: ctx.lesson,
        nextGame: i < games.length - 1 ? () => show(i + 1) : null,
        nextLesson: ctx.next,
        refreshTabs: () => { $$("[data-g]", tabs).forEach((b) => { const k = +b.dataset.g; b.textContent = `${k + 1}. ${games[k].title}${badge(k)}`; }); }
      });
    }
    tabs.addEventListener("click", (e) => { const b = e.target.closest("[data-g]"); if (b) show(+b.dataset.g); });
    show(0);
  }

  function feedback(el, kind, msg, why, next, label) {
    el.innerHTML = `<div class="feedback ${kind}"><span class="fi">${kind === "good" ? "✓" : kind === "warn" ? "≈" : "✗"}</span><div>${msg}${why ? `<div style="margin-top:4px">${why}</div>` : ""}</div></div>` +
      (next ? `<div class="game-foot" style="margin-top:10px"><button type="button" class="btn primary" data-next>${label || t("cont2")}</button></div>` : "");
    if (next) { const nb = $("[data-next]", el); nb.addEventListener("click", next); try { nb.focus({ preventScroll: true }); } catch (e) { nb.focus(); } }
  }

  function runGame(stage, gDef, pageId, gi, ctx) {
    const g = R(gDef);
    if (typeof gDef.gen === "function") { const out = gDef.gen(); if (g.type === "flash") g.cards = out; else g.items = out; }
    const key = pageId + ":" + gi;
    stage.innerHTML = `<div class="game" data-type="${g.type}">
      <header class="game-head"><div><p class="eyebrow">${t(TYPE_KEY[g.type])}</p><h3 class="h3">${esc(g.title)}</h3><p class="game-inst">${g.inst || ""}</p></div>
      <div class="game-score" aria-live="polite"><b class="sc">0</b><span class="of">${t("hits")}</span></div></header>
      <div class="game-progress"><i></i></div><div class="game-body"></div></div>`;
    const body = $(".game-body", stage), scEl = $(".sc", stage), ofEl = $(".of", stage), bar = $(".game-progress i", stage);
    const api = {
      body, score: 0, total: 0, done: 0,
      setTotal(n) { this.total = n; ofEl.textContent = t("ofN", { n }); },
      add(ok) {
        if (ok) { this.score++; scEl.textContent = this.score; scEl.style.animation = "none"; void scEl.offsetWidth; scEl.style.animation = "pop .4s"; }
        this.done++;
        bar.style.width = Math.min(100, (this.done / this.total) * 100) + "%";
      },
      finish(scoreOverride) {
        const score = typeof scoreOverride === "number" ? scoreOverride : this.score;
        const pct = this.total ? Math.round((score / this.total) * 100) : 0;
        bar.style.width = "100%";
        const isLesson = !!LESSONS[pageId];
        const before = isLesson ? lessonStatus(pageId) : null;
        const prevBest = progress[key];
        if (typeof prevBest !== "number" || pct > prevBest) { progress[key] = pct; store.set("progress", progress); }
        const after = isLesson ? lessonStatus(pageId) : null;
        updateProgressUI();
        if (isLesson) refreshLessonStatus(pageId);
        ctx.refreshTabs();
        let title, text;
        if (g.final) {
          title = score >= 15 ? "Niveau B1 solide !" : score >= 11 ? "Presque !" : "Courage !";
          text = score >= 15 ? t("finalHigh") : score >= 11 ? t("finalMid") : t("finalLow");
        } else {
          title = pct >= 90 ? "Excellent !" : pct >= 70 ? "Très bien !" : pct >= 50 ? "Pas mal…" : "Courage !";
          text = pct >= 70 ? t("passed") + " " + (ctx.nextGame ? t("nextHint") : t("goodJob")) : t("retryHint");
        }
        const cls = pct >= 70 ? "good" : pct >= 50 ? "mid" : "low";
        body.innerHTML = `<div class="result"><p class="eyebrow">${t("result")}</p><div class="pct ${cls}">${pct} %</div><h3 class="h3">${title}</h3><p>${score} / ${this.total} · ${text}${typeof prevBest === "number" ? " " + t("prevBest", { p: prevBest }) : ""}</p>
          <div class="row" style="justify-content:center">
            <button type="button" class="btn ghost" data-act="retry">${t("retry")}</button>
            ${ctx.nextGame ? `<button type="button" class="btn primary" data-act="next">${t("nextGame")}</button>` : ctx.nextLesson ? `<a class="btn primary" href="#${ctx.nextLesson}">${t("nextStation")}</a>` : ""}
          </div></div>`;
        $("[data-act=retry]", body).addEventListener("click", () => runGame(stage, gDef, pageId, gi, ctx));
        const nx = $("[data-act=next]", body); if (nx) nx.addEventListener("click", ctx.nextGame);
        if (before !== "done" && after === "done") { toast(t("stationDone", { n: LESSONS[pageId].name })); confetti(); }
        else if (pct >= 80) confetti();
      }
    };
    (GAMES[g.type] || GAMES.mcq)(g, api, ctx);
  }

  const GAMES = {
    mcq(g, api) {
      const items = shuffle(g.items);
      api.setTotal(items.length);
      let i = 0;
      (function step() {
        if (i >= items.length) return api.finish();
        const it = items[i], correct = it.o[0], opts = shuffle(it.o);
        api.body.innerHTML = `<div class="q-card"><div class="eyebrow">${t("question", { i: i + 1, n: items.length })}</div><div class="q">${it.q}</div><div class="opts">${opts.map((o, k) => `<button type="button" class="opt" data-k="${k}">${o}</button>`).join("")}</div><div class="fb"></div></div>`;
        const btns = $$(".opt", api.body);
        btns.forEach((b) => b.addEventListener("click", () => {
          const ok = opts[+b.dataset.k] === correct;
          btns.forEach((x) => { x.disabled = true; if (opts[+x.dataset.k] === correct) x.classList.add("ok"); else if (x !== b) x.classList.add("dim"); });
          if (!ok) b.classList.add("ko");
          api.add(ok);
          feedback($(".fb", api.body), ok ? "good" : "bad", ok ? pick(PRAISE) : `${t("correctIs")} <b>${correct}</b>`, it.why, () => { i++; step(); });
        }));
      })();
    },

    fill(g, api) {
      const items = g.final ? g.items.slice() : shuffle(g.items);
      api.setTotal(items.length);
      let i = 0;
      (function step() {
        if (i >= items.length) return api.finish();
        const it = items[i];
        let bi = 0;
        const qhtml = it.q.replace(/___/g, () => {
          const first = [].concat(it.a[bi])[0];
          const w = Math.max(5, first.length + 2);
          const html = `<input class="blank" data-b="${bi}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:${w}ch" aria-label="${esc(t("blank", { n: bi + 1 }))}">`;
          bi++;
          return html;
        });
        api.body.innerHTML = `<div class="q-card"><div class="eyebrow">${t("phrase", { i: i + 1, n: items.length })}</div><div class="q">${qhtml}</div>
          <div class="accents" aria-label="${esc(t("specialChars"))}">${["é", "è", "ê", "ë", "à", "â", "ç", "î", "ï", "ô", "ù", "û", "œ"].map((c) => `<button type="button" tabindex="-1" data-ch="${c}">${c}</button>`).join("")}</div>
          <div class="game-foot"><button type="button" class="btn ghost" data-skip>${t("showSolution")}</button><button type="button" class="btn primary" data-check>${t("check")}</button></div><div class="fb"></div></div>`;
        const inputs = $$(".blank", api.body);
        let lastInput = inputs[0];
        inputs.forEach((inp) => {
          inp.addEventListener("focus", () => { lastInput = inp; });
          inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(false); } });
        });
        try { inputs[0].focus({ preventScroll: true }); } catch (e) { /* ignore */ }
        const acc = $(".accents", api.body);
        acc.addEventListener("mousedown", (e) => { if (e.target.closest("[data-ch]")) e.preventDefault(); });
        acc.addEventListener("click", (e) => {
          const b = e.target.closest("[data-ch]");
          if (!b || !lastInput || lastInput.disabled) return;
          const s = lastInput.selectionStart != null ? lastInput.selectionStart : lastInput.value.length;
          const en = lastInput.selectionEnd != null ? lastInput.selectionEnd : s;
          lastInput.value = lastInput.value.slice(0, s) + b.dataset.ch + lastInput.value.slice(en);
          lastInput.focus();
          try { lastInput.setSelectionRange(s + 1, s + 1); } catch (err) { /* ignore */ }
        });
        const checkBtn = $("[data-check]", api.body), skipBtn = $("[data-skip]", api.body), fb = $(".fb", api.body);
        checkBtn.addEventListener("click", () => check(false));
        skipBtn.addEventListener("click", () => check(true));
        function check(giveUp) {
          if (!giveUp && inputs.some((inp) => !inp.value.trim())) {
            inputs.filter((inp) => !inp.value.trim()).forEach((inp) => { inp.classList.remove("ko"); void inp.offsetWidth; inp.classList.add("ko"); setTimeout(() => inp.classList.remove("ko"), 450); });
            feedback(fb, "warn", t("fillAll"));
            return;
          }
          let allOk = true, accentWarn = false;
          inputs.forEach((inp, b) => {
            const alts = [].concat(it.a[b]);
            const v = norm(inp.value);
            const exact = alts.some((a) => norm(a) === v);
            const loose = !exact && alts.some((a) => fold(norm(a)) === fold(v));
            inp.disabled = true;
            if (exact || loose) { inp.classList.add("ok"); if (loose) accentWarn = true; }
            else { inp.classList.add("ko"); allOk = false; }
          });
          checkBtn.disabled = true; skipBtn.disabled = true;
          api.add(allOk);
          const sol = it.a.map((a) => `<b>${[].concat(a)[0]}</b>`).join(" · ");
          if (allOk && accentWarn) feedback(fb, "warn", `${t("accentWarn")} ${sol}`, it.why, () => { i++; step(); });
          else if (allOk) feedback(fb, "good", pick(PRAISE), it.why, () => { i++; step(); });
          else feedback(fb, "bad", `${t("solution")} ${sol}`, it.why, () => { i++; step(); });
        }
      })();
    },

    sort(g, api) {
      const items = shuffle(g.items);
      api.setTotal(items.length);
      const counts = g.buckets.map(() => 0);
      let i = 0;
      api.body.innerHTML = `<div class="sort-stage"><div class="eyebrow sort-count"></div><div class="sort-slot" style="width:100%;display:flex;justify-content:center"></div>
        <div class="buckets">${g.buckets.map((b, k) => `<button type="button" class="bucket" data-k="${k}">${esc(b)}<small>0</small></button>`).join("")}</div><div class="fb" style="width:100%"></div></div>`;
      const slot = $(".sort-slot", api.body), bks = $$(".bucket", api.body), cnt = $(".sort-count", api.body), fb = $(".fb", api.body);
      function deal() {
        if (i >= items.length) { setTimeout(() => api.finish(), 300); return; }
        cnt.textContent = t("card", { i: i + 1, n: items.length });
        slot.innerHTML = `<div class="sort-card">${items[i][0]}</div>`;
        bks.forEach((b) => { b.disabled = false; b.classList.remove("ko", "right", "bump"); });
      }
      bks.forEach((b) => b.addEventListener("click", () => {
        const k = +b.dataset.k, it = items[i], ok = k === it[1];
        bks.forEach((x) => { x.disabled = true; });
        api.add(ok);
        const card = $(".sort-card", slot), target = bks[it[1]];
        counts[it[1]]++;
        target.querySelector("small").textContent = counts[it[1]];
        if (ok) {
          card.classList.add("fly"); target.classList.add("bump");
          setTimeout(() => { i++; deal(); }, REDUCE ? 60 : 460);
        } else {
          card.classList.add("ko-state"); b.classList.add("ko"); target.classList.add("right");
          feedback(fb, "bad", t("goesIn", { b: esc(g.buckets[it[1]]) }), it[2], () => { fb.innerHTML = ""; i++; deal(); });
        }
      }));
      deal();
    },

    match(g, api) {
      const pairs = g.pairs.map((p, i) => ({ l: p[0], r: p[1], i }));
      const Ls = shuffle(pairs), Rs = shuffle(pairs);
      api.setTotal(pairs.length);
      let sel = null, mistakes = 0, matched = 0;
      api.body.innerHTML = `<div class="match"><div class="col">${Ls.map((p) => `<button type="button" class="tile" data-s="l" data-i="${p.i}">${p.l}</button>`).join("")}</div>
        <div class="col">${Rs.map((p) => `<button type="button" class="tile" data-s="r" data-i="${p.i}">${p.r}</button>`).join("")}</div></div>
        <p class="game-inst mstat">${t("errors", { n: 0 })}</p>`;
      const mstat = $(".mstat", api.body);
      $(".match", api.body).addEventListener("click", (e) => {
        const tile = e.target.closest(".tile");
        if (!tile || tile.disabled) return;
        const side = tile.dataset.s, idx = +tile.dataset.i;
        if (!sel || sel.side === side) {
          if (sel) sel.el.classList.remove("sel");
          sel = { side, idx, el: tile }; tile.classList.add("sel");
          return;
        }
        const a = sel.el, b = tile;
        a.classList.remove("sel");
        if (sel.idx === idx) {
          [a, b].forEach((x) => { x.classList.add("ok"); x.disabled = true; setTimeout(() => x.classList.add("done"), 500); });
          matched++; api.add(true);
          if (matched === pairs.length) setTimeout(() => api.finish(Math.max(0, pairs.length - mistakes)), 600);
        } else {
          mistakes++; mstat.textContent = t("errors", { n: mistakes });
          [a, b].forEach((x) => { x.classList.add("ko"); setTimeout(() => x.classList.remove("ko"), 450); });
        }
        sel = null;
      });
    },

    order(g, api) {
      const items = shuffle(g.items);
      api.setTotal(items.length);
      let i = 0;
      (function step() {
        if (i >= items.length) return api.finish();
        const [s, tr] = items[i];
        const toks = s.split("|");
        let bank = shuffle(toks.map((tk, k) => ({ t: tk, k })));
        let guard = 0;
        while (toks.length > 2 && bank.map((x) => x.k).join() === toks.map((_, k) => k).join() && guard++ < 10) bank = shuffle(bank);
        let line = [];
        api.body.innerHTML = `<div class="q-card"><div class="eyebrow">${t("phrase", { i: i + 1, n: items.length })}</div><p class="game-inst">${t("meaning")} <b>${tr}</b></p>
          <div class="order-line" data-ph="${esc(t("orderPh"))}" aria-label="${esc(t("yourSentence"))}"></div><div class="order-bank" aria-label="${esc(t("wordsAvail"))}"></div>
          <div class="game-foot"><button type="button" class="btn ghost" data-reset>${t("reset")}</button><button type="button" class="btn primary" data-check disabled>${t("check")}</button></div><div class="fb"></div></div>`;
        const lineEl = $(".order-line", api.body), bankEl = $(".order-bank", api.body), checkBtn = $("[data-check]", api.body), resetBtn = $("[data-reset]", api.body);
        let locked = false;
        function draw() {
          lineEl.innerHTML = line.map((x, j) => `<button type="button" class="word" data-j="${j}">${esc(x.t)}</button>`).join("");
          bankEl.innerHTML = bank.map((x, j) => `<button type="button" class="word" data-b="${j}">${esc(x.t)}</button>`).join("");
          checkBtn.disabled = bank.length > 0 || locked;
        }
        bankEl.addEventListener("click", (e) => { const w = e.target.closest("[data-b]"); if (!w || locked) return; line.push(bank.splice(+w.dataset.b, 1)[0]); draw(); });
        lineEl.addEventListener("click", (e) => { const w = e.target.closest("[data-j]"); if (!w || locked) return; bank.push(line.splice(+w.dataset.j, 1)[0]); draw(); });
        resetBtn.addEventListener("click", () => { if (locked) return; bank = bank.concat(line); line = []; draw(); });
        checkBtn.addEventListener("click", () => {
          locked = true;
          const sentence = toks.join(" ");
          const ok = line.map((x) => x.t).join(" ") === sentence;
          lineEl.classList.add(ok ? "ok" : "ko");
          $$(".word", api.body).forEach((w) => { w.disabled = true; });
          checkBtn.disabled = true; resetBtn.disabled = true;
          api.add(ok);
          feedback($(".fb", api.body), ok ? "good" : "bad", (ok ? pick(PRAISE) : `${t("orderIs")} <b>${esc(sentence)}</b>`) + " " + sayBtn(sentence), "", () => { i++; step(); });
        });
        draw();
      })();
    },

    flash(g, api, ctx) {
      let cards = g.cards;
      if (!cards && g.fromVocab && ctx.lesson) {
        const all = ctx.lesson.vocabGroups ? ctx.lesson.vocabGroups.reduce((a, gr) => a.concat(gr.items), []) : ctx.lesson.vocab;
        cards = shuffle(all).slice(0, g.fromVocab);
      }
      cards = shuffle(cards || []);
      api.setTotal(cards.length);
      let i = 0;
      (function step() {
        if (i >= cards.length) return api.finish();
        const [front, back] = cards[i];
        api.body.innerHTML = `<div class="flash-stage"><div class="eyebrow">${t("card", { i: i + 1, n: cards.length })}</div>
          <button type="button" class="flash" aria-label="${esc(t("flipAria"))}"><span class="face front"><b>${front}</b><small>${t("flipHint")}</small></span><span class="face back"><b>${back}</b><small>${front}</small></span></button>
          <div class="row" style="justify-content:center">${sayBtn(front)}</div>
          <div class="row fbtns" style="justify-content:center" hidden><button type="button" class="btn ghost" data-k="0">${t("review")}</button><button type="button" class="btn primary" data-k="1">${t("knew")}</button></div></div>`;
        const card = $(".flash", api.body), fb = $(".fbtns", api.body);
        card.addEventListener("click", () => { card.classList.toggle("flipped"); fb.hidden = false; });
        fb.addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (!b) return; api.add(b.dataset.k === "1"); i++; step(); });
      })();
    },

    listen(g, api) {
      if (!Sound.available()) {
        api.setTotal(0);
        api.body.innerHTML = `<div class="feedback warn"><span class="fi">!</span><div>${t("noAudio")}</div></div>`;
        return;
      }
      const rounds = shuffle(g.pairs).slice(0, 10).map((p) => ({ opts: shuffle(p), ans: pick(p) }));
      api.setTotal(rounds.length);
      let i = 0;
      (function step(auto) {
        if (i >= rounds.length) return api.finish();
        const r = rounds[i];
        api.body.innerHTML = `<div class="q-card" style="align-items:center;text-align:center"><div class="eyebrow">${t("round", { i: i + 1, n: rounds.length })}</div>
          <button type="button" class="listen-btn" aria-label="${esc(t("listenAria"))}">${ICON.say}</button>
          <p class="game-inst">${t("listenHint")}</p>
          <div class="opts" style="width:100%">${r.opts.map((o, k) => `<button type="button" class="opt" data-k="${k}" style="text-align:center;font-family:var(--f-display);font-size:22px">${esc(o)}</button>`).join("")}</div><div class="fb" style="width:100%;text-align:left"></div></div>`;
        const lb = $(".listen-btn", api.body);
        lb.addEventListener("click", () => Sound.play(r.ans, lb));
        if (auto) Sound.play(r.ans, lb);
        const btns = $$(".opt", api.body);
        btns.forEach((b) => b.addEventListener("click", () => {
          const ok = r.opts[+b.dataset.k] === r.ans;
          btns.forEach((x) => { x.disabled = true; if (r.opts[+x.dataset.k] === r.ans) x.classList.add("ok"); else if (x !== b) x.classList.add("dim"); });
          if (!ok) b.classList.add("ko");
          api.add(ok);
          feedback($(".fb", api.body), ok ? "good" : "bad", ok ? pick(PRAISE) : `${t("itWas", { w: esc(r.ans) })} ${r.opts.map((o) => `${esc(o)} ${sayBtn(o)}`).join(" ")}`, "", () => { i++; step(true); });
        }));
      })(false);
    }
  };

  /* ---------- verbs page ---------- */
  function consChip(c) {
    const cls = /(^|\s)à\s/.test(c) ? "a" : /(^|\s)de\s/.test(c) ? "de" : /^faire qqch$|qqn faire qqch/.test(c) ? "x" : "";
    return `<span class="con ${cls}">${esc(c).replace(/(^|\s)(à|de|pour|chez|avec)(?=\s)/g, "$1<b>$2</b>")}</span>`;
  }
  function verbRow(v) {
    const rm = R(v.rm);
    return `<div class="vrow"><div class="v">${sayBtn(v.v)}<span>${esc(v.v)}</span></div><div class="cons">${v.cons.map(consChip).join("")}</div><div class="mean">${esc(v.es)}</div>` +
      ((v.ex || rm) ? `<div class="extra">${v.ex ? `<span class="ex">${esc(v.ex)} ${sayBtn(v.ex)}</span>` : ""}${rm ? `<span class="rm">${esc(rm)}</span>` : ""}</div>` : "") + "</div>";
  }
  const groupLabel = (g) => t({ e: "grpE", a: "grpA", i: "grpI" }[g]);
  const verbHead = (v) => (v.g === "v" ? fold(v.v.replace(/^s'|^se /, "")).charAt(0).toUpperCase() : groupLabel(v.g));
  function verbList(q, cat) {
    const fq = fold(norm(q || ""));
    const list = VERBS.filter((v) => (cat === "all" || v.cats.has(cat)) && (!fq || fold((v.v + " " + v.es + " " + v.cons.join(" ")).toLowerCase()).includes(fq)));
    let html = "", lastHead = "";
    list.forEach((v) => {
      const head = verbHead(v);
      if (head !== lastHead) { html += `<div class="letter">${head}</div>`; lastHead = head; }
      html += verbRow(v);
    });
    return { html: html || `<div class="empty">${t("empty")}</div>`, n: list.length };
  }
  function prepItems() {
    const pool = VERBS.filter((v) => {
      const k = ["a-inf", "de-inf", "x-inf"].filter((c) => v.cats.has(c));
      return k.length === 1 && !v.cons.some((c) => /pour faire/.test(c));
    });
    const none = t("optNone");
    return shuffle(pool).slice(0, 12).map((v) => {
      const correct = v.cats.has("a-inf") ? "à" : v.cats.has("de-inf") ? "de" : none;
      return { q: `<b>${esc(v.v)}</b> ___ faire qqch <span class="hint">${esc(v.es)}</span>`, o: [correct].concat(["à", "de", none].filter((x) => x !== correct)), why: `${t("construction")} ${v.cons.map(esc).join(" · ")}` };
    });
  }
  function personItems() {
    const pool = VERBS.filter((v) => {
      if (v.g !== "v") return false;
      const d = v.cons.some((c) => /^qqn( |$)/.test(c));
      const a = v.cons.some((c) => /(^|\s)à qqn/.test(c));
      const de = v.cons.some((c) => /(^|\s)de qqn$/.test(c));
      return (d + a + de) === 1;
    });
    const direct = t("optDirect");
    return shuffle(pool).slice(0, 12).map((v) => {
      const correct = v.cons.some((c) => /^qqn( |$)/.test(c)) ? direct : v.cons.some((c) => /(^|\s)à qqn/.test(c)) ? "à qqn" : "de qqn";
      return { q: `<b>${esc(v.v)}</b> ___ <span class="hint">${esc(v.es)} · ${t("persHint")}</span>`, o: [correct].concat([direct, "à qqn", "de qqn"].filter((x) => x !== correct)), why: `${t("construction")} ${v.cons.map(esc).join(" · ")}` };
    });
  }
  const verbCards = () => shuffle(VERBS).slice(0, 15).map((v) => [v.v, `${v.cons.join(" · ")}<br><span style="font-size:14px;font-weight:400">${esc(v.es)}</span>`]);

  function renderVerbs(view) {
    const srcLink = `<a href="https://oraprdnt.uqtr.uquebec.ca/portail/docs/GSC2213/F1659301352_Les_pr_positions_et_les_verbes_avanc__2e__dition.pdf" target="_blank" rel="noopener noreferrer"><i>Le verbe et ses prépositions</i>, niveau avancé, 2e éd.</a>`;
    view.innerHTML = `
      <div class="plaque-wrap">
        ${plaque(t("vArr"), "Verbes et prépositions", t("vSub", { n: VERBS.length }))}
        <p class="lead">${t("vLead")}</p>
      </div>
      ${chipsNav([["v-keys", t("chKeys")], ["v-list", t("chList")], ["v-practice", t("secPractice")]])}
      <section class="section" id="v-keys">
        ${sectionHead(t("hKeys"))}
        <div class="prose">
          <div class="note info"><span class="tag">${t("keyTag")}</span><div>${t("keyNote")} <span class="con a"><b>à</b></span> <span class="con de"><b>de</b></span> <span class="con x">${t("noPrepInf")}</span></div></div>
          <div class="note rule"><span class="tag">Règle</span><div>${t("contractNote")}</div></div>
          <div class="note tip"><span class="tag">Astuce</span><div>${t("tipNote")}</div></div>
        </div>
        <h3 class="h3">${t("hContrasts")}</h3>
        <div class="cards3">${R(VERB_CONTRASTS).map(([ti, d]) => `<div class="card"><h3 class="h3" style="font-size:18px">${ti}</h3><p>${d}</p></div>`).join("")}</div>
      </section>
      <section class="section" id="v-list">
        ${sectionHead(t("hList"), t("entries", { n: `<span id="vcount">${VERBS.length}</span>` }))}
        <div class="toolbar">
          <input class="search" id="vsearch" type="search" placeholder="${esc(t("searchPh"))}" aria-label="${esc(t("searchAria"))}">
          <div class="filters" id="vfilters">${R(VERB_FILTERS).map(([k, l], i) => `<button type="button" class="chip" data-f="${k}" aria-pressed="${i === 0}">${l}</button>`).join("")}</div>
        </div>
        <div class="vlist" id="vlist"></div>
        <div class="dl-card"><div><h3 class="h3">${t("vPdfTitle")}</h3><p>${t("vPdfText", { n: VERBS.length })}</p><p class="dl-status" id="vdlStatus" aria-live="polite"></p></div><button type="button" class="btn primary" id="vdl">${ICON.dl}${t("download")}</button></div>
        <p class="game-inst">${t("vSource", { link: srcLink })}</p>
      </section>
      <section class="section" id="v-practice">${sectionHead(t("secPractice"), t("randomRounds"))}<div class="games-tabs"></div><div class="game-host"></div></section>`;
    let cat = "all";
    const listEl = $("#vlist", view), search = $("#vsearch", view), countEl = $("#vcount", view);
    function draw() { const r = verbList(search.value, cat); listEl.innerHTML = r.html; countEl.textContent = r.n; }
    search.addEventListener("input", draw);
    $("#vfilters", view).addEventListener("click", (e) => {
      const b = e.target.closest("[data-f]"); if (!b) return;
      cat = b.dataset.f;
      $$("[data-f]", view).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      draw();
    });
    draw();
    Sound.preload("verbes");
    wireDownload($("#vdl", view), $("#vdlStatus", view), () => t("fileVerbs"), pdfVerbs);
    mountGames($("#v-practice", view), "verbes", [
      { type: "mcq", title: t("gPrepT"), inst: t("gPrepI"), gen: prepItems },
      { type: "mcq", title: t("gPersT"), inst: t("gPersI"), gen: personItems },
      { type: "flash", title: t("gFlashT"), inst: t("gFlashI"), gen: verbCards }
    ], { lesson: null, next: null });
  }

  /* ---------- conjugation page ---------- */
  function conjItems() {
    const kinds = [
      (r) => ({ q: t("qPart", { v: r[0] }), a: [[r[2].replace(/ \(être\)/, "")]] }),
      (r) => ({ q: t("qFut", { v: r[0] }), a: [[r[3].replace("-", "") + "ai"]] }),
      (r) => ({ q: t("qSubj", { v: r[0] }), a: [[r[4]]] }),
      (r) => ({ q: t("qNous", { v: r[0] }), a: [[r[1].split(" / ")[1]]] }),
      (r) => ({ q: t("qIls", { v: r[0] }), a: [[r[1].split(" / ")[2]]] })
    ];
    return shuffle(IRREG).slice(0, 10).map((r) => pick(kinds)(r));
  }
  function renderConj(view) {
    view.innerHTML = `
      <div class="plaque-wrap">
        ${plaque(t("cArr"), "Conjugaison", t("cSub"))}
        <p class="lead">${t("cLead")}</p>
      </div>
      ${chipsNav([["c-parler", "Parler"], ["c-etre", t("chEtre")], ["c-irr", t("chIrr")], ["c-practice", t("secPractice")]])}
      <section class="section" id="c-parler">${sectionHead(t("hModel"))}${table(CONJ_PARLER)}</section>
      <section class="section" id="c-etre">${sectionHead(t("chEtre"))}${table(CONJ_ETRE_AVOIR, true)}</section>
      <section class="section" id="c-irr">${sectionHead(t("hIrr"), t("nVerbs", { n: IRREG.length }))}
        ${table({ h: t("irrHead"), r: IRREG.map((r) => [r[0], r[1], r[2], r[3], r[4]]) })}
        <div class="note tip"><span class="tag">Astuce</span><div>${t("cTip")}</div></div>
        ${links([["Le Conjugueur", "https://leconjugueur.lefigaro.fr/", t("lConj")], ["Lingolia · Verbos irregulares", LG + "tiempos-indicativo/verbos-irregulares", t("lIrr")]])}
      </section>
      <section class="section" id="c-practice">${sectionHead(t("secPractice"), t("tenQ"))}<div class="games-tabs"></div><div class="game-host"></div></section>`;
    mountGames($("#c-practice", view), "conjugaison", [{ type: "fill", title: t("gConjT"), inst: t("gConjI"), gen: conjItems }], { lesson: null, next: null });
  }

  /* ---------- summary page ---------- */
  function renderResume(view) {
    const S = R(SUMMARY);
    const total = S.reduce((a, s) => a + s.r.length, 0);
    view.innerHTML = `
      <div class="plaque-wrap">
        ${plaque(t("rArr"), "Résumé des règles", t("rSub", { n: total }))}
        <p class="lead">${t("rLead")}</p>
      </div>
      <div class="dl-card"><div><h3 class="h3">${t("rDlTitle")}</h3><p>${t("rDlText", { n: total })}</p><p class="dl-status" id="dlStatus" aria-live="polite"></p></div><button type="button" class="btn primary" id="dlRules">${ICON.dl}${t("download")}</button></div>
      <div class="rules">${S.map((s) => `<section><h3>${esc(s.t)}</h3><ol>${s.r.map((r) => `<li><div>${r[0]}<span class="ex">${esc(r[1])}</span></div></li>`).join("")}</ol></section>`).join("")}</div>`;
    wireDownload($("#dlRules", view), $("#dlStatus", view), () => t("fileRules"), pdfRules);
  }

  /* ---------- plan page ---------- */
  function renderPlan(view) {
    const checks = R(CHECKLIST);
    let state = store.get("checklist", []);
    if (!Array.isArray(state)) state = [];
    view.innerHTML = `
      <div class="plaque-wrap">
        ${plaque(t("pArr"), "Plan d'étude", t("pSub"))}
        <p class="lead">${t("pLead")}</p>
      </div>
      ${chipsNav([["p-weeks", t("chWeeks")], ["p-week", t("chWeek")], ["p-spaced", t("chSpaced")], ["p-check", t("chCheck")]])}
      <section class="section" id="p-weeks">${sectionHead(t("hWeeks"))}${table({ h: t("weeksHead"), r: R(PLAN_WEEKS) })}</section>
      <section class="section" id="p-week">${sectionHead(t("hWeek"))}${table({ h: t("weekHead"), r: R(PLAN_DAYS) })}</section>
      <section class="section" id="p-spaced">${sectionHead(t("hSpaced"))}
        <div class="prose"><p>${t("spacedText")}</p></div>
        <ol class="spaced">${[0, 1, 3, 7, 14, 30, 60].map((d) => `<li><span class="c">${d}</span>${t("day", { d })}</li>`).join("")}</ol>
        <div class="note tip"><span class="tag">Astuce</span><div>${t("spacedTip")}</div></div>
        ${links([["Anki", "https://apps.ankiweb.net/", t("lAnki")], ["RFI · Journal en français facile", "https://www.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/", t("lRfi")], ["Podcast Français Facile", "https://www.podcastfrancaisfacile.com/", t("lPff")]])}
      </section>
      <section class="section" id="p-check">${sectionHead(t("hCheck"), `<span id="ckCount">0</span> / ${checks.length}`)}
        <ul class="checklist">${checks.map((c, i) => `<li><label><input type="checkbox" id="ck${i}" data-i="${i}" ${state[i] ? "checked" : ""}><span>${c}</span></label></li>`).join("")}</ul>
      </section>`;
    const cnt = $("#ckCount", view);
    const upd = () => { cnt.textContent = $$(".checklist input:checked", view).length; };
    upd();
    $(".checklist", view).addEventListener("change", (e) => {
      const inp = e.target.closest("input[data-i]"); if (!inp) return;
      state[+inp.dataset.i] = inp.checked; store.set("checklist", state); upd();
      if ($$(".checklist input:checked", view).length === checks.length) { confetti(); toast(t("checkDone")); }
    });
  }

  /* ---------- files: PDF + progress export ---------- */
  let jsPDFPromise = null;
  function loadJsPDF() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if (!jsPDFPromise) {
      jsPDFPromise = new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
        s.onload = () => (window.jspdf && window.jspdf.jsPDF ? res(window.jspdf.jsPDF) : rej(new Error("jspdf")));
        s.onerror = () => { jsPDFPromise = null; rej(new Error("jspdf")); };
        document.head.appendChild(s);
      });
    }
    return jsPDFPromise;
  }
  let dlPromise = null;
  function getDownloads() {
    if (!dlPromise) {
      dlPromise = (window.claude && typeof window.claude.use === "function")
        ? window.claude.use("downloads").catch(() => null)
        : Promise.resolve(undefined); /* undefined = plain browser outside the Claude viewer */
    }
    return dlPromise;
  }
  /* Saves a Blob through the viewer's download capability, or a plain link outside the viewer. Returns true when saved. */
  async function saveFile(filename, blob, statusEl) {
    const status = (m) => { if (statusEl) statusEl.textContent = m; };
    try {
      const dl = await getDownloads();
      if (dl) {
        status(t("confirmDl"));
        await dl.save({ filename, data: blob });
        status("");
        return true;
      }
      if (dl === undefined) {
        const u = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = u; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(u), 5000);
        status("");
        return true;
      }
      status(t("dlOff"));
      return false;
    } catch (err) {
      const code = err && err.code;
      if (code === "declined") status(t("declined"));
      else if (code === "rate_limited") status(t("rateLimited"));
      else status(t("dlOff"));
      return false;
    }
  }
  const pdfText = (html) => strip(html)
    .replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/→/g, "->").replace(/↔/g, "<->").replace(/[−–—]/g, "-")
    .replace(/…/g, "...").replace(/œ/g, "oe").replace(/Œ/g, "OE").replace(/‿/g, "_").replace(/≠/g, "<>").replace(/ /g, " ")
    .replace(/[^\x00-\xff]/g, "");

  function wireDownload(btn, statusEl, filenameFn, build) {
    const status = (m) => { statusEl.textContent = m; };
    getDownloads().then((dl) => { if (dl === null) { btn.hidden = true; status(t("dlOff")); } });
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      status(t("generating"));
      try {
        const JsPDF = await loadJsPDF();
        const blob = build(JsPDF).output("blob");
        const name = filenameFn();
        if (await saveFile(name, blob, statusEl)) { status(t("savedPdf", { f: name })); toast(t("pdfReady", { f: name })); }
      } catch (err) {
        status(t("pdfFail"));
      } finally {
        btn.disabled = false;
      }
    });
  }

  const C = { blue: [33, 62, 140], red: [196, 48, 58], ink: [20, 27, 45], muted: [86, 96, 122], line: [216, 222, 233], pale: [235, 239, 246] };
  function pdfFrame(doc, title, subtitle) {
    const W = 210, M = 16;
    let y = 0;
    function stripe() {
      doc.setFillColor(...C.blue); doc.rect(0, 0, 70, 4, "F");
      doc.setFillColor(...C.pale); doc.rect(70, 0, 70, 4, "F");
      doc.setFillColor(...C.red); doc.rect(140, 0, 70, 4, "F");
      y = 16;
    }
    stripe();
    doc.setFont("times", "bold"); doc.setFontSize(22); doc.setTextColor(...C.ink);
    doc.text(pdfText(title), M, y + 4); y += 11;
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...C.muted);
    doc.text(doc.splitTextToSize(pdfText(subtitle), W - 2 * M), M, y); y += 9;
    return {
      W, M, CW: W - 2 * M,
      get y() { return y; }, set y(v) { y = v; },
      ensure(h) { if (y + h > 280) { doc.addPage(); stripe(); } },
      footer() {
        const n = doc.getNumberOfPages();
        for (let p = 1; p <= n; p++) {
          doc.setPage(p); doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(...C.muted);
          doc.text(pdfText(t("pdfFooter")), M, 290);
          doc.text(pdfText(t("pdfPage", { p, n })), W - M, 290, { align: "right" });
        }
      }
    };
  }
  function pdfRules(JsPDF) {
    const doc = new JsPDF({ unit: "mm", format: "a4" });
    const f = pdfFrame(doc, t("pdfRulesTitle"), t("pdfRulesSub"));
    let n = 0;
    R(SUMMARY).forEach((sec) => {
      f.ensure(16);
      doc.setFont("times", "bold"); doc.setFontSize(14); doc.setTextColor(...C.blue);
      doc.text(pdfText(sec.t), f.M, f.y); f.y += 2;
      doc.setDrawColor(...C.line); doc.setLineWidth(0.3); doc.line(f.M, f.y, f.W - f.M, f.y); f.y += 5.5;
      sec.r.forEach((r) => {
        n++;
        doc.setFont("helvetica", "normal"); doc.setFontSize(10);
        const rule = doc.splitTextToSize(pdfText(r[0]), f.CW - 10);
        doc.setFont("times", "italic"); doc.setFontSize(10.5);
        const ex = doc.splitTextToSize(pdfText(r[1]), f.CW - 10);
        f.ensure(rule.length * 4.6 + ex.length * 4.5 + 3);
        doc.setFont("courier", "bold"); doc.setFontSize(9); doc.setTextColor(...C.blue);
        doc.text(String(n).padStart(2, "0"), f.M, f.y);
        doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(...C.ink);
        doc.text(rule, f.M + 10, f.y); f.y += rule.length * 4.6;
        doc.setFont("times", "italic"); doc.setFontSize(10.5); doc.setTextColor(...C.muted);
        doc.text(ex, f.M + 10, f.y); f.y += ex.length * 4.5 + 3;
      });
      f.y += 3;
    });
    f.footer();
    return doc;
  }
  function pdfVerbs(JsPDF) {
    const doc = new JsPDF({ unit: "mm", format: "a4" });
    const f = pdfFrame(doc, t("pdfVerbsTitle"), t("pdfVerbsSub"));
    const X1 = f.M, X2 = f.M + 44, X3 = f.M + 132, W2 = 84, W3 = f.W - f.M - X3;
    let lastHead = "";
    VERBS.forEach((v) => {
      const head = verbHead(v);
      doc.setFont("helvetica", "normal"); doc.setFontSize(9.5);
      const cons = doc.splitTextToSize(pdfText(v.cons.join(" · ")), W2);
      doc.setFontSize(9);
      const es = doc.splitTextToSize(pdfText(v.es), W3);
      doc.setFont("helvetica", "bold"); doc.setFontSize(9.5);
      const vv = doc.splitTextToSize(pdfText(v.v), 42);
      const h = Math.max(cons.length, es.length, vv.length) * 4.2 + 1.8;
      if (head !== lastHead) {
        f.ensure(h + 10);
        doc.setFont("times", "bold"); doc.setFontSize(12.5); doc.setTextColor(...C.blue);
        doc.text(pdfText(head), X1, f.y + 1); f.y += 3;
        doc.setDrawColor(...C.line); doc.setLineWidth(0.3); doc.line(X1, f.y, f.W - f.M, f.y); f.y += 4.5;
        lastHead = head;
      } else f.ensure(h);
      doc.setFont("helvetica", "bold"); doc.setFontSize(9.5); doc.setTextColor(...C.ink); doc.text(vv, X1, f.y);
      doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(...C.blue); doc.text(cons, X2, f.y);
      doc.setFontSize(9); doc.setTextColor(...C.muted); doc.text(es, X3, f.y);
      f.y += h;
    });
    f.ensure(12);
    doc.setFont("helvetica", "italic"); doc.setFontSize(8); doc.setTextColor(...C.muted);
    doc.text(doc.splitTextToSize(pdfText(t("pdfSource")), f.CW), f.M, f.y + 4);
    f.footer();
    return doc;
  }

  /* ---------- router ---------- */
  const PAGES = { verbes: renderVerbs, conjugaison: renderConj, resume: renderResume, plan: renderPlan };
  let currentId = null;
  let resumeRequested = false;
  document.addEventListener("click", (e) => { if (e.target.closest("[data-resume]")) resumeRequested = true; }, true);

  function route(opts) {
    const id = decodeURIComponent((location.hash || "").slice(1)) || "accueil";
    const view = $("#view");
    if (io) { io.disconnect(); io = null; }
    if (seenIo) { seenIo.disconnect(); seenIo = null; }
    Object.keys(seenTimers).forEach((k) => clearTimeout(seenTimers[k]));
    Sound.stop();
    currentId = LESSONS[id] || PAGES[id] ? id : null;
    if (LESSONS[id]) renderLesson(view, id);
    else if (PAGES[id]) PAGES[id](view);
    else renderHome(view);
    view.classList.remove("enter"); void view.offsetWidth; view.classList.add("enter");
    wireChips(view, LESSONS[id] ? id : null);
    markCurrent(id);
    closeNav();
    const title = LESSONS[id] ? LESSONS[id].name : (TOOLS.find((x) => x.id === id) || {}).name;
    document.title = title ? `${title} · Ligne B1` : "Ligne B1 · Français";
    const target = opts && typeof opts.keepScroll === "number" ? opts.keepScroll
      : (resumeRequested && last.id === id && last.y ? last.y : 0);
    resumeRequested = false;
    window.scrollTo(0, target);
    if (currentId && last.id !== id) saveLast(currentId, "");
  }

  /* remember where the reader is inside a page */
  let scrollT;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollT);
    scrollT = setTimeout(() => { if (currentId) { last = Object.assign({}, last, { id: currentId, y: Math.round(window.scrollY), at: Date.now() }); store.set("last", last); } }, 500);
  }, { passive: true });

  /* ---------- mobile nav ---------- */
  const menuBtn = $("#menuBtn");
  function closeNav() { document.body.classList.remove("nav-open"); menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => {
    const open = !document.body.classList.contains("nav-open");
    document.body.classList.toggle("nav-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    if (open) { const cur = $(".stop a[aria-current]"); if (cur) cur.scrollIntoView({ block: "center" }); }
  });
  $("#scrim").addEventListener("click", closeNav);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
  $("#route").addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (a && a.getAttribute("href") === location.hash) { closeNav(); window.scrollTo(0, 0); }
  });

  window.addEventListener("hashchange", () => route());
  applyStaticI18n();
  renderSide();
  route();
})();
