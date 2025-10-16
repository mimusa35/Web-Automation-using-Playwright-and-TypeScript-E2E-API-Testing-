import { Page, expect } from "@playwright/test";

export class SignupPage {
  constructor(private page: Page) {}

  async verifyNewUserSignupVisible() {
    await expect(this.page.locator("h2:has-text('New User Signup!')")).toBeVisible();
  }

  async fillSignupForm(name: string, email: string) {
    await this.page.locator("[data-qa='signup-name']").fill(name);
    await this.page.locator("[data-qa='signup-email']").fill(email);
    await this.page.locator("[data-qa='signup-button']").click();
  }

  async fillAccountInformation(password: string, day: string, month: string, year: string) {
    await this.page.check("#id_gender1");
    await this.page.locator("#password").fill(password);
    await this.page.selectOption("#days", day);
    await this.page.selectOption("#months", month);
    await this.page.selectOption("#years", year);
    await this.page.check("#newsletter");
    await this.page.check("#optin");
  }

  async fillAddressDetails() {
    await this.page.fill("#first_name", "John");
    await this.page.fill("#last_name", "Doe");
    await this.page.fill("#company", "Brainstation23");
    await this.page.fill("#address1", "Financial Center 8 Stone Street");
    await this.page.fill("#address2", "Suite 100");
    await this.page.selectOption("#country", "United States");
    await this.page.fill("#state", "New York");
    await this.page.fill("#city", "New York City");
    await this.page.fill("#zipcode", "10006");
    await this.page.fill("#mobile_number", "7019976600");
  }

  async submitAccountCreation() {
    await this.page.locator("[data-qa='create-account']").click();
  }
}
