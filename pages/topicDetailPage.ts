import { expect, Locator, Page } from "@playwright/test";

export class TopicDetailPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
}  