import { expect, Locator, Page } from "@playwright/test";
import * as data from "../config/credentials.json";

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = this.page.locator('mat-form-field [id="mat-input-0"]');
    this.passwordField = this.page.locator('mat-form-field [id="mat-input-1"]');
    this.signInButton = this.page.locator("button:has-text('Sign in')");
  }

  async launchApplication() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle("VERSO | ESG hub");
    await expect(this.page.locator("h1")).toHaveText("Sign in");
  }

  async enterCredentials() {
    await this.usernameField.fill(data.username);
    await this.passwordField.fill(data.password);
  }

  async clickSignInButton() {
    await this.signInButton.click();
  }

//  Preserve the session state by storing the cookies in a file. This file can be used to restore the session state in subsequent test runs.
  async preserveSessionState() {
    const cookiesStorage = ".auth/state.json";
    await this.page.context().storageState({ path: cookiesStorage });
  }
}
