import { test, expect } from "@playwright/test";
import * as fs from "fs";
import { parse } from "csv-parse/sync"; // ✅ Use named import, not default

type ProductRecord = {
  title: string;
  price: string;
};

// Read CSV file
const csvData = fs.readFileSync("data/products.csv", "utf-8");

// Parse CSV and assert type
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
}) as ProductRecord[]; 

test.describe("Scenario 2 - Search Product Test", () => {

  // Loop over each CSV record and create a parameterized test
  for (const record of records) {
    test(`Verify product: ${record.title}`, async ({ page }) => {

      // Open home page
      await page.goto("https://automationexercise.com/");
      await expect(page.getByRole("link", { name: " Home" })).toBeVisible();

      // Navigate to Products
      await page.getByRole("link", { name: " Products" }).click();
      await expect(page.getByRole("heading", { name: "All Products" })).toBeVisible();

      // Search the product from CSV
      await page.getByRole("textbox", { name: "Search Product" }).fill(record.title);
      await page.getByRole("button", { name: "" }).click();

      // View product
      await page.getByRole("link", { name: " View Product" }).click();

      // Verify product title and price
      await expect(page.getByRole("heading", { name: new RegExp(record.title, "i") })).toBeVisible();
      await expect(page.getByText(record.price)).toBeVisible();

    });
  }

});
