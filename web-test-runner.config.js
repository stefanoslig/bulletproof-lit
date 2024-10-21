import { vitePlugin } from '@remcovaes/web-test-runner-vite-plugin';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'test/**/*.test.ts',
  plugins: [
    vitePlugin(),
  ],
  browsers: [
    playwrightLauncher({ product: 'chromium' })
  ],
};