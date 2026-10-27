# Diving Possibilities near Singapore

A free website (hosted on GitHub Pages) to plan dive trips from Singapore: a map, a one-sentence search, swipe-able spot rows, season calendar, public-holiday leave hacks, a trip-builder quiz, and guides to getting certified.

Live site: `https://<your-username>.github.io/dive-escapes/`

## What's in this folder
| File / folder | What it does | Edit it when… |
|---|---|---|
| `spots.js` | **All dive spot info** (seasons, routes, fees, shops, trip links, photos) | you want to add/change a spot |
| `index.html` | Home page: layout, map, search, rows, holiday list, quiz | you change public holidays (search `HOLIDAYS`) or the header text |
| `open-water.html` | Open Water licence guide | prices/courses change |
| `advanced-open-water.html` | Advanced Open Water guide | prices/courses change |
| `events.html` | Dive events in Singapore | new events (search `EVENTS`) |
| `pages.css`, `pages.js` | Shared look + doodles for the 3 guide pages | rarely |
| `doodles/` | 20 white line-art PNGs used in the headers | you want different doodles (keep the same file names) |
| `photos/` | Cover photos for spots | you add a photo |

## Everyday edits (works from your phone)
1. Open the file on github.com, then tap the **pencil** (Edit).
2. Change the text inside the quotes.
3. Tap **Commit changes**. The site updates in about a minute; hard-refresh to see it (Ctrl+Shift+R).

**Add a cover photo**
1. Upload the image into the `photos` folder (on a computer: *Add file → Upload files* while inside `photos`).
2. In `spots.js`, under that spot's `id:` line, add:
   `photo: "photos/yourfile.jpg", photoCredit: "© Name",`

**Add a spot:** copy any `{ … },` block in `spots.js`, paste it below, and change the `id` (unique, no spaces), name, `lat`/`lng`, months, and text. The field guide is at the top of `spots.js`.

**Update public holidays:** in `index.html`, search `HOLIDAYS` and add next year's dates as `"YYYY-MM-DD"`.

**Add an event:** in `events.html`, search `EVENTS` and copy a `{ … },` block. Past events hide themselves.

## If something breaks
It's almost always a missing comma or quote. Open the file and tap **History**, then compare with the last working version, or paste the file into jshint.com to find the line.

## Notes
- Map: © OpenStreetMap contributors.
- Wishlist and notes are saved in each visitor's own browser, not shared.
- Info changes often. Each spot has a `verify` list and a `checked` date.
- Only use photos you own or have permission to use.
