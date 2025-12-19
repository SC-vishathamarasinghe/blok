import { test, expect, Page } from '@playwright/test';

export async function testSeparator(page: Page){
    // Verify that display separators
    const separators = page.locator('[id="separator"]');
    const separatorRoot = separators.locator('[data-slot="separator-root"]');

    // First separator should be horizontal
    const firstSeparator = separatorRoot.nth(0);
    await expect(firstSeparator).toBeVisible();
    await expect(firstSeparator).toHaveAttribute('data-orientation', 'horizontal');

    // Last two separators should be vertical
    const secondSeparator = separatorRoot.nth(1);
    await expect(secondSeparator).toBeVisible();
    await expect(secondSeparator).toHaveAttribute('data-orientation', 'vertical');
    const thirdSeparator = separatorRoot.nth(2);
    await expect(thirdSeparator).toBeVisible();
    await expect(thirdSeparator).toHaveAttribute('data-orientation', 'vertical');
}