# Brainrot Store (Unofficial Fan Storefront)

Flat structure on purpose — every file lives in one folder, no subfolders. Less to
get wrong when uploading from a phone.

## Files

```
index.html       → homepage / storefront grid
details.html     → details page (works for all 10 via ?id=)
error-444.html   → "More…" destination
styles.css       → all styling
app.js           → renders cards + details page, handles the promo box
brainrots.js     → the 10 Brainrots: names, prices, images, descriptions
brainrot-1.webp … brainrot-10.jpeg → the pictures
README.md
```

## Put this on GitHub Pages

1. Upload every file above directly into the repo root — no folders, just drop
   them all in flat, same as they are here.
2. Settings → Pages → Source → Deploy from branch → `main` / root → Save.
3. Site goes live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

## Updating Brainrots later

Everything about the 10 items lives in **one file**: `brainrots.js`. Update
`name`, `rarity`, `price`, `image` (just the filename, e.g. `"my-pic.png"`), and
`description` there — no HTML editing needed.

To add a picture: upload the image file straight into the repo root (same place
as everything else) and set `image` to its exact filename.

Still on placeholder art: **Examen Bros**, **Pizza and Ranch**, **Noo my Examen**
(entries 4, 5, 6). Everything else already has the real picture.

## Promo code

`FREENOW` is in `app.js` (`VALID_CODES`). It just shows a confirmation message —
no price change, no account info requested.

## Buy button

Set in `brainrots.js` as `ROBLOX_PROFILE_URL`, near the bottom of the file.
