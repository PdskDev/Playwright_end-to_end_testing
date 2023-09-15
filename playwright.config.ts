import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ['tests/recorded.test.ts'],
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['dot'],
    [
      'json',
      {
        outputFile: 'jsonReport/jsonReport.js',
      },
    ],
    [
      'html',
      {
        open: 'never',
      },
    ],
  ],
};

export default config;
