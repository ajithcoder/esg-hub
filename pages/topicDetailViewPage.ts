import { expect, Locator, Page } from "@playwright/test";
import { progressBarHandler } from "../utils/progressBarHandler";

export class TopicDetailViewPage {
  readonly page: Page;
  readonly topicDetailViewTitleInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.topicDetailViewTitleInput = this.page
      .locator(`mat-form-field input`)
      .nth(2) // needs better selector
      
  }

  async verifyTopicDetailViewPageTitleInput(topicName: string) {
    await progressBarHandler(this.page);
    await expect(this.topicDetailViewTitleInput).toHaveValue(topicName);
  }
}
