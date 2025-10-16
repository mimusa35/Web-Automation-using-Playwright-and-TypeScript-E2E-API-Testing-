// Scenario 3

import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { PaymentPage } from "../pages/PaymentPage";

test.describe("Scenario 3 - Shopping Cart Functionality Test", () => {
  test("Complete checkout flow successfully", async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const payment = new PaymentPage(page);

    await home.gotoHomePage();
    await home.clickSignupLogin();

    // login
    await page.locator('form').filter({ hasText: "Login" }).getByPlaceholder("Email Address").fill("faizulcse@yopmail.com");
    await page.getByRole("textbox", { name: "Password" }).fill("Pass@1234");
    await page.getByRole("button", { name: "Login" }).click();

    await product.goToProducts();
    await product.searchProduct("Premium Polo T-Shirts");
    await product.viewProduct();
    await product.addToCart(2);

    await cart.openCart();
    await cart.proceedToCheckout();
    await checkout.verifyAddressAndOrder();
    await checkout.placeOrder();

    await payment.fillPaymentDetails();
    await payment.confirmPaymentAndDownloadInvoice();
  });
});
