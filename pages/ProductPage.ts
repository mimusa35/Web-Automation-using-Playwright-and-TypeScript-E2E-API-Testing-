import { Page, expect } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async goToProducts() {
    await this.page.getByRole("link", { name: " Products" }).click();
    await expect(this.page.getByRole("heading", { name: "All Products" })).toBeVisible();
  }

  async searchProduct(title: string) {
    await this.page.getByRole("textbox", { name: "Search Product" }).fill(title);
    await this.page.getByRole("button", { name: "" }).click();
  }

  async viewProduct() {
    await this.page.getByRole("link", { name: " View Product" }).click();
  }

  async verifyProductDetails(title: string, price: string) {
    await expect(this.page.getByRole("heading", { name: new RegExp(title, "i") })).toBeVisible();
    await expect(this.page.getByText(price)).toBeVisible();
  }

  async addToCart(quantity: number) {
    await this.page.locator("#quantity").fill(quantity.toString());
    await this.page.getByRole("button", { name: " Add to cart" }).click();
    await expect(this.page.getByText("Your product has been added")).toBeVisible();
    await this.page.getByRole("button", { name: "Continue Shopping" }).click();
  }
}
