import { expect, Locator, Page } from "@playwright/test";

export class TopicsOverviewPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
}  