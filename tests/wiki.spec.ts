import { test, expect } from '@playwright/test';

test('Wiki.js homepage loads on Safari (WebKit)', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Wiki.js/i);
});

test('Can navigate to login page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Login' }).click();  // sửa lại
  await expect(page).toHaveURL(/\/login/);
});
