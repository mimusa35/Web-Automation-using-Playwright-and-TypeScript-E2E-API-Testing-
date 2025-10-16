import { Page, expect } from "@playwright/test";

export class SignupPage {
  constructor(private page: Page) {}

  async fillSignupForm(name: string, email: string) {
    await expect(this.page.getByRole("heading", { name: "New User Signup!" })).toBeVisible();
    await this.page.getByRole("textbox", { name: "Name" }).fill(name);
    await this.page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address")
      .fill(email);
    await this.page.getByRole("button", { name: "Signup" }).click();
  }

  async fillAccountInfo() {
    await this.page.getByRole("radio", { name: "Mrs." }).check();
    await this.page.getByRole("textbox", { name: "Password *" }).fill("Mimusa35");
    await this.page.locator("#days").selectOption("23");
    await this.page.locator("#months").selectOption("1");
    await this.page.locator("#years").selectOption("1998");
    await this.page.getByRole("checkbox", { name: "Sign up for our newsletter!" }).check();
    await this.page.getByRole("checkbox", { name: "Receive special offers from" }).check();
  }

  async fillAddressDetails() {
    await this.page.getByRole("textbox", { name: "First name *" }).fill("Mimusa Azim");
    await this.page.getByRole("textbox", { name: "Last name *" }).fill("Mim");
    await this.page.getByRole("textbox", { name: "Company", exact: true }).fill("BrainStation23");
    await this.page
      .getByRole("textbox", { name: "Address * (Street address, P." })
      .fill("Financial Center 8 Stone Street");
    await this.page.getByLabel("Country *").selectOption("United States");
    await this.page.getByRole("textbox", { name: "State *" }).fill("New York");
    await this.page.getByRole("textbox", { name: "City * Zipcode *" }).fill("New York City");
    await this.page.locator("#zipcode").fill("10006");
    await this.page.getByRole("textbox", { name: "Mobile Number *" }).fill("7019976600");
  }

  async submitAccount(name: string) {
    await this.page.getByRole("button", { name: "Create Account" }).click();
    await expect(this.page.getByText("Account Created!")).toBeVisible();
    await this.page.getByRole("link", { name: "Continue" }).click();
    await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
  }
}
