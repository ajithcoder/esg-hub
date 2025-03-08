import { expect, Locator, Page } from "@playwright/test";
import ENV from "../utils/env";
import { TopicDetailViewPage } from "./topicDetailViewPage";
import { progressBarHandler } from "../utils/progressBarHandler";

export class TopicsOverviewPage {
  readonly page: Page;
  readonly route: string;
  readonly topicListItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.route = ENV.BASE_URL + "/topics/overview";
    this.topicListItem = this.page.locator(
      "admin-card-content li .mat-list-item .admin-href-link"
    );
  }

  async routeToPage() {
    if (this.page.url() !== this.route) {
      await this.page.goto(this.route);
      await this.page.waitForLoadState("networkidle");
      await this.page.waitForURL(this.route);
    }
  }

  async openTopicListItem(topicName: string) {
    const chosenListItem = this.topicListItem.filter({ hasText: topicName });
    await expect(chosenListItem).toBeVisible();
    await chosenListItem.click();
  }
}
