import { expect, Locator, Page } from "@playwright/test";

export async function progressBarHandler(page: Page) {

    const progressBarLocator: Locator = page.locator('mat-progress-bar .mat-progress-bar-primary.mat-progress-bar-fill.mat-progress-bar-element');
    await expect(progressBarLocator).toBeHidden({timeout: 5000});

}
