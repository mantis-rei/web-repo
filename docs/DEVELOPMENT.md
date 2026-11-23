# Development and deployment

A professional portfolio focused on AI engineering, automation, web products, and cloud computing, built with Astro, TypeScript, and locally hosted DM Sans and Space Grotesk fonts. Includes seven indexable project pages, direct live-project links, filters, mobile navigation, a CV link, email copying, and a Kigali clock. The hero uses a mirrored portrait in a D-shaped frame: its straight left edge fades while the right arc stays solid. The foreground profile card has fully rounded corners. Motion respects reduced-motion preferences.

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
The production build checks Astro and TypeScript first. Verification checks all nine HTML pages, local links/assets, SEO metadata, JSON-LD, sitemap, robots.txt, the supplied CV and project links, and optimized images.

Always deploy `dist` after building. The root `Index.html` is retained as a legacy reference and is not the Astro entry point or deployment output. GitHub, Vercel, and Netlify builds all use the same `src` files and current design.

## GitHub Pages

Default target: https://mantis-rei.github.io/web-repo/
Public deployment is opt-in. Select Settings > Pages > Build and deployment > Source > GitHub Actions in the repository, then create a repository Actions variable named PUBLISH_PORTFOLIO with value true. The workflow always builds and verifies pushes to main; its Pages configuration and deployment steps run only when this variable is true. Run the workflow manually after enabling publication. Check its outcome to confirm publication.

## Netlify or a custom domain

netlify.toml sets BASE_PATH=/ and SITE_URL=https://viper1.netlify.app (the existing website on the GitHub profile). If the deployed hostname differs, update SITE_URL to that exact origin. For another host, set SITE_URL and BASE_PATH before building. Rebuild after changing these values so asset paths, canonical URLs, sitemap, and robots.txt match the destination.

## Vercel

The live production URL is **https://muhoza-blaise.vercel.app/**, deployed by the GitHub-linked Vercel project **viper**. The previous viper-one-pink.vercel.app hostname redirects permanently to this address, preserving paths and query strings. The profile card uses its original rounded corners, without the former concave cutout.

The redirect is managed by the project's published Vercel routing rule, **Redirect previous portfolio address**. It matches only the old hostname, returns HTTP 308, and leaves preview deployment URLs outside the rule. Routing rules are separate from vercel.json and persist across source deployments.

The included vercel.json builds and verifies the static site and publishes dist. Production SITE_URL is set to https://muhoza-blaise.vercel.app in Vercel so canonical URLs, social metadata, robots.txt, and the sitemap use the selected domain. For a custom build outside Vercel, set SITE_URL=https://muhoza-blaise.vercel.app and BASE_PATH=/ before building.

## Content

- src/pages/index.astro: profile, experience, expertise, and contact.
- src/data/projects.ts: project details, technologies, and destination links.
- src/data/profile.ts: the supplied CV and WIMAZA Technologies website links.
- src/components/ProjectVisual.astro: custom presentation illustrations.
- src/styles/global.css: shared layout and component styles.
- src/styles/redesign.css: the current rounded layout, D-shaped portrait frame, and DCE2F0 / 50586C / FBEAEB / 7B9ACC color palette.
- src/layouts/Layout.astro: navigation, footer, SEO, and interactions.
- public/blaise-dushime-cv.pdf: original archived résumé retained; the visible CV links use the supplied PDF Host URL instead.
- public/images/blaise-portrait.webp: optimized local copy of the supplied Cloudinary portrait.
- public/images/pezaas-preview.webp and outreachhub-preview.webp: optimized copies of the supplied project screenshots. The OutreachHub browser chrome is cropped in CSS.

Profile, education, WIMAZA role, Pezaas, OutreachHub, and VEO Stream use the supplied LinkedIn screenshots. Easy Fine-Tuner uses its public GitHub README. Study Craft AI uses the public repository description and README. Kora Architect uses its public repository description; implementation languages are not asserted. MAZA TTS is Blaise's supplied name for the pocket-tts-by-Viper fork, with Kyutai's Pocket TTS credited as its foundation and README used for capability descriptions. The CEO role, company website, PDF Host CV, Pezaas and OutreachHub live URLs, and real screenshot previews were supplied directly by Blaise. The contact email comes from the previous portfolio.

Pezaas and OutreachHub show supplied website screenshots. The other project artwork remains illustrative and is identified on detail pages. No unverified customer counts, testimonials, or performance metrics are included. Forked repositories are not presented as original work.

SEO includes static HTML, unique titles/descriptions, canonical URLs, social metadata, Person JSON-LD, sitemap, and robots.txt. Indexing depends on the deployed URL and search engine crawlers.
