import { Page, expect } from "@playwright/test";

export class PaymentPage {
  constructor(private page: Page) {}

  async placeOrder(nameOnCard: string, cardNumber: string, cvc: string, month: string, year: string) {
    await this.page.locator('input[name="name_on_card"]').fill(nameOnCard);
    await this.page.locator('input[name="card_number"]').fill(cardNumber);
    await this.page.locator('input[name="cvc"]').fill(cvc);
    await this.page.locator('input[name="expiry_month"]').fill(month);
    await this.page.locator('input[name="expiry_year"]').fill(year);
    await this.page.getByRole("button", { name: "Pay and Confirm Order" }).click();
    await expect(this.page.getByText("Congratulations! Your order")).toBeVisible();
  }

  async downloadInvoice() {
    const downloadPromise = this.page.waitForEvent("download");
    await this.page.getByRole("link", { name: "Download Invoice" }).click();
    const download = await downloadPromise;
    await download.path(); // path to the downloaded invoice
  }
}
