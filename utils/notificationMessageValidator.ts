import { expect,Page } from "@playwright/test";

export async function notificationMessageValidator(expectedMessage: string, page:Page) {
    const notification = page.locator('admin-notifications .notification-text');
    await expect(notification).toBeVisible();
    await expect(notification).toHaveText(expectedMessage);
}