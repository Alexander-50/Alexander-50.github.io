# Alexander P.B. — Portfolio Site

A static, dependency-free portfolio (plain HTML/CSS/JS — no build step, no framework, no tracking).

## Structure

```
site/
├── index.html          # the whole page
├── css/style.css        # design system + layout
├── js/main.js            # minimal progressive-enhancement JS (nav highlight, footer year)
├── assets/
│   ├── resume.pdf        # your résumé (linked from the "Resume" button)
│   └── img/               # optimized local images (profile, dashboard, conference photos)
├── _headers               # security headers for Netlify
└── vercel.json            # security headers for Vercel
```

## Running it locally

No build step needed. Either:
- Open `index.html` directly in a browser, or
- Serve it locally: `python3 -m http.server 8000` from inside `site/`, then visit `http://localhost:8000`

## Deploying

Any static host works — drag-and-drop the `site/` folder to **Netlify**, or connect the repo to **Vercel** / **GitHub Pages**. The `_headers` file (Netlify) and `vercel.json` (Vercel) both set the same security headers automatically:
- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy
- X-Frame-Options: DENY

If you deploy to GitHub Pages, those headers aren't configurable via GitHub Pages directly — the `<meta>` CSP tag in `index.html` covers what it can, but HSTS/X-Frame-Options need a host that supports custom headers (Netlify/Vercel/Cloudflare Pages all do, for free).

## Two project screenshots load from GitHub

The NVM and InsightLog project cards reference screenshots hosted on GitHub's own asset CDN (the same images already embedded in those repos' READMEs) rather than local copies, because those images aren't in your local files. They'll render normally in any browser. If you'd rather self-host them for reliability, download them and swap the `<img src="...">` for a local path under `assets/img/`.

## Content notes

- All project descriptions, the current-project progress table, and the lifecycle diagram are sourced directly from your repository READMEs.
- Experience, education, achievements, and the security-research disclosure are sourced from your résumé (`Alexander-PB-Resume-v4.pdf`).
- No skill ratings, percentages, or fabricated metrics were added anywhere — per your own WHATNOTTOINCLUDE guidance.

## Updating content later

Everything is in one file (`index.html`) with clear section comments (`<!-- ===== SECTION ===== -->`), so updates don't require touching CSS/JS unless you're changing layout.
