import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.etsy.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('computer');
  await page.getByPlaceholder('Search for anything').press('Enter');
  //const page1Promise = page.waitForEvent('popup');
  //const page1 = await page1Promise;
  //await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').hover();
  await page.waitForSelector('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)',  { state: 'visible' });
  //await page.click('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)');
 // await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').focus();
  await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').click();
  //await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').highlight();
  //await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').click();




  //await page.locator('.wt-grid.wt-grid--block.wt-pl-xs-0.tab-reorder-container li:nth-child(20)').click();

  //await page1.getByRole('button', { name: 'Add to cart' }).click();
  //await page1.getByRole('button', { name: 'Add to cart' }).click();
  //await page1.getByRole('button', { name: 'Close' }).click();
});