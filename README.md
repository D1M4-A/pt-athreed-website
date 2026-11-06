# PT Athreed website

Responsive corporate website for PT Athreed, built with Next.js, React, and Tailwind CSS.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages deployment

Pushing to `main` builds the site as a static export and deploys it to GitHub Pages. The repository build sets the project base path automatically.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The first deployment is available at:

<https://d1m4-a.github.io/pt-athreed-website/>

To test the static export locally:

```bash
GITHUB_PAGES=true npm run build
npx serve out
```

The inquiry form currently validates in the browser and displays a preview confirmation; it is not connected to an email or CRM service yet.
