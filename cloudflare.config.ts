import { bindings, defineConfig } from 'cf/config';
import * as entrypoint from './src/index.js' with { type: 'cf-worker' };

export default defineConfig({
  worker: {
    name: 'oilmarket-portal',
    entrypoint,
    compatibilityDate: '2026-11-16',
    observability: { enabled: true },
    assets: {
      notFoundHandling: 'single-page-application',
      runWorkerFirst: ['/api/*'],
    },
    env: {
      DB: bindings.d1({ name: 'oilmarket-live', id: '91dfce64-02a1-4010-9073-ba5fcfb78181' }),
    },
  },
});
