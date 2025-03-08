import { Given, When, Then } from "../fixtures/fixtures";

Given(
  "the user launches the application and reaches login page",
  async ({ loginPage }) => {
    await loginPage.launchApplication();
  }
);

When(
  "the user enters valid username and password in the login form",
  async ({loginPage}) => {
    await loginPage.enterCredentials();
  }
);

When("the user clicks the Sign in button", async ({loginPage}) => {
  await loginPage.clickSignInButton();
});

Then("the user login should be success and should be redirected to the ESG Hub dashboard", async ({loginPage,dashboardPage}) => {
  await dashboardPage.verifyDashboardPage();
  await loginPage.preserveSessionState();  
});
