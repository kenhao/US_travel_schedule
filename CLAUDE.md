# USA West Coast 2026 — Travel Schedule Website

## Project Overview
Static travel itinerary website for a 5-person USA West Coast road trip (Apr 2–17, 2026).
Deployed on GitHub Pages at: https://kenhao.github.io/US_travel_schedule/

## File Structure
```
index.html   — HTML skeleton + all CSS styles
data.js      — All itinerary data (days array with spots, images, links)
app.js       — All JavaScript logic (tabs, card builder, Yosemite map, plane animation, lightbox)
CLAUDE.md    — This file
```

## Key Design Decisions
- **No build tools** — Pure HTML/CSS/JS, no npm, no bundler. Must work by opening index.html directly.
- **GitHub Pages** — Push to `main` branch, Pages auto-deploys from root.
- **Mobile-first RWD** — Primary use is on mobile phones.
- **Language** — UI labels/titles stay English; content descriptions in Traditional Chinese (繁體中文); spot/place names stay in English.
- **Images** — Wikimedia Commons direct URLs only (stable, free). No Unsplash API (it's dead).

## How to Add a New Day
Edit `data.js`. Each day object looks like:
```js
{
  num: '8',
  sub: 'Day Title in Chinese',
  desc: 'Subtitle description',
  cover: { url: 'https://upload.wikimedia.org/...', caption: 'Caption text' }, // optional hero image
  tl: [  // timeline items
    {
      t: '9:00',          // time (empty string if no time)
      dot: 'rust',        // 'rust' | 'sky' | 'gray'
      n: 'Spot Name',     // name — keep in English
      d: 'Description',   // detail text in Chinese
      tag: '活動',        // optional: '活動'|'餐飲'|'住宿'|'健行'|'租車'
      mapUrl: 'https://maps.google.com/?q=...', // optional
      webUrl: 'https://...',                     // optional
      img: { url: 'https://upload.wikimedia.org/...', caption: 'Alt text' }, // optional single image
      imgs: [{ url: '...', cap: '...' }],  // optional multiple images (shows as grid)
      food: [{ label: 'Restaurant Name', mapUrl: '...' }], // optional food choices
      places: [{ label: 'Place', mapUrl: '...' }],         // optional place chips
    }
  ]
}
```

## How to Add Images to a Spot
Use Wikimedia Commons thumbnail URLs:
```
https://upload.wikimedia.org/wikipedia/commons/thumb/[hash]/[filename]/600px-[filename]
```
- Single image: use `img: { url, caption }` on the timeline item
- Multiple images: use `imgs: [{ url, cap }, ...]` (renders as 2-column grid)
- Day cover: use `cover: { url, caption }` on the day object

## Yosemite Map
- Built as inline SVG in `app.js → buildYosMap()`
- Each call gets a unique `mapId` to avoid DOM ID collisions
- Day 5 uses `yosDay: 1`, Day 6 uses `yosDay: 2`
- To adjust spot positions, edit coordinates in `day1` / `day2` SVG strings inside `buildYosMap()`

## Deployment
```bash
git add -A
git commit -m "Your message"
git push
```
GitHub Pages auto-deploys within ~1 minute.

## Common Tasks
- **Add LA itinerary days**: Edit the `{ num: '8–11', ... }` entry in `data.js`, replace with individual days
- **Update budget**: Edit the HTML table in `index.html` directly (Budget tab)
- **Change accommodation info**: Edit the Stays tab HTML in `index.html`
- **Fix broken image**: Replace the `url` in `data.js` with a working Wikimedia URL
