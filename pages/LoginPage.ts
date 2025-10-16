import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async login(email: string, password: string) {
    await this.page
      .locator('form')
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address")
      .fill(email);
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
    await expect(this.page.getByText("Logged in as")).toBeVisible();
  }
}
