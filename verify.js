// verify.js — repeatable verification for the Free PDF & Print Tools Directory.
// Run: node verify.js   (exits non-zero on any failure)

const fs = require('fs');
const path = require('path');

const root = process.cwd();
let failures = 0;

function check(name, fn) {
  try {
    const ok = fn();
    console.log(`${ok ? 'PASS' : 'FAIL'}: ${name}`);
    if (!ok) failures += 1;
  } catch (err) {
    console.log(`FAIL: ${name} — ${err.message}`);
    failures += 1;
  }
}

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function json(file) {
  return JSON.parse(read(file));
}

const requiredCategories = [
  'merge', 'split', 'compress', 'sign', 'fill-forms', 'large-print', 'ebook-conversion'
];

const affiliateRe = /affiliate|referral|utm_source|partner_id|aff_id|[?&]ref=/i;
const policyRe = /no affiliate links/i;
const secretsRe = /sk_live_|sk_test_|sk_-|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{36}|AIza[0-9A-Za-z\-_]{35}|password\s*=/i;

check('tools.json is valid JSON', () => {
  const d = json('tools.json');
  return Boolean(d && d.tools && Array.isArray(d.tools));
});

check('tools.json has site metadata', () => {
  const d = json('tools.json');
  const s = d.site;
  return Boolean(s && s.title && s.owner && s.description && s.year === 2026);
});

check('all 7 required categories present', () => {
  const d = json('tools.json');
  const keys = new Set(d.categories.map((c) => c.key));
  return requiredCategories.every((k) => keys.has(k));
});

check('category labels present for every key', () => {
  const d = json('tools.json');
  const labels = new Map(d.categories.map((c) => [c.key, c.label]));
  return requiredCategories.every((k) => Boolean(labels.get(k)));
});

check('every listing has required fields', () => {
  const d = json('tools.json');
  return d.tools.every((t) =>
    t.id && t.name && t.category && t.cost && t.platform &&
    Array.isArray(t.steps) && t.steps.length > 0 &&
    t.officialLink && t.officialLink.startsWith('http')
  );
});

check('every tool category is a defined category', () => {
  const d = json('tools.json');
  const keys = new Set(d.categories.map((c) => c.key));
  return d.tools.every((t) => keys.has(t.category));
});

check('no duplicate tool ids', () => {
  const d = json('tools.json');
  const ids = d.tools.map((t) => t.id);
  return ids.length === new Set(ids).size;
});

check('LICENSE has exact copyright line', () => {
  const lic = read('LICENSE');
  return lic.includes('Copyright (c) 2026 Asdale Dynamics, LLC');
});

check('README credits Asdale Dynamics, LLC', () => {
  const readme = read('README.md');
  return readme.includes('Asdale Dynamics, LLC');
});

check('index.html exists with search input and tools grid', () => {
  const html = read('index.html');
  return html.includes('<input') &&
    html.includes('id="search"') &&
    html.includes('id="tools-grid"') &&
    html.includes('app.js') &&
    html.includes('style.css');
});

check('no affiliate/referral markers (excluding policy statement)', () => {
  const files = ['index.html', 'README.md', 'app.js', 'style.css', 'tools.json'];
  for (const file of files) {
    const lines = read(file).split('\n');
    for (const line of lines) {
      if (policyRe.test(line)) continue;
      if (affiliateRe.test(line)) return false;
    }
  }
  return true;
});

check('no secrets or API keys', () => {
  const files = ['index.html', 'README.md', 'app.js', 'style.css', 'tools.json', 'LICENSE'];
  for (const file of files) {
    if (secretsRe.test(read(file))) return false;
  }
  return true;
});

check('app.js implements client-side fetch + filter', () => {
  const js = read('app.js');
  return js.includes('fetch') && js.includes('filter') && js.includes('tools.json');
});

console.log(`\n${failures === 0 ? 'ALL CHECKS PASSED' : failures + ' CHECK(S) FAILED'}`);
process.exit(failures === 0 ? 0 : 1);
