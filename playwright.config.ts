import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // thư mục chứa spec
  timeout: 30 * 1000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3000', // Wiki.js server
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'webkit', // Safari engine
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

