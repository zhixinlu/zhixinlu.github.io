# Zhixin Lu — Personal Academic Website

A static personal/academic website (plain HTML + CSS, no build step) designed for
**GitHub Pages**. Theme inspired by the "AI for Dynamics · Dynamics for AI" ring logo.

## Structure

```
index.html            Home (hero, about, research directions, latest talk)
research.html         Research: Dynamical AI + AI for Dynamics
publications.html     Selected & recent papers (links to Google Scholar)
blog.html             Blog / talks index
press.html            Media coverage
cv.html               CV summary (+ link to PDF)
assets/
  css/style.css       Shared stylesheet
  img/logo.svg        Placeholder ring logo  ← replace with your real logo
  cv/                 Put Zhixin_Lu_CV.pdf here
blog/attention-energy-landscape/
  index.html          Blog post wrapper (Santa Fe Institute, May 2026)
  talk.html           ← replace with your Downloads/index.html (the essay)
  visualization.html  Interactive Synchronize-or-Hop landscape visualization
```

## Things to add

1. **Your CV PDF** — drop it at `assets/cv/Zhixin_Lu_CV.pdf`.
2. **Your talk essay** — replace `blog/attention-energy-landscape/talk.html` with the
   `index.html` you built for the Santa Fe talk. It will then embed on the blog post page.

The ring logo/image lives at `assets/img/ring.png` and is used as the hero image and brand mark.

## Deploy to GitHub Pages

1. Create a new public repo, e.g. `your-username.github.io` (for a user site) or
   `personal-website` (for a project site).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   select `main` / `(root)`, save.
4. Visit `https://<your-username>.github.io/` (user site) or
   `https://<your-username>.github.io/<repo>/` (project site).

`.nojekyll` is included so GitHub Pages serves all files as-is (no Jekyll processing).

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
