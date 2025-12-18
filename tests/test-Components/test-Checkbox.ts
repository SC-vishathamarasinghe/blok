import { test, expect, Page } from '@playwright/test';

export async function testCheckbox(page: Page){
    // Verify that checkbox is visible
    const checkbox = page.locator('[id="checkbox-default"]');
    const defaultCheckbox = checkbox.locator('[data-slot="checkbox"][id="terms"]');
    await expect(defaultCheckbox).toBeVisible();

    // Verify that checkbox is not checked initially
    await expect(defaultCheckbox).not.toBeChecked();

    // Verify checkbox is now checked
    await defaultCheckbox.click();
    await expect(defaultCheckbox).toBeChecked();

    // Verify checkbox is now unchecked
    await defaultCheckbox.click();
    await expect(defaultCheckbox).not.toBeChecked();

    // Verify that checkbox has label text
    await expect(defaultCheckbox).toHaveAttribute('aria-label', 'Accept terms and conditions');
}

export async function testCheckboxWithDescription(page: Page){
    // Verify that checkbox with description is visible
    const checkbox = page.locator('[id="checkbox-description"]');
    const descriptionCheckbox = checkbox.locator('[data-slot="checkbox"][id="terms-2"]');
    await expect(descriptionCheckbox).toBeVisible();

    // Verify that checkbox has description
    const checkboxDescription = page.locator('div.grid.gap-2').filter({ has: page.locator('label[for="terms-2"]') }).locator('p.text-muted-foreground');
    await expect(checkboxDescription).toContainText('By clicking this checkbox, you agree to the terms and conditions.');
}

export async function testCheckboxDisabled(page: Page){
    // Verify that checkbox is disabled    
    const checkboxDisabled = page.locator('[data-slot="checkbox"][aria-label="Disabled notifications"]');
    await expect(checkboxDisabled).toBeVisible();
    await expect(checkboxDisabled).toBeDisabled();
}

export async function testCheckEnabledLabel(page: Page){
    // Verify that checkbox is enabled and has label text
    const checkboxEnabledLabel = page.locator('[data-slot="checkbox"][id="toggle-2"]');
    await expect(checkboxEnabledLabel).toBeVisible();

    // Verify that checkbox has label text
    await expect(checkboxEnabledLabel).toHaveAttribute('aria-label', 'Enable notifications');

    // Verify that checkbox has description
    const descriptionEnabledLabel = page.locator('p.text-muted-foreground.text-sm').filter({
        hasText: 'You can enable or disable notifications at any time.'});  
    await expect(descriptionEnabledLabel).toBeVisible();  

    // Verify that checkable by clicking the label
    const label = page.locator('[data-slot="label"]').nth(3);
    await expect(label).toBeVisible();
    await label.click();
    await expect(checkboxEnabledLabel).not.toBeChecked();
}
