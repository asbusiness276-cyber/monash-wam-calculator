import { test, expect } from '@playwright/test';

test('wam calculator works', async ({ page }) => {
  await page.goto('http://localhost:5199/wam-calculator');
  await page.waitForLoadState('networkidle');
  
  // Try to click the calculate button
  await page.click('button:has-text("Check Result & Calculate WAM")');
  
  const resultValue = await page.locator('.text-5xl.font-bold').textContent();
  console.log("Result Value:", resultValue);
  
  // Check for console errors
  page.on('pageerror', error => {
    console.error('Page Error:', error);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Console Error:', msg.text());
    }
  });
});
