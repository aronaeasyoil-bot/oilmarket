import { defineConfig } from 'cf/config';

export default defineConfig({
  worker: {
    name: 'oilmarket-portal',
    compatibilityDate: '2026-11-16',
    observability: { enabled: true },
    assets: { notFoundHandling: 'single-page-application' },
  },
});
