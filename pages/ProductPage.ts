import { Page, expect } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async navigateToHomePage() {
    await this.page.goto("https://automationexercise.com/");
    await expect(this.page.getByRole("link", { name: " Home" })).toBeVisible();
  }

  async goToProductsPage() {
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
    await expect(
      this.page.getByRole("heading", { name: new RegExp(title.split(" ")[0], "i") })
    ).toBeVisible();
    await expect(this.page.getByText(price)).toBeVisible();
  }
}
