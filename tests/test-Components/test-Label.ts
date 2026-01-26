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
    
    // Verify checkbox is initially unchecked
    await expect(checkbox).not.toBeChecked();
    
    // Get the checkbox ID to find the associated label if available
    const checkboxId = await checkbox.getAttribute('id');
    const associatedLabel = checkboxId 
        ? page.locator(`label[for="${checkboxId}"]`).first()
        : label;
    
    // Ensure label is visible and clickable
    await expect(associatedLabel).toBeVisible();
    await associatedLabel.scrollIntoViewIfNeeded();
    
    // Click the label and wait for the checkbox state to update
    await associatedLabel.click({ force: false });
    await expect(checkbox).toBeChecked({ timeout: 2000 });
}