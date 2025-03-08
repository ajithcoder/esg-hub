import { Given, When, Then } from "../fixtures/fixtures";

Given(
  "the user is logged in and reached the ESG Hub dashboard",
  async ({ dashboardPage }) => {
    await dashboardPage.routeToPage();
    await dashboardPage.verifyDashboardPage();
  }
);

When(
  "the user selects the Topics module from the navigation bar",
  async ({dashboardPage}) => {
    await dashboardPage.verifyNavigationBarVisibility();
    await dashboardPage.clickTopicsModule();
  }
);


