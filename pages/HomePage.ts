import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async gotoHomePage() {
    await this.page.goto("/");
    await expect(this.page.getByRole("img", { name: "demo website for practice" })).toBeVisible();
  }

  async clickSignupLogin() {
    await this.page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(this.page.getByRole("heading", { name: "New User Signup!" })).toBeVisible();
  }

  async clickProducts() {
    await this.page.getByRole("link", { name: " Products" }).click();
    await expect(this.page.getByRole("heading", { name: "All Products" })).toBeVisible();
  }

  async clickCart() {
    await this.page.getByRole("link", { name: " Cart" }).click();
  }
}
