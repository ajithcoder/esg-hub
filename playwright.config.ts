import { defineConfig, devices } from "@playwright/test";
import { defineBddProject } from "playwright-bdd";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

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
        name: "ESG-Hub_E2E_Tests",
        features: "./tests/features/esg_hub_tests/end-to-end-topic-task-creation-test.feature",
        steps: ["./tests/steps/*.ts", "./tests/fixtures/fixtures.ts"],
        outputDir: "./bddtests/esg_hub_e2e",
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
    {
      ...defineBddProject({
        name: "ESG-Hub_Task_Modifications_Test",
        features: "./tests/features/esg_hub_tests/task-modifications-tests.feature",
        steps: ["./tests/steps/*.ts", "./tests/fixtures/fixtures.ts"],
        outputDir: "./bddtests/esg_hub_task_mod",
        matchKeywords: true,
      }),
      dependencies: ["setup", "ESG-Hub_E2E_Tests"],
      fullyParallel: true,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chromium",
        storageState: ".auth/state.json",
      },
    },
  ],
});
