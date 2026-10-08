# Zhixin Lu — Personal Academic Website

A static academic website for GitHub Pages, using HTML, CSS, and a small amount of JavaScript. No build step or external runtime dependencies are required.

## Pages

- `index.html`: research vision, program figure, recent updates, featured preprint, background, and writing.
- `research.html`: dynamics for AI, AI for dynamics, and physical AI and learning.
- `publications.html`: selected papers with explicit preprint, submission, and acceptance statuses.
- `cv.html`: background and the downloadable CV in `assets/cv/`.
- `blog.html`, `blog/`, and `press.html`: research explainers, interactive essays, and coverage.
- `blog/dynosed/`: stationary-data DyNoSeD explainer with the October 2 BPPB talk and an original probability-current demo. The two Lorenz PNG panels come from the author’s supplied poster.
- `blog/arrow-of-time/`: an intuitive guide to the recent theorem and proof.

Shared styling is in `assets/css/style.css`. The homepage figure viewer is in `assets/js/site.js`; its image link still works without JavaScript. The native dialog supports Escape, focus restoration, and a close button.

The two research explainers use LaTeX expressions rendered as SVG by the bundled MathJax 3.2.2 TeX component. Configuration is in `assets/js/math-config.js`; the renderer and its Apache 2.0 license are in `assets/vendor/mathjax-3.2.2/`. The SVG font paths are bundled, so math rendering needs no external CDN or web-font request. Inline expressions use `\(...\)` and display equations use `\[...\]`.

## Research figure

`assets/img/research-program.png` is the author's Figure 1 artwork, used without compositional changes. `research-program.webp` is a smaller web encoding at the same pixel dimensions. The original PNG is available from the research page. The figure is a conceptual map of data, density, and dynamics; its connections are intentionally undirected.

## Local preview

From this directory:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8765/`. Check the homepage, Research, Publications, and CV at desktop and phone widths before publishing.

## Publishing

The existing repository is `zhixinlu/zhixinlu.github.io`. `.nojekyll` serves the files directly through GitHub Pages. Preview changes locally and review them before committing or pushing to the branch configured for Pages.
