import { defineConfig, devices } from "@playwright/test";

/** See https://playwright.dev/docs/test-configuration. */
export default defineConfig({
  testDir: "./tests-examples",
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  reporter: "html",
  use: {
    actionTimeout: 0,
    // baseURL: 'http://localhost:3000',
  },

  projects: [{ name: "Edge", use: { ...devices["Desktop Edge"] } }],
});
