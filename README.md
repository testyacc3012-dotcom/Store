# Brainrot Store (Unofficial Fan Storefront)

Static site, no build step. Not affiliated with Roblox Corporation — disclaimers are
included on every page.

## Folder structure

```
index.html            → homepage / storefront grid
details.html           → details page template (reads ?id= from the URL)
error-444.html         → "More…" button destination
assets/
  css/styles.css        → all styling
  js/app.js             → renders cards + details page, handles the promo box
  data/brainrots.js      → the 10 Brainrots: names, prices, images, descriptions
  images/                → Brainrot pictures (currently placeholder art)
README.md
```

## Put this on GitHub Pages

1. Create a new repo (e.g. `brainrot-store`).
2. Upload everything in this folder to the repo root, **keeping the folder structure**
   — `assets/css`, `assets/js`, `assets/data`, `assets/images` all need to stay nested
   the way they are.
3. Settings → Pages → Source → Deploy from branch → `main` / root → Save.
4. Your site will be live at `https://YOUR-USERNAME.github.io/brainrot-store/`.

## Swapping in the real Brainrots later

Everything about the 10 items lives in **one file**: `assets/data/brainrots.js`.
You don't need to touch any HTML.

For each entry, update:
- `name`
- `rarity` (`"Secret"` or `"OG"` — anything else falls back to the Secret color)
- `price` (a number like `2399`, or a range string like `"5,000 – 16,000"`)
- `image` — point this at the real picture's path
- `description`

To add real pictures: drop the image files into `assets/images/` and update the
`image` path for that entry to match the filename. Any common image format (png,
jpg, webp) works.

## The promo code

The code `FREENOW` is wired up in `assets/js/app.js` (see `VALID_CODES`). Entering
it just shows a confirmation message — it does **not** change any price or unlock a
special purchase flow, and it never asks for a Roblox password, cookie, or auth
code. If you want it to do something more later (like a real discount), that logic
lives in the `setupPromoForm()` function in `app.js`.

## Buy button

Every "Buy" button currently links to:
```
https://www.roblox.com/users/10529406848/profile?friendshipSourceType=PlayerSearch
```
set in `ROBLOX_PROFILE_URL` at the bottom of `assets/data/brainrots.js`. Update
that one line if the destination should change — it updates every Buy button on
the site at once.
