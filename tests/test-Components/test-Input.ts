import { test, expect, Page } from '@playwright/test';

export async function testInput(page: Page){
    // Verify that display input label
    const label = page.locator('[data-slot="label"]').first();
    await expect(label).toBeVisible();
    await expect(label).toContainText('Name');

    // Verify that display input contex
    const input = page.locator('[data-slot="input"] , [id="input"]');
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('placeholder', 'Enter your name');

    // Verify the input contains the typed text
    await expect(input).toHaveValue('');
    await input.fill('John Doe');
    await expect(input).toHaveValue('John Doe');

    // Verify that clear input value
    await input.clear();
    await expect(input).toHaveValue('');

    // Verify that handle special characters
    const specialText = 'Test@123#$%';
    await input.fill(specialText);
    await expect(input).toHaveValue(specialText);
}