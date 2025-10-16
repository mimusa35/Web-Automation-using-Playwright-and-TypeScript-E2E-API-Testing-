import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle(/Automation Exercise/i);

  }

  async clickSignupLogin() {
    await this.page.getByRole("link", { name: "Signup / Login" }).click();
  }
}
