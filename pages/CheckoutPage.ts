import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyAddressAndOrder() {
    await expect(this.page.getByRole("heading", { name: "Address Details" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Review Your Order" })).toBeVisible();
  }

  async placeOrder() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
  }
}
