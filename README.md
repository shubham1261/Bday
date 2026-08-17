# A Birthday Letter

A small, interactive birthday page built with vanilla HTML, CSS and JavaScript — a cover, a candle-blowing cake, a memory wall, and a final letter with a surprise reveal.

No frameworks, no build step. Open `index.html` and it runs.

---

## Files

```
birthday-letter/
├── index.html   → page structure
├── bday2.css    → all styling, layout, responsiveness, and animations
└── bday2.js    → all content (CONFIG) and interaction logic
```

All three files must stay in the same folder — `index.html` links to `bday2.css` and `bday2.js` by relative path.

---

## Features

- **Cover** — shows the birthday date
- **Cake scene** — blow out the candles by tapping a button, or by blowing into the mic
- **Memory wall** — nine photo slots with captions
- **Letter scene** — tap the envelope to open it and reveal a written message
- **Surprise reveal** — a bouquet, floating hearts, and a few loving words on tap
- Fully responsive, from small phones up to laptop screens
- Respects `prefers-reduced-motion` for anyone sensitive to animation

---

## How to view it

Just open `index.html` in any browser — double-click it, or drag it into a browser tab. Nothing needs to be installed or built.

---

## How to customize (source-code only)

This page has **no editable fields on the page itself** — nothing can be typed into or changed by whoever is viewing it. Every piece of content lives in one place: the `CONFIG` object at the very top of `script.js`.

Open `script.js` and edit:

| Field | What it controls |
|---|---|
| `day` | The birthday date shown on the cover and cake scene |
| `name` | The name shown on the memory wall and the letter |
| `message` | The full letter text (use a blank line for a paragraph break) |
| `photos` | Nine `{ src, caption }` entries — set `src` to an image URL to show a photo, or leave it `""` for a soft placeholder |
| `surpriseWords` | The short loving phrases shown on the final surprise screen |

Save the file, then reload `index.html` (or re-upload it wherever it's hosted) to see the changes.

> Styling, layout, and animations are controlled entirely in `bday2.css`. Colors are defined once at the top of the file under `:root`, so changing the palette is a matter of editing a handful of variables there.

---

## Editing the source code on mobile

You don't need a laptop to make changes — any of the following work well from a phone:

**Android**
- **Acode** (free, Play Store) — full code editor with syntax highlighting; open the folder directly and edit `bday2.js`
- **Termux** + `nano`/`vim` — for anyone comfortable with a terminal

**iPhone / iPad**
- **Textastic** or **Buffer Editor** — code editors built for iOS/iPadOS with proper HTML/CSS/JS support
- **Working Copy** (if the files are in a Git repo) — clone, edit, commit, all from the app

**Any phone, no install needed**
- **GitHub.dev** — if the files are pushed to a GitHub repo, press `.` on the repo page (or change the URL from `github.com` to `github.dev`) to open a full VS Code editor in the mobile browser
- **StackBlitz** or **CodeSandbox** — upload or import the folder and edit in a browser-based editor
After editing on mobile, re-open `index.html` in your mobile browser to preview the changes immediately — there's no build step to run.

---

## Notes

- The photo slots expect direct image URLs. If your images are on your phone, upload them somewhere first (e.g. a GitHub repo, Imgur, or Google Drive with a shareable direct link) and paste that link into `src`.
- Everything works offline once the fonts have loaded once, except the Google Fonts import, which needs an internet connection the first time the page loads.


## Development
This project was initially drafted with the assistance of Artificial Intelligence . The UI, visual customization, animations and final implementation were independently customized by Shivani-- Storymint Studio.
