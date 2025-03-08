import { expect, Locator, Page } from "@playwright/test";

export class TaskViewPage {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }
}  