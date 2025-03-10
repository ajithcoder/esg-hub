import { Given, When, Then, expect } from "../fixtures/fixtures";

Given(
  "the user is logged in and reached the ESG Hub dashboard",
  async ({ dashboardPage }) => {
    await dashboardPage.routeToPage();
    await dashboardPage.verifyDashboardPage();
  }
);

When(
  "the user selects the Topics module from the navigation bar",
  async ({ dashboardPage }) => {
    await dashboardPage.verifyNavigationBarVisibility();
    await dashboardPage.clickTopicsModule();
  }
);

Then(
  "the user finds {string} on the tab {string}",
  async ({ dashboardPage }, taskChosen: string, tabChosen: string) => {
    await dashboardPage.selectTabOnDashboard(tabChosen);
    await dashboardPage.validateTaskVisibility(taskChosen);
  }
);

Then(
  "the status of task {string} is updated to {string}",
  async ({ dashboardPage }, taskName: string, expectedStatus: string) => {
    await dashboardPage.validateTaskStatusFromTable(taskName, expectedStatus);
  }
);

When(
  "the user opens {string} from the {string} table",
  async ({ dashboardPage }, taskName: string, tabName: string) => {
    await dashboardPage.selectTabOnDashboard(tabName);
    await dashboardPage.openTaskFromTable(taskName);
  }
);

Then(
  "the user does not finds {string} on the tab {string}",
  async ({ dashboardPage }, taskName: string, tabChosen: string) => {
    await dashboardPage.selectTabOnDashboard(tabChosen);
    const isTaskVisible = await dashboardPage.validateTaskVisibility(taskName);
    expect(isTaskVisible).toBeFalsy();
  }
);
