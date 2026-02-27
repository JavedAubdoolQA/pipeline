import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('the user navigates to {string}', async ({ page }, url: string) => {
  await page.goto(url);
});

When('the user enters {string} in the {string} field', async ({ page }, value: string, field: string) => {
  await page.getByPlaceholder(field).fill(value);
});

When('the user clicks on the {string} button', async ({ page }, button: string) => {
    await page.getByRole('button', { name: button }).click();
})

Then('validate that the {string} is visible', async ({ page }, element: string) => {
  await expect(page.locator(`.${element}`)).toBeVisible();
});