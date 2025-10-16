import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async proceedToCheckout() {
    await this.page.getByText("Proceed To Checkout").click();
    await expect(this.page.getByRole("heading", { name: "Address Details" })).toBeVisible();
    await expect(this.page.getByRole("heading", { name: "Review Your Order" })).toBeVisible();
  }
}
