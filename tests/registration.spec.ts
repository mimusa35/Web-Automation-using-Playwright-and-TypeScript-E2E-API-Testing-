import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SignupPage } from "../pages/SignupPage";
import { AccountPage } from "../pages/AccountPage";

test.describe("User Registration Test - AutomationExercise", () => {
  test("should register a new user successfully", async ({ page }) => {
    const home = new HomePage(page);
    const signup = new SignupPage(page);
    const account = new AccountPage(page);

    // Launch browser and verify homepage
    await home.navigateToHomePage();

    // Go to signup page
    await home.clickSignupLogin();
    await signup.verifySignupPageVisible();

    // Fill basic signup form
    const name = "Mimusa Azim Mim";
    const email = `mimusamim${Date.now()}@gmail.com`;
    await signup.fillSignupForm(name, email);

    // Fill registration and address details
    await signup.fillRegistrationDetails();
    await signup.fillAddressDetails();

    // Submit and validate account creation
    await signup.submitForm();
    await account.verifyAccountCreated();

    // Continue and verify login
    await account.continueToAccount();
    await account.verifyLoggedInAs(name);
  });
});
