// Keep metadata, asset paths, and build verification consistent across hosts.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const deployment = {
  site: process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : 'https://mantis-rei.github.io'),
  base: process.env.BASE_PATH || (process.env.VERCEL === '1' ? '/' : '/web-repo'),
};
