import { test } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { readCSV } from "./utils/csvReader";

const products = readCSV("data/products.csv");

test.describe("Search Product Test - AutomationExercise", () => {
  for (const product of products) {
    test(`should search and verify product: ${product.title}`, async ({ page }) => {
      const productPage = new ProductPage(page);

      // Launch & verify home page
      await productPage.navigateToHomePage();

      // Go to Products page
      await productPage.goToProductsPage();

      // Search & verify product
      await productPage.searchProduct(product.title);
      await productPage.viewProduct();
      await productPage.verifyProductDetails(product.title, product.price);
    });
  }
});
