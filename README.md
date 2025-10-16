# AutomationExercise Playwright Project

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
