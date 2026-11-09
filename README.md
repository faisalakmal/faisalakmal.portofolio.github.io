# Faisal Akmal — QA Engineer & SDET Portfolio

A responsive, single-page portfolio presenting Faisal Akmal's quality assurance experience, selected testing projects, and contact links. The site is built with plain HTML, CSS, and JavaScript, with no build step or framework dependency.

## Features

- Responsive layout with section navigation and a sticky desktop sidebar.
- About, experience, selected projects, and contact sections.
- Project cards populated from `assets/data/projects.json` and linked to GitHub repositories.
- Active section navigation and current-year footer updated with JavaScript.
- Semantic HTML, keyboard focus styles, and reduced-motion support.
- Custom SVG favicon.

## Project structure

```text
.
├── index.html                 # Main portfolio page and content
├── assets/
│   ├── css/style.css           # Layout, colors, and responsive styles
│   ├── data/projects.json      # Curated GitHub project cards
│   ├── images/favicon.svg      # Site favicon
│   └── js/main.js              # Project loading and small UI behaviors
└── DESIGN.md                   # Visual direction and design decisions
```

## Run locally

This is a static website. You can open `index.html` in a browser, or serve the folder locally. A local server is recommended so the browser can load `projects.json` with `fetch`:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Update the project cards

Edit `assets/data/projects.json`. Each project uses this shape:

```json
{
  "title": "Project title",
  "repository": "github-repository-name",
  "description": "A short description of the project.",
  "technologies": ["Tool", "Language"]
}
```

The `repository` value is appended to `https://github.com/faisalakmal/` by `assets/js/main.js`. Add or remove objects in the JSON array to change the selected projects. New GitHub repositories do not appear automatically; update this file to feature them.

## Customize the portfolio

- Update personal details, work history, and contact links in `index.html`.
- Update colors, typography, layout, and breakpoints in `assets/css/style.css`.
- Update the favicon at `assets/images/favicon.svg`.
- Refer to `DESIGN.md` for the visual direction and implementation notes.

## Deployment

The site can be hosted on GitHub Pages as a static site. In the repository's **Settings → Pages**, choose the publishing source and branch that contain `index.html` (for example, the `master` branch and the repository root). After pushing updates, GitHub Pages publishes the latest committed version; local edits are not published until they are committed and pushed.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Inter (loaded from Google Fonts)
