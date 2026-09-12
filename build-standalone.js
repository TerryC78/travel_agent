/*
 * Builds single self-contained HTML files by inlining styles.css and each
 * page's data / lang / app scripts:
 *
 *   index.html       -> trip.html             (East Coast 2026)
 *   yellowstone.html -> yellowstone-trip.html (Yellowstone 2026)
 *
 * Why: a one-file version is easy to keep PRIVATE and still use on a phone —
 * AirDrop it, email it to yourself, or drop it in iCloud/Files and open in
 * Safari. No GitHub Pages, no hosting, nothing public.
 *
 * Note: the per-day maps still load Leaflet + map tiles from a CDN, so the
 * maps need internet. Everything else (itinerary, checklists, weather
 * normals) works fully offline.
 *
 * Run:  node build-standalone.js
 */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const BUILDS = [
  { html: "index.html", scripts: ["data.js", "lang.js", "app.js"], out: "trip.html" },
  { html: "yellowstone.html", scripts: ["yellowstone-data.js", "yellowstone-lang.js", "app.js"], out: "yellowstone-trip.html" }
];

const css = read("styles.css");

for (const b of BUILDS) {
  let html = read(b.html);

  // Inline the local stylesheet (leave the Leaflet CDN <link> untouched).
  // Replacer functions avoid "$"-pattern surprises inside the inlined source.
  html = html.replace(/<link rel="stylesheet" href="styles\.css" \/>/, () => `<style>\n${css}\n</style>`);

  // Inline the local scripts in order (data, then lang overlay, then app).
  for (const s of b.scripts) {
    const js = read(s);
    html = html.replace(new RegExp(`<script src="${escRe(s)}"></script>`), () => `<script>\n${js}\n</script>`);
  }

  // Sanity check: no leftover references to the local files.
  const leftovers = ['href="styles.css"', ...b.scripts.map((s) => `src="${s}"`)].filter((ref) => html.includes(ref));
  if (leftovers.length) {
    console.error(`Build failed for ${b.html} — these local references were not inlined:`, leftovers);
    process.exit(1);
  }

  const out = path.join(dir, b.out);
  fs.writeFileSync(out, html);
  const kb = (fs.statSync(out).size / 1024).toFixed(1);
  console.log(`Built ${b.out} (${kb} KB) — one self-contained file. AirDrop/email it and open in any browser.`);
}
