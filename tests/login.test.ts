import { chromium, expect, test } from '@playwright/test';

test('Login test demo', async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page1 = await context.newPage();

  await page1.goto('https://ecommerce-playground.lambdatest.io/');
  await page1.hover(
    "//a[@data-toggle='dropdown']//span[contains(., 'My account')]"
  );
  //await page.click('text=Login');
  await page1.waitForTimeout(1000);
  await page1.click("'Login'");
  await page1.fill("input[name='email']", 'koushik350@gmail.com');
  await page1.waitForTimeout(1000);
  await page1.fill("input[name='password']", 'Pass123$');
  await page1.waitForTimeout(1000);
  await page1.click("input[value='Login']");
  await page1.waitForTimeout(4000);
  await page1.hover(
    "//a[@data-toggle='dropdown']//span[contains(., 'My account')]"
  );
  await page1.waitForTimeout(1000);
  await page1.click("'Logout'");
  await page1.waitForTimeout(2000);

  /* const newContext = await browser.newContext();
  const page2 = await newContext.newPage();
  await page2.goto(
    'https://ecommerce-playground.lambdatest.io/index.php?route=account/account'
  );
  await page2.waitForTimeout(3000); */
});
