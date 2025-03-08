import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly dashboardpageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardpageTitle = this.page.locator("admin-dashboard .verso-h1");
  }

    async verifyDashboardPage() {
        await expect(this.dashboardpageTitle).toHaveText("Welcome back to VERSO");
    }
}
