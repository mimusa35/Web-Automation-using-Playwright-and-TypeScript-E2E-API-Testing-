import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { readCSV, ProductRecord } from "../utils/helpers";

const records: ProductRecord[] = readCSV("data/products.csv");

test.describe("Search Product Test", () => {
  for (const record of records) {
    test(`Verify product: ${record.title}`, async ({ page }) => {
      const home = new HomePage(page);
      const product = new ProductPage(page);

      await home.gotoHomePage();
      await home.clickProducts();
      await product.searchProduct(record.title);
      await product.viewProduct();
      await product.verifyProductDetails(record.title, record.price);
    });
  }
});
