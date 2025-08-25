import { test, expect } from '@playwright/test';

test('basic Wiki.js page access', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Wiki.js default port
  await expect(page).toHaveTitle(/Wiki.js/); // Check if the title contains "Wiki.js"
});
