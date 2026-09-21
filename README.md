# Yasrah Beauty Website — GitHub Pages Ready

Luxury bridal + clinical aesthetics website concept based on the Yasrah Beauty guidelines.

## Stack
- React
- Vite
- Tailwind CSS
- React Router

## GitHub Pages
This version is already configured for a GitHub repository named `yasrah-beauty`.

- Vite base path: `/yasrah-beauty/`
- GitHub Pages deployment workflow: `.github/workflows/deploy.yml`
- Routing uses `HashRouter` so refreshing internal pages works reliably on GitHub Pages.

After pushing the project to GitHub, go to:

**Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**

The site will then deploy automatically whenever changes are pushed to the `main` branch.

Your public URL will usually be:

`https://YOUR-GITHUB-USERNAME.github.io/yasrah-beauty/`

## Run locally
```bash
npm install
npm run dev
```

## Included pages
- Home
- About
- FAQ placeholder
- Policies
- Bridal Makeup & Hair
- Clinical Aesthetics
- Portfolio placeholder gallery
- Courses — Coming Soon
- Inquiry form demo

## Logo
The header currently uses the text wordmark `YASRAH BEAUTY`. Replace it later with the final logo.

## Photography
Photography is represented with editorial placeholders for now.

## Important pre-launch notes
- The inquiry form is front-end only and does not send data yet.
- FAQ copy is intentionally not invented because no approved FAQ content was supplied.
- Dermaplaning and Radio Frequency are placeholders because the supplied document only names those services.
- Clinical aesthetics claims, contraindications, pre-care/post-care, and pricing should be reviewed by the treating professional before publication.
- Legal/policy language should be reviewed by Yasrah Beauty before launch.
