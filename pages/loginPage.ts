import { expect, Locator, Page } from "@playwright/test";
import * as fs from 'fs';
import ENV from "../utils/env";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly incorrectCredentialsNotificationContent: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = this.page.locator('mat-form-field [id="mat-input-0"]');
    this.passwordField = this.page.locator('mat-form-field [id="mat-input-1"]');
    this.signInButton = this.page.locator("button:has-text('Sign in')");
    this.incorrectCredentialsNotificationContent = this.page.locator("admin-notifications .notification-text");
  }

  async launchApplication() {
    await this.page.goto('/login');
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveTitle("VERSO | ESG hub");
    await expect(this.usernameField).toBeVisible();
  }

  // retrieve the credentials from the .env file using ENV class and enter them in the respective fields.
  async enterValidCredentials(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
  }

  async enterInvalidCredentials(invalidUsername: string, invalidPassword: string) {
    await this.usernameField.fill(invalidUsername);
    await this.passwordField.fill(invalidPassword);
  }

  async validateIncorrectCredentialsError() {
    await expect(this.incorrectCredentialsNotificationContent).toHaveText(" Invalid credentials. ")
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

//  Preserve the session state by storing the cookies in a file. This file can be used to restore the session state in subsequent test runs.
  async preserveSessionState() {
    const cookiesStorage = ".auth/state.json";
    if(!fs.existsSync(cookiesStorage)){
        await this.page.context().storageState({ path: cookiesStorage });
    }
  }
}
