import { expect, Locator, Page } from "@playwright/test";
import ENV from "../utils/env.ts";
import { progressBarHandler } from "../utils/progressBarHandler.ts";
import { TopicDetailViewPage } from "./topicDetailViewPage.ts";

export class DashboardPage {
  readonly page: Page;
  readonly route: string;
  readonly dashboardpageTitle: Locator;
  readonly collapseNavigationBarButton: Locator;
  readonly expandNavigationBarButton: Locator;
  readonly topicsModule: Locator;
  readonly topicDetailViewPage: TopicDetailViewPage;

  constructor(page: Page) {
    this.page = page;
    this.topicDetailViewPage = new TopicDetailViewPage(page);
    this.dashboardpageTitle = this.page.locator("admin-dashboard .verso-h1");
    this.route = ENV.BASE_URL + "/dashboard/tasks-all";
    this.collapseNavigationBarButton = this.page.locator(
      "mat-drawer-content .sidenav-toggle-icon-expanded"
    );
    this.expandNavigationBarButton = this.page.locator(
      "mat-drawer-content .sidenav-toggle-icon-collapsed"
    );
    this.topicsModule = this.page.locator('admin-sidenav [href="#/topics"]');
  }

  async routeToPage() {
    if (this.page.url() !== this.route) {
      await this.page.goto(this.route);
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForURL(this.route);
    }
  }

  async verifyDashboardPage() {
    await progressBarHandler(this.page);
    await expect(this.dashboardpageTitle).toHaveText("Welcome back to VERSO");
  }

  async verifyNavigationBarVisibility() {
    if (!(await this.collapseNavigationBarButton.isVisible())) {
      await this.expandNavigationBarButton.click();
      await expect(this.collapseNavigationBarButton).toBeVisible();
    }
  }

  async clickTopicsModule() {
    await expect(this.topicsModule).toBeVisible();
    await this.topicsModule.click();
    await progressBarHandler(this.page);
    expect(this.page.url()).toContain("/topics/overview");
  }

  async selectTabOnDashboard(tabName: string) {
    const chosenTab = this.page.locator(`.mat-tab-link:has-text("${tabName}")`);
    const chosenTabSelected = this.page.locator(
      `.mat-tab-label-active:has-text("${tabName}")`
    );
    await chosenTab.click();
    await expect(chosenTabSelected).toBeVisible();
  }

  async validateTaskVisibility(taskTitle: string) {
    const taskName = this.page.getByRole("cell", { name: taskTitle });
    await expect(taskName).toBeVisible();
  }

  async openTaskFromTable(taskName: string) {
    const taskLocator = this.page.getByRole("cell", { name: taskName }).locator(`.title`);
    await this.validateTaskVisibility(taskName);
    await taskLocator.click();
    await progressBarHandler(this.page);
    await this.topicDetailViewPage.verifyTopicDetailViewPageAccessibility();
  }

  async validateTaskStatusFromTable(taskName: string, expectedStatus: string) {
    const rowLocator = this.page.getByRole('row').filter({has: this.page.getByRole('cell',{name: taskName})});
    const statusLocator = rowLocator.getByRole('cell', {name: expectedStatus});
    await progressBarHandler(this.page);
    await expect(statusLocator).toBeVisible();
  }
}
