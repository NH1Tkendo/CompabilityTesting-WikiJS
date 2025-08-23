import { test, expect } from '@playwright/test';

test('Wiki.js homepage loads on Safari (WebKit)', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Wiki.js/i);
});

test('Can navigate to login page', async ({ page }) => {
  await page.goto('/');

  // Chờ thẻ a[aria-label="Login"] xuất hiện trong DOM
  await page.waitForSelector('a[aria-label="Login"]', { timeout: 10000 });
  console.log(await page.content());

  // Click vào link login
  await page.click('a[aria-label="Login"]');

  // Kiểm tra URL
  await expect(page).toHaveURL(/\/login/);
});
