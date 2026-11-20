import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {deployment} from './config/deployment.mjs';

export default defineConfig({
  site: deployment.site,
  base: deployment.base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
