import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(., 'My account')]"
  );
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page
    .getByRole('link', { name: ' Edit your account information' })
    .click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('koushik1 letcode');
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('234573789');
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('2345737891');
  await page.getByRole('button', { name: 'Continue1' }).click();
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(., 'My account')]"
  );
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});
