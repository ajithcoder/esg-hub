import { Given, When, Then } from "../fixtures/fixtures";

When(
  "fills the task form with:",
  async function ({ taskViewPage }, dataTable: any) {
    const taskDetails = dataTable.rowsHash();
    await taskViewPage.openNewTask();
    await taskViewPage.fillTaskForm(taskDetails);
  }
);

When(
  "user clicks the Save button and notification {string} displayed",
  async ({ taskViewPage }, notification: string) => {
    await taskViewPage.clickSaveButton(notification);
  }
);

Then(
  "the task {string} should be created successfully",
  async ({ taskViewPage }, title: string) => {
    await taskViewPage.validateTaskVisibility(title);
  }
);

Then(
  "a task {string} exists in the Task tab",
  async ({ taskViewPage }, title: string) => {
    await taskViewPage.validateTaskVisibility(title);
  }
);

When(
  "the user selects the Dashboard module from the navigation bar",
  async ({ dashboardPage, taskViewPage }) => {
    await dashboardPage.verifyNavigationBarVisibility();
    await taskViewPage.clickDashboardModule();
  }
);
