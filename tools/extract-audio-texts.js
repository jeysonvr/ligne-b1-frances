// Collects every French text that has a sound button, grouped by page (one audio sprite per group).
// Usage: node tools/extract-audio-texts.js > tools/.cache/texts.json
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const src = path.join(__dirname, "..", "src");
const files = ["20-lessons-a.js", "21-lessons-b.js", "22-verbs.js", "23-summary.js"];
const code = files.map((f) => fs.readFileSync(path.join(src, f), "utf8")).join("\n") + "\n;({ MODULES, LESSONS, VERBS, speakText })";
const { MODULES, LESSONS, VERBS, speakText } = vm.runInNewContext(code, {});

const seen = new Set();
const groups = [];
function add(group, list) {
  const texts = [];
  list.forEach((t) => {
    const k = speakText(t);
    if (k && !seen.has(k)) { seen.add(k); texts.push(k); }
  });
  if (texts.length) groups.push({ name: group, texts });
}

MODULES.forEach((m) => m.lessons.forEach((id) => {
  const L = LESSONS[id];
  const vocab = L.vocabGroups ? L.vocabGroups.flatMap((g) => g.items) : L.vocab;
  const list = vocab.map((v) => v[0]).concat(L.examples.map((e) => e[0]));
  L.games.filter((g) => g.type === "listen").forEach((g) => g.pairs.forEach((p) => list.push(...p)));
  L.games.filter((g) => g.type === "order").forEach((g) => g.items.forEach((it) => list.push(it[0].split("|").join(" "))));
  add(id, list);
}));
add("verbes", VERBS.flatMap((v) => [v.v].concat(v.ex ? [v.ex] : [])));

process.stdout.write(JSON.stringify({ groups }, null, 1));
