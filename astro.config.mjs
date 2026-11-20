import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://mantis-rei.github.io',
  base: process.env.BASE_PATH || '/web-repo',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
