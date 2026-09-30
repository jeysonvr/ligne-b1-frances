// Sanity checks for the course data in both explanation languages, and audio coverage.
const fs = require("fs"), path = require("path"), vm = require("vm");
const src = path.join(__dirname, "..", "src");
const files = ["20-lessons-a.js", "21-lessons-b.js", "22-verbs.js", "23-summary.js", "24-audio-map.js", "25-i18n.js"];
const code = files.map((f) => fs.readFileSync(path.join(src, f), "utf8")).join("\n") + "\n;({ MODULES, TOOLS, LESSONS, VERBS, SUMMARY, CHECKLIST, UI, AUDIO_MAP, speakText })";
const D = vm.runInNewContext(code, {});
const errs = [];
function walkBi(v, where) {
  if (Array.isArray(v)) return v.forEach((x, i) => walkBi(x, where + "[" + i + "]"));
  if (v && typeof v === "object") {
    if (v.__bi) { if (!v.es || !v.fr) errs.push("empty bi at " + where); return; }
    for (const k in v) walkBi(v[k], where + "." + k);
  }
}
const R = (v, L) => Array.isArray(v) ? v.map((x) => R(x, L)) : v && typeof v === "object" ? (v.__bi ? v[L] : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, R(x, L)]))) : v;
walkBi(D.LESSONS, "LESSONS"); walkBi(D.SUMMARY, "SUMMARY"); walkBi(D.MODULES, "MODULES"); walkBi(D.TOOLS, "TOOLS");
const ids = D.MODULES.flatMap((m) => m.lessons);
["es", "fr"].forEach((lang) => ids.forEach((id) => {
  const L = R(D.LESSONS[id], lang);
  if (typeof L.goal !== "string" || typeof L.sub !== "string") errs.push(`${lang} ${id} goal/sub`);
  L.theory.forEach((b, i) => { if (b[1] === undefined || b[1] === "@CHECKLIST") errs.push(`${lang} ${id} theory ${i}`); });
  L.games.forEach((g, gi) => {
    if (typeof g.title !== "string" || typeof g.inst !== "string") errs.push(`${lang} ${id} game ${gi} title`);
    if (g.type === "mcq") g.items.forEach((it) => { if (new Set(it.o).size !== it.o.length || it.o.some((o) => typeof o !== "string")) errs.push(`${lang} ${id} opts ${it.q}`); });
    if (g.type === "fill") g.items.forEach((it) => { const n = (it.q.match(/___/g) || []).length; if (n !== it.a.length) errs.push(`${lang} ${id} blanks ${it.q}`); });
    if (g.type === "sort") g.items.forEach((it) => { if (it[1] >= g.buckets.length || typeof it[0] !== "string") errs.push(`${lang} ${id} sort ${it[0]}`); });
  });
}));
const keysEs = Object.keys(D.UI.es), keysFr = Object.keys(D.UI.fr);
keysEs.filter((k) => !keysFr.includes(k)).forEach((k) => errs.push("UI.fr missing " + k));
keysFr.filter((k) => !keysEs.includes(k)).forEach((k) => errs.push("UI.es missing " + k));
// audio coverage
let missing = [];
ids.forEach((id) => {
  const L = D.LESSONS[id];
  const vocab = L.vocabGroups ? L.vocabGroups.flatMap((g) => g.items) : L.vocab;
  vocab.map((v) => v[0]).concat(L.examples.map((e) => e[0])).forEach((t) => { if (!D.AUDIO_MAP[D.speakText(t)]) missing.push(t); });
});
D.VERBS.forEach((v) => { if (!D.AUDIO_MAP[D.speakText(v.v)]) missing.push(v.v); });
console.log("audio clips:", Object.keys(D.AUDIO_MAP).length, "missing:", missing.length, missing.slice(0, 5));
console.log(errs.length ? errs.join("\n") : "DATA_OK (es + fr)");
