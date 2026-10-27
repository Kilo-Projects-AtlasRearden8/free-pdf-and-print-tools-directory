# STATUS

## What was built

A freebies directory of no-account, free PDF/print tools, delivered as Markdown documentation (`README.md`) plus a static HTML site with client-side search (`index.html`). No build step, no server, no accounts, no affiliate links, no tracking.

Files:
- `index.html` — static site shell (search bar, category filter chips, tool cards)
- `style.css` — responsive card-based styling
- `app.js` — loads `tools.json`, renders cards, filters by search text and category entirely client side
- `tools.json` — 28 tool listings across 7 categories (the single data file driving the site)
- `README.md` — Markdown directory: overview, how-to-use, all tool listings, credits, license
- `package.json` — test/start scripts (`npm test`, `npm start`)
- `verify.js` — repeatable verification script (exits non-zero on any failure)
- `LICENSE` — MIT License, copyright line exactly: `Copyright (c) 2026 Asdale Dynamics, LLC`

Categories covered: merge, split, compress, sign, fill forms, large print, convert to ebook formats. Every listing includes cost, platform, steps, and official link.

Credit: Asdale Dynamics, LLC is credited in `README.md` and `index.html`; both carry the Asdale Dynamics, LLC attribution. This is Dylan Asdale's project (registered nurse turned AI author, founder of Asdale Dynamics, LLC, Indiana, formed Oct 2026), described in the README's About section.

## How to run

Open `index.html` in any browser. That's it — no install, no build step, no network required after the page loads (tools are bundled in `tools.json`).

Optional local preview:
```
npm start
# then open http://127.0.0.1:18080/index.html
```

Or with python directly:
```
python3 -m http.server 18080
open http://127.0.0.1:18080/index.html
```

## Tests / verification

Run the verification suite:
```
npm test
```
(`node verify.js`)

It checks: valid `tools.json`, site metadata, all 7 categories present, category labels defined, every listing has cost/platform/steps/official link, tool categories all defined, no duplicate ids, exact LICENSE copyright line, README credits Asdale Dynamics, LLC, `index.html` has search input/tools-grid and loads `app.js`/`style.css`, client-side fetch+filter implemented, no affiliate/referral markers, no secrets/API keys.

Verification results (run on 2026-10-27):
- `npm test` — ALL CHECKS PASSED (14/14)
- `tools.json` parses as valid JSON; 28 tools listed
- All 7 required categories present (merge, split, compress, sign, fill-forms, large-print, ebook-conversion)
- Every listing has cost, platform, steps, and an official `http(s)` link
- Client-side search/filter logic present in `app.js`; category and keyword filters return correct counts; empty results handled
- `index.html` served via local HTTP server returns HTTP 200; `tools.json` fetches with HTTP 200
- LICENSE contains the exact line `Copyright (c) 2026 Asdale Dynamics, LLC`
- README and index credit Asdale Dynamics, LLC
- Scan for affiliate/referral/UTM markers: none found (only the policy statement "No affiliate links")
- No secrets, API keys, or personal data in any file
- No `.github/workflows` files created
- Git initialized and committed as `Dylan Asdale <dylanasdale@users.noreply.github.com>`; no remote, no push, plain commit messages with no co-author trailers

## Known gaps

- Free online tools (PDF24, iLovePDF, Sejda) state "no account required for basic use" but enforce daily/page limits; heavy batch work needs the desktop/CLI options (qpdf, pdftk-java, Ghostscript, Calibre, LibreOffice).
- PDF24 online tools process files on PDF24's servers (deleted shortly after); for sensitive paperwork use the offline CLI/desktop tools instead.
- Large print via Ghostscript is command-line only; the browser print-scaling method is the no-install alternative.
- Ebook conversion from PDFs usually needs manual cleanup (Sigil is listed for that).
- Tool availability and pricing claims were not re-verified against each vendor's live site after authoring; check official links before relying on a specific tool.
- Not a medical device or advice directory; any healthcare framing is education only.
