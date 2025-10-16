import { Page, expect } from "@playwright/test";

export class PaymentPage {
  constructor(private page: Page) {}

  async fillPaymentDetails() {
    await this.page.locator('input[name="name_on_card"]').fill("Paypal");
    await this.page.locator('input[name="card_number"]').fill("4242424242424242");
    await this.page.locator('input[name="cvc"]').fill("123");
    await this.page.locator('input[name="expiry_month"]').fill("03");
    await this.page.locator('input[name="expiry_year"]').fill("2026");
  }

  async confirmPaymentAndDownloadInvoice() {
    await this.page.getByRole("button", { name: "Pay and Confirm Order" }).click();
    await expect(this.page.getByText("Congratulations! Your order")).toBeVisible();

    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByRole("link", { name: "Download Invoice" }).click();
    const download = await downloadPromise;
    const path = await download.path();
    console.log(`✅ Invoice downloaded: ${path}`);
  }
}
