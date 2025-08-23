import { test, expect } from '@playwright/test';

test.describe('Wiki.js Compatibility Test', () => {
  test('Trang chủ Wiki.js hiển thị đúng title', async ({ page }) => {
    // Mở Wiki.js
    await page.goto('http://localhost:3000');

    // Kiểm tra title có chứa "Wiki.js"
    await expect(page).toHaveTitle(/Wiki\.js/i);
  });
});
