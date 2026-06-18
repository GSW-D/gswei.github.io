# Guangshun Wei Academic Homepage

This is a static GitHub Pages homepage built with plain HTML, CSS, and JavaScript. It does not require Jekyll, Node.js, npm, or a build step.

## File structure

```text
.
├── index.html
├── research.html
├── publications.html
├── projects.html
├── teaching-service.html
├── 404.html
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── data.js
│       └── main.js
└── source_files/          # keep the existing image folder in your current repository
```

## Deployment

1. Keep your existing `source_files/` folder, because this template reuses your current images.
2. Copy the new HTML files and the `assets/` folder to the root of `GSW-D/gswei.github.io`.
3. Commit and push to the `main` branch.
4. GitHub Pages will update automatically.

Example:

```bash
git clone https://github.com/GSW-D/gswei.github.io.git
cd gswei.github.io
# Copy the downloaded files into this directory, preserving source_files/
git add .
git commit -m "Redesign academic homepage"
git push origin main
```

## How to update content

Most dynamic content is in:

```text
assets/js/data.js
```

Edit this file to update:

- News
- Publications
- Publication links
- Research directions
- Projects

For new paper images, place image files under `source_files/` and update the corresponding `image` field in `assets/js/data.js`.
