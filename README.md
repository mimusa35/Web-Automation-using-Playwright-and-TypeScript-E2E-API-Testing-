# Automation Test Automation Playwright Project
This project is an end-to-end UI automation framework built using Playwright with TypeScript, following industry best practices such as Page Object Model (POM), data-driven testing using CSV, environment variables, and multi-browser execution.

## Setup
1. Clone repo
2. `npm install`
3. Install browsers: `npx playwright install`
4. Create `.env` file with credentials

## Run Tests
- All browsers: `npx playwright test`
- Specific test: `npx playwright test tests/registration.spec.ts`
- Specific browser: `npx playwright test --project=Chromium`

## Reporting
- HTML report: `npx playwright show-report`
- Screenshots & videos: saved on failure

## Automated Test Scenarios
Scenario 1: User Registration
- Navigate to AutomationExercise website
- Register a new user
- Fill personal and address details
- Create an account

Scenario 2: Search Product (Data-Driven)
- Navigate to Products page
- Search products using test data from a CSV file
- Verify product name and search results

Scenario 3: Shopping Cart & Checkout
- Login using existing credentials
- Search and add product to cart
- Update quantity and verify cart
- Proceed to checkout
- Enter payment details
- Place order and verify success message
- Download invoice and verify successful download

## Automated Test Scenarios
automation-project/
├── data/
│   └── products.csv
├── pages/
│   ├── HomePage.ts
│   ├── SignupPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── PaymentPage.ts
├── tests/
│   ├── registration.spec.ts
│   ├── searchProduct.spec.ts
│   └── shoppingCart.spec.ts
├── utils/
│   └── helpers.ts
├── .env
├── .gitignore
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
