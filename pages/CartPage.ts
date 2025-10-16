import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.getByRole("link", { name: " Cart" }).click();
  }

  async proceedToCheckout() {
    await this.page.getByText("Proceed To Checkout").click();
  }
}
