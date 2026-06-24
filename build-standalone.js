/*
 * Builds a single self-contained HTML file (trip.html) by inlining
 * styles.css, data.js, and app.js into index.html.
 *
 * Why: a one-file version is easy to keep PRIVATE and still use on a phone —
 * AirDrop it, email it to yourself, or drop it in iCloud/Files and open in
 * Safari. No GitHub Pages, no hosting, nothing public.
 *
 * Note: the per-day maps still load Leaflet + map tiles from a CDN, so the
 * maps need internet. Everything else (itinerary, budget, checklists) works
 * fully offline.
 *
 * Run:  node build-standalone.js
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");

let html = read("index.html");
const css = read("styles.css");
const dataJs = read("data.js");
const langJs = read("lang.js");
const appJs = read("app.js");

// Inline the local stylesheet (leave the Leaflet CDN <link> untouched).
html = html.replace(
  /<link rel="stylesheet" href="styles\.css" \/>/,
  `<style>\n${css}\n</style>`
);

// Inline the local scripts in order (data, then lang overlay, then app).
html = html.replace(
  /<script src="data\.js"><\/script>/,
  `<script>\n${dataJs}\n</script>`
);
html = html.replace(
  /<script src="lang\.js"><\/script>/,
  `<script>\n${langJs}\n</script>`
);
html = html.replace(
  /<script src="app\.js"><\/script>/,
  `<script>\n${appJs}\n</script>`
);

// Sanity check: no leftover references to the local files.
const leftovers = ['href="styles.css"', 'src="data.js"', 'src="lang.js"', 'src="app.js"']
  .filter((ref) => html.includes(ref));
if (leftovers.length) {
  console.error("Build failed — these local references were not inlined:", leftovers);
  process.exit(1);
}

const out = path.join(dir, "trip.html");
fs.writeFileSync(out, html);
const kb = (fs.statSync(out).size / 1024).toFixed(1);
console.log(`Built trip.html (${kb} KB) — one self-contained file. AirDrop/email it and open in any browser.`);
