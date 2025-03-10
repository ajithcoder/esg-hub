import { expect, Locator, Page } from "@playwright/test";
import { progressBarHandler } from "../utils/progressBarHandler";
import ENV from "../utils/env";

export class TopicDetailViewPage {
  readonly page: Page;
  readonly route: string;
  readonly topicDetailViewTitleInput: Locator;
  readonly adminNavbarCurrentPage: Locator;
  readonly openSideDrawerButton: Locator;
  readonly closeSideDrawerButton: Locator;
  readonly addTaskButton: Locator;
  readonly scrollRightButton: Locator;
  readonly tabContentHeading: Locator;
  readonly newTaskExpansionPanel: Locator;
  readonly taskForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topicDetailViewTitleInput = this.page
      .locator(`mat-form-field input`)
      .nth(2); // needs better selector
    this.route = ENV.BASE_URL + "/topics/edit/153"; // needs better selector
    this.adminNavbarCurrentPage = this.page.locator(
      "admin-breadcrumb .breadcrumb_current"
    );
    this.openSideDrawerButton = this.page.locator(
      "mat-sidenav-content .admin-right-sidenav-open"
    );
    this.closeSideDrawerButton = this.page.locator(
      "mat-sidenav .admin-right-sidenav-close"
    );
    this.addTaskButton = this.page.locator("admin-tasks-related mat-toolbar button");
    this.scrollRightButton = this.page.locator(
      "mat-tab-header .mat-tab-header-pagination-after"
    );
    this.tabContentHeading = this.page.locator("admin-tasks-related h4");
    this.newTaskExpansionPanel = this.page.locator(
      '[role="button"] mat-panel-title:has-text("New task")'
    );
    this.taskForm = this.page.locator(
      `admin-tasks-related [role="region"].mat-expansion-panel-content`
    );
  }

  async routeToPage() {
    if (this.page.url() !== this.route) {
      await this.page.goto(this.route);
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForURL(this.route);
    }
  }

  async verifyTopicDetailViewPageTitleInput(topicName: string) {
    await progressBarHandler(this.page);
    await expect(this.topicDetailViewTitleInput).toHaveValue(topicName);
  }

  async verifyTopicDetailViewPageAccessibility() {
    await expect(this.adminNavbarCurrentPage).toHaveText("Topic Detail View");
  }

  async clickOpenSideDrawerButton() {
    await expect(this.openSideDrawerButton).toBeVisible();
    await this.openSideDrawerButton.click();
    await expect(this.closeSideDrawerButton).toBeVisible();
  }

  async selectTabFromSideDrawer(tabName: string) {
    const tasksTab = this.page.locator('[role="tab"][aria-label="tasks"]');
    // Scroll until the tab is visible
    while (!(await tasksTab.isVisible())) {
      await this.scrollRightButton.click();
    }

    await expect(tasksTab).toBeVisible();
    await tasksTab.click();

    await expect(this.tabContentHeading).toHaveText(tabName);
  }

  async verifyTaskTabDisplayedWithAddButton() {
    await expect(this.addTaskButton).toBeVisible();
  }

  async clickAddButton() {
    await expect(this.addTaskButton).toBeVisible();
    await this.addTaskButton.click();

    await expect(this.newTaskExpansionPanel).toBeVisible();
  }

  async openNewtaskExpansionPanel() {
    await expect(this.newTaskExpansionPanel).toBeVisible();
    await this.newTaskExpansionPanel.click();
    await expect(this.taskForm).toBeVisible();
  }
}
