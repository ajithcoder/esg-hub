import { Given, When, Then, expect } from "../fixtures/fixtures";

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

When(
  "the user clicks on the task {string}",
  async ({ taskViewPage }, taskName: string) => {
    await taskViewPage.openTask(taskName);
  }
);

When("the user clicks on the edit button", async ({ taskViewPage }) => {
  await taskViewPage.clickEditButton();
});

When(
  "the user updates the status of task to {string}",
  async ({ taskViewPage }, status: string) => {
    await taskViewPage.selectStatus(status);
  }
);

Then(
  "the status is updated to {string}",
  async ({ taskViewPage }, status: string) => {
    await taskViewPage.validateStatus(status);
  }
);

When("the user clicks on the delete button", async ({ taskViewPage }) => {
  await taskViewPage.clickDeleteButton();
});

Then(
  "the task {string} is not found on the Tasks section",
  async ({ taskViewPage }, taskName: string) => {
    const isTaskVisible = await taskViewPage.validateTaskVisibility(taskName);
    expect(isTaskVisible).toBeFalsy();
  }
);
