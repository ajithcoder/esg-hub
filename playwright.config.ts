import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, defineBddProject } from "playwright-bdd";

// // Define BDD configuration
// const bddTestDir = defineBddConfig({
//   paths: ["./tests/features/esg_hub_tests/**/*.feature"],
//   require: ["./tests/fixtures/fixtures.ts", "./tests/steps/**/*.ts"],
//   outputDir: "./bddtests/esg_hub_tests",
// });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  
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
    baseURL: "https://ajith.verso.de/admin/#/login,",

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
      ...defineBddProject({
        name: "setup",
        features: "./tests/features/setup/user-authentication-tests.feature",
        steps: ["./tests/steps/*.ts", "./tests/fixtures/fixtures.ts"],
        outputDir: "./bddtests/setup",
        matchKeywords: true,
      }),
      fullyParallel: true,
      use: { ...devices["Desktop Chrome"], channel: "chromium" },
    },
    {
      ...defineBddProject({
        name: "ESG-Hub_Tests",
        features: "./bddtests/tests/features/esg_hub_tests/**/*.feature", // Adjust the path as needed
        steps: [
          "./bddtests/tests/steps/*.ts",
          "./bddtests/tests/fixtures/fixtures.ts",
        ],
        outputDir: "./bddtests/esg_hub_tests",
        matchKeywords: true,
      }),
      dependencies: ["setup"],
      fullyParallel: true,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chromium",
        storageState: ".auth/state.json",
      },
    },
  ],
});
