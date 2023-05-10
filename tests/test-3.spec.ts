import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.etsy.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('computer');
  await page.getByPlaceholder('Search for anything').press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20) div.v2-listing-card__info').click();
  const page1 = await page1Promise;
  const priceMarkt = await page1.locator('#listing-page-cart .wt-text-title-03').innerText();
  const metin = 'Sefa';
  console.log(metin);
  console.log(priceMarkt)
  await page1.locator('.btn--focus').first().click();
})