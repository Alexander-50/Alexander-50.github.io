# Alexander P.B. — Portfolio

A static, dependency-free personal portfolio site. No build step, no framework, no backend, no tracking.

## Requirements

Nothing to install. It's plain HTML/CSS/JS. You just need a way to serve the files — any of the options below work.

## Run it locally

**Option 1 — just open the file**

Double-click `index.html`, or open it in a browser:

```
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

This works for browsing, but some browsers restrict local `file://` pages from loading things like the security-header meta tag correctly, so Option 2 is more accurate to how it'll behave once deployed.

**Option 2 — run a local server (recommended)**

From inside the `portfolio-site` folder:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser.

No Python? Any of these do the same job:

```bash
npx serve .              # Node
php -S localhost:8000    # PHP
```

Stop the server with `Ctrl+C`.

## Folder structure

```
portfolio-site/
├── index.html         ← the whole page, sectioned with HTML comments
├── css/style.css       ← design system + layout
├── js/main.js           ← small progressive-enhancement script (nav highlight, footer year)
├── assets/
│   ├── resume.pdf       ← linked from the "Resume" button
│   └── img/              ← profile photo, project screenshot, conference photos
├── _headers              ← security headers (Netlify picks this up automatically)
├── vercel.json            ← security headers (Vercel picks this up automatically)
└── DEPLOY.md               ← deployment notes and content-sourcing notes
```

## Deploy it

Pick any static host:

- **Netlify** — drag the `portfolio-site` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), done. `_headers` is applied automatically.
- **Vercel** — `vercel deploy` from inside the folder, or connect the repo in the dashboard. `vercel.json` is applied automatically.
- **GitHub Pages** — push the folder to a repo and enable Pages in the repo settings. (Note: GitHub Pages can't apply custom HTTP headers, so `_headers`/`vercel.json` won't do anything there — the in-page `<meta>` CSP tag still applies, but headers like HSTS/X-Frame-Options won't.)
- **Cloudflare Pages** — same idea as Netlify/Vercel; supports a `_headers` file too.

No environment variables, no secrets, no build command needed for any of them.

## Updating content

Everything lives in `index.html`, split into clearly commented sections (`<!-- ===== HERO ===== -->`, `<!-- ===== PROJECTS ===== -->`, etc.) — edit the text in place and refresh. Styling changes go in `css/style.css`.

See `DEPLOY.md` for notes on where each section's content came from and what to update if things change (new project, new role, updated résumé, etc).
