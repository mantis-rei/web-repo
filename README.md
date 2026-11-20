# Blaise Dushime Muhoza - Portfolio

A professional portfolio built with Astro, TypeScript, and locally hosted DM Sans and Space Grotesk fonts. Includes six indexable project pages, filters, mobile navigation, resume download, email copying, and a Kigali clock.

## Development

Node.js 22.12+ required; Node 24 recommended.

```sh
npm ci
npm run dev
npm run build
npm run verify
npm run preview
```

The default local URL is http://127.0.0.1:4321/web-repo/.
The production build checks Astro and TypeScript first. Verification checks all eight HTML pages, all local links/assets, SEO metadata, JSON-LD, sitemap, robots.txt, resume, and optimized portrait.

## GitHub Pages

Default target: https://mantis-rei.github.io/web-repo/
Public deployment is opt-in. Select Settings > Pages > Build and deployment > Source > GitHub Actions in the repository, then create a repository Actions variable named PUBLISH_PORTFOLIO with value true. The workflow always builds and verifies pushes to main; its Pages configuration and deployment steps run only when this variable is true. Run the workflow manually after enabling publication. Check its outcome to confirm publication.

## Netlify or a custom domain

netlify.toml sets BASE_PATH=/ and SITE_URL=https://viper1.netlify.app (the existing website on the GitHub profile). If the deployed hostname differs, update SITE_URL to that exact origin. For another host, set SITE_URL and BASE_PATH before building. Rebuild after changing these values so asset paths, canonical URLs, sitemap, and robots.txt match the destination.

## Content

- src/pages/index.astro: profile, experience, expertise, and contact.
- src/data/projects.ts: project details, technologies, and destination links.
- src/components/ProjectVisual.astro: custom presentation illustrations.
- src/styles/global.css: design and responsive styles.
- src/styles/redesign.css: reference-inspired rounded layout and the DCE2F0 / 50586C / FBEAEB / 7B9ACC color palette.
- src/layouts/Layout.astro: navigation, footer, SEO, and interactions.
- public/blaise-dushime-cv.pdf: original resume from this repository.
- public/images/blaise-portrait.webp: optimized local copy of the supplied Cloudinary portrait.

Profile, education, WIMAZA role, Pezaas, OutreachHub, and VEO Stream use the supplied LinkedIn screenshots. Easy Fine-Tuner and Viper Trade Logger use their public GitHub READMEs. Study Craft AI uses the public repository description and README. Email and resume come from the previous portfolio. The supplied LinkedIn URL replaces the old profile link.

Project artwork is illustrative and is identified as such on detail pages. No unverified customer counts, testimonials, performance metrics, or product links are included. Forked repositories are not presented as original work.

SEO includes static HTML, unique titles/descriptions, canonical URLs, social metadata, Person JSON-LD, sitemap, and robots.txt. Indexing depends on the deployed URL and search engine crawlers.
