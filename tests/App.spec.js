const { test, expect } = require("@playwright/test");
const {email, password} = require('./user.js');

test("positiveTest", async ({ page }) => {
 
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(page.locator('h2')).toHaveText('Мои курсы и профессии');
});
test("negativeTest", async ({ page }) => {
 
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "password");
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});