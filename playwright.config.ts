import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 120000,
  use: {
    headless: false,
    baseURL: "https://automationexercise.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["html", { outputFolder: "reports" }]],
});
