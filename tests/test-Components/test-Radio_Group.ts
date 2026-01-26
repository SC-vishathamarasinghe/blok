import { test, expect, Page } from '@playwright/test';

export async function testRadioGroup(page: Page){
    // Verify that display radio group component
    const radioGroupButton = page.locator('[id="radio-group-button"]');
    const radioGroup = radioGroupButton.locator('[role="radiogroup"][data-slot="radio-group"]');
    await expect(radioGroup).toBeVisible();

    // Verify that display all radio group items
    const radioGroupItems = radioGroup.locator('[data-slot="radio-group-item"]');
    const radio1 = radioGroupItems.nth(0);
    await expect(radio1).toBeVisible();
    const radio2 = radioGroupItems.nth(1);
    await expect(radio2).toBeVisible();
    const radio3 = radioGroupItems.nth(2);
    await expect(radio3).toBeVisible();

    // Verify that associated labels
    const label1 = radioGroup.locator('label[for="r1"]');
    await expect(label1).toContainText('Admin');
    const label2 = radioGroup.locator('label[for="r2"]');
    await expect(label2).toContainText('Write');
    const label3 = radioGroup.locator('label[for="r3"]');
    await expect(label3).toContainText('Read');

    // Verify that change selection when clicking different radio button
    await radio1.click();
    await expect(radio1).toBeChecked();
    await expect(radio2).not.toBeChecked();
    await expect(radio3).not.toBeChecked();

    // Verify that selectable by clicking the label
    await label3.click();
    await expect(radio1).not.toBeChecked();
    await expect(radio2).not.toBeChecked();
    await expect(radio3).toBeChecked();
}