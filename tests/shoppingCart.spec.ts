import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { PaymentPage } from "../pages/PaymentPage";

test("Shopping Cart Functionality Test", async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const payment = new PaymentPage(page);

  // Login
  await home.gotoHomePage();
  await home.clickSignupLogin();
  await page.locator('form').filter({ hasText: "Login" }).getByPlaceholder("Email Address").fill(process.env.USER_EMAIL!);
  await page.getByRole("textbox", { name: "Password" }).fill(process.env.USER_PASSWORD!);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Logged in")).toBeVisible();

  // Add product to cart
  await home.clickProducts();
  await product.searchProduct("Premium Polo T-Shirts");
  await product.viewProduct();
  await product.addToCart(2);

  // Checkout
  await home.clickCart();
  await cart.proceedToCheckout();

  // Payment
  await payment.placeOrder(
    process.env.CARD_NAME!,
    process.env.CARD_NUMBER!,
    process.env.CVC!,
    process.env.EXP_MONTH!,
    process.env.EXP_YEAR!
  );

  await payment.downloadInvoice();
});
