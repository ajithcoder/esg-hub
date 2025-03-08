import { expect, Locator, Page } from "@playwright/test";
import baseURL from "../playwright.config.ts";

export class DashboardPage {
  readonly page: Page;
  readonly route: string = baseURL + "/dashboard/tasks-all";
  readonly dashboardpageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardpageTitle = this.page.locator("admin-dashboard .verso-h1");
  }

  async routeToPage() {
    if (this.page.url() !== this.route) {
      await this.page.goto(this.route);
      await this.page.waitForURL(this.route);
    }
  }

  async verifyDashboardPage() {
    await expect(this.dashboardpageTitle).toHaveText("Welcome back to VERSO");
  }
}
