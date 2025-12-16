import { test, expect, Page } from '@playwright/test';

export async function testLabel(page: Page){
    // Verify that display label component
    const label = page.locator('[data-slot="label"]').first();
    await expect(label).toBeVisible();

    // Verify that have correct text content
    await expect(label).toContainText('Accept terms and conditions');

    // Verify that focus checkbox when label is clicked
    const checkbox = page.locator('[data-slot="checkbox"]').first();
    await expect(checkbox).toBeVisible();
    await label.click();
    await expect(checkbox).toBeChecked();
}