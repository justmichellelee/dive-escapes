# Dive escapes from Singapore

A free, static website (map + month filter + spot guides) hosted on GitHub Pages.

## Files
- `index.html` — the page (layout, map, filters). You rarely need to touch this.
- `spots.js` — **all the content**. Edit this to add, remove or update spots.

## Put it online (one-time, ~5 minutes, free)
1. Create a free account at https://github.com.
2. Click **+ → New repository**. Name it e.g. `dive-escapes`. Set it to **Public**. Click **Create repository**.
3. On the new repo page click **uploading an existing file**, drag in `index.html`, `spots.js` and `README.md`, then **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source = **Deploy from a branch**, Branch = **main**, folder = **/ (root)**. Save.
5. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/dive-escapes/`.

## Update a spot (works from your phone too)
1. Open your repo on github.com → click `spots.js` → click the **pencil** (Edit).
2. Change the text you want (e.g. a ferry price, months, a new dive shop).
3. Click **Commit changes**. The live site refreshes in about a minute.

### Add a new spot
Copy any existing `{ ... },` block in `spots.js`, paste it below, and change:
- `id` (unique, no spaces), `name`, `country`, `type` (`"weekend"` or `"liveaboard"`)
- `lat` / `lng` — in Google Maps, long-press or right-click the spot to copy coordinates
- `open` and `best` — month numbers, 1 = Jan … 12 = Dec
- everything else is free text

The field guide at the top of `spots.js` explains every field.

### If the page goes blank after an edit
It's almost always a missing comma or quote. Open the repo → **History** on `spots.js` → compare with the previous version, or paste `spots.js` into https://jshint.com to find the line.

## Notes
- Map tiles: OpenStreetMap / CARTO (free, no key).
- Info changes often — each spot has a `verify` list and a `checked` date. Update `checked` when you re-confirm details.
