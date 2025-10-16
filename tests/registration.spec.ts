import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SignupPage } from "../pages/SignupPage";

test("User Registration Test", async ({ page }) => {
  const home = new HomePage(page);
  const signup = new SignupPage(page);

  await home.gotoHomePage();
  await home.clickSignupLogin();

  const name = "Mimusa Azim Mim";
  const email = `mimusamim${Date.now()}@gmail.com`;

  await signup.signup(name, email);
  await signup.fillRegistrationDetails("Mimusa35");
  await signup.fillAddressDetails();
  await signup.createAccount();

  await expect(page.getByText(`Logged in as ${name}`)).toBeVisible();
});
