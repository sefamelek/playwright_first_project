import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.etsy.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('computer');
  await page.getByPlaceholder('Search for anything').press('Enter');
  const page2Promise = page.waitForEvent('popup');
  await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20) div.v2-listing-card__info').click();
  const page2 = await page2Promise;
});