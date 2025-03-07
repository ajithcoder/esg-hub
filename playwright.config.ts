import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

// Define BDD configuration
const bddTestDir = defineBddConfig({
  paths: ["./tests/features/**/*.feature"],
  require: ["./tests/fixtures/fixtures.ts", "./tests/steps/**/*.ts"],
  outputDir: "./bddtests",
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://ajith.verso.de/admin,",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    video: "retain-on-failure",
    screenshot: "on",
    ignoreHTTPSErrors: true,
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup", // to create the session and set cookie preferences
      testMatch: "**/setup.ts", // Matches generated setup spec
      use: { ...devices["Desktop Chrome"], channel: "chromium" },
    },
    {
      name: "Mobile Chrome", // mobile view port
      testDir: bddTestDir,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        channel: "chromium",
        storageState: ".cookiesStorage/state.json",
      },
    },
  ],
});
