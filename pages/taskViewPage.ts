import { expect, Locator, Page } from "@playwright/test";
import ENV from "../utils/env";
import { progressBarHandler } from "../utils/progressBarHandler";
import { notificationMessageValidator } from "../utils/notificationMessageValidator";

export class TaskViewPage {
  readonly page: Page;
  readonly route: string;
  readonly titleSelector: Locator;
  readonly descriptionSelector: Locator;
  readonly assigneesSelector: Locator;
  readonly deadlineSelector: Locator;
  readonly statusSelector: Locator;
  readonly statusOptions: Locator;
  readonly openCalenderButton: Locator;
  readonly calendarSelector: Locator;
  readonly calendarPeriodButton: Locator;
  readonly calendarNextMonthButton: Locator;
  readonly newTaskExpansionPanel: Locator;
  readonly taskDetailsForm: Locator;
  readonly dashboardModule: Locator;

  constructor(page: Page) {
    this.page = page;
    this.route = ENV.BASE_URL + "/topics/edit/153"; // needs better selector
    this.titleSelector = this.page.locator(`[formcontrolname="title"]`);
    this.descriptionSelector = this.page.locator(
      `[formcontrolname="description"]`
    );
    this.assigneesSelector = this.page.locator(
      `admin-tasks-related input[aria-autocomplete="list"]`
    );
    this.deadlineSelector = this.page.locator(`[formcontrolname="deadline"]`);
    this.statusSelector = this.page
      .locator(`admin-tasks-related mat-select`)
      .first();
    this.calendarSelector = this.page.locator(
      `.mat-datepicker-content mat-calendar`
    );
    this.calendarPeriodButton = this.page.locator(
      `mat-calendar .mat-calendar-period-button`
    );
    this.calendarNextMonthButton = this.page.locator(
      `mat-calendar .mat-calendar-next-button`
    );
    this.newTaskExpansionPanel = this.page.locator(
      '[role="button"] mat-panel-title:has-text("New task")'
    );
    this.openCalenderButton = this.page.locator(`mat-datepicker-toggle button`);
    this.taskDetailsForm = this.page.locator(
      `.mat-expansion-panel.mat-expanded`
    );
    this.dashboardModule = this.dashboardModule = this.page.locator(
      'admin-sidenav [href="#/dashboard"]'
    );
  }

  async routeToPage() {
    if (this.page.url() !== this.route) {
      await this.page.goto(this.route);
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForURL(this.route);
    }
  }

  async openNewTask() {
    await expect(this.newTaskExpansionPanel).toBeVisible();
    await this.newTaskExpansionPanel.click();
    await expect(this.titleSelector).toBeVisible();
  }

  async fillTaskForm(taskDetails: { [key: string]: string }) {
    await this.titleSelector.fill(taskDetails["Title"]);
    await this.descriptionSelector.fill(taskDetails["Description"]);
    await this.chooseAssignee(taskDetails["Assignees"]);
    await this.selectDate(taskDetails["Deadline"]);
    await this.selectStatus(taskDetails["Status"]);
  }

  async chooseAssignee(assignee: string) {
    await this.assigneesSelector.fill(assignee);
    await this.page.waitForSelector(".mat-option");
    await this.page.locator(`.mat-option-text:has-text("${assignee}")`).click();
    await this.page.waitForSelector(".mat-chip");
    await expect(
      this.page.locator(`.mat-chip:has-text("${assignee}")`)
    ).toBeVisible();
  }

  async selectStatus(status: string) {
    const statusOptions = this.page.getByRole("option", { name: status });
    await this.statusSelector.click();
    await statusOptions.click();
  }

  async selectDate(dateString: string) {
    const [day, ...monthYearParts] = dateString.split(" ");
    const monthYear = monthYearParts.join(" ");
    await expect(this.deadlineSelector).toBeVisible();
    await expect(this.openCalenderButton).toBeVisible();
    await this.openCalenderButton.click();
    await this.calendarSelector.waitFor({ state: "visible" });

    while (true) {
      const currentMonthYear = await this.calendarPeriodButton.textContent();
      if (currentMonthYear?.includes(monthYear)) {
        break;
      } else {
        await this.calendarNextMonthButton.click(); // Navigate to the next month
      }
    }
    const dayButton = this.page.locator(
      `.mat-calendar-body-cell-content:has-text("${day}")`
    );
    await dayButton.click();

    // Ensure the date picker is closed
    await this.page.waitForSelector(".mat-datepicker-content mat-calendar", {
      state: "hidden",
    });
  }

  async clickSaveButton(notification: string) {
    const saveButton = this.taskDetailsForm.locator('mat-icon:text-is("save")');

    await saveButton.click();
    await progressBarHandler(this.page);
    await notificationMessageValidator(notification, this.page);
  }

  async validateTaskVisibility(title: string) {
    const taskTitle = this.page.locator(
      `.mat-expansion-panel-header-title:has-text("${title}")`
    );
    await expect(taskTitle).toBeVisible();
  }

  async clickDashboardModule() {
    await expect(this.dashboardModule).toBeVisible();
    await this.dashboardModule.click();
    await progressBarHandler(this.page);
    expect(this.page.url()).toContain("/dashboard/tasks-all");
  }
}
