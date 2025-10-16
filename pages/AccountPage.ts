import { Page, expect } from "@playwright/test";

export class AccountPage {
  constructor(private page: Page) {}

  async verifyAccountCreated() {
    await expect(this.page.getByText("Account Created!")).toBeVisible();
  }

  async continueToAccount() {
    await this.page.getByRole("link", { name: "Continue" }).click();
  }

  async verifyLoggedInAs(name: string) {
    await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
  }
}
