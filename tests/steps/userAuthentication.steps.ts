import ENV from "../../utils/env";
import { Given, When, Then } from "../fixtures/fixtures";

Given(
  "the user launches the application and reaches login page",
  async ({ loginPage }) => {
    await loginPage.launchApplication();
  }
);

When(
  "the user enters valid username and password in the login form",
  async ({ loginPage }) => {
    await loginPage.enterValidCredentials(
      ENV.VALID_USERNAME,
      ENV.VALID_PASSWORD
    );
  }
);

When("the user clicks the Sign in button", async ({ loginPage }) => {
  await loginPage.clickSignInButton();
});

Then(
  "the user login should be success and should be redirected to the ESG Hub dashboard",
  async ({ loginPage, dashboardPage }) => {
    await dashboardPage.verifyDashboardPage();
    await loginPage.preserveSessionState();
  }
);

When(
  "the user enters invalid username and password in the login form",
  async ({ loginPage }) => {
    await loginPage.enterInvalidCredentials(
      ENV.INVALID_USERNAME,
      ENV.INVALID_PASSWORD
    );
  }
);

Then(
  "the user login should fail and should see an error message",
  async ({ loginPage }) => {
    await loginPage.validateIncorrectCredentialsError();
  }
);
