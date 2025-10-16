import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto("https://automationexercise.com/");
    await expect(this.page).toHaveTitle(/Automation Exercise/i);
  }

  async clickSignupLogin() {
    await this.page.getByRole("link", { name: " Signup / Login" }).click();
  }

  async clickProducts() {
    await this.page.getByRole("link", { name: " Products" }).click();
  }
}
