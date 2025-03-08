import { expect, Locator, Page } from "@playwright/test";
import ENV from "../utils/env.ts";
import { progressBarHandler } from "../utils/progressBarHandler.ts";

export class DashboardPage {
  readonly page: Page;
  readonly route: string;
  readonly dashboardpageTitle: Locator;
  readonly collapseNavigationBarButton: Locator;
  readonly expandNavigationBarButton: Locator;
  readonly topicsModule: Locator;

  constructor(page: Page) {
    this.page = page;
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
}
