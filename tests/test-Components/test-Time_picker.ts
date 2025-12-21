import { test, expect, Page } from '@playwright/test';

export async function testTimePicker(page: Page){
    // Verify that display time picker button
    const timePicker = page.locator('[id="time-picker"]');
    const timePickerButton = timePicker.locator('[data-slot="popover-trigger"]');
    await expect(timePickerButton).toBeVisible();
    await expect(timePickerButton).toContainText('Pick a time');
    await expect(timePickerButton.locator('[class="text-muted-foreground"]')).toBeVisible();

    // Verify that open time picker popover when button is clicked
    await timePickerButton.click();
    // Wait for popover to be visible
    const popoverContentWrapper = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContentWrapper).toBeVisible();

    // Verify that popover content is visible
    const popoverContent = popoverContentWrapper.locator('[data-slot="popover-content"]');

    // Verify that display Clear button
    const clearButton = popoverContent.getByRole('button', { name: /Clear/i });
    await expect(clearButton).toBeVisible();

    // Verify that display Done button
    const doneButton = popoverContent.getByRole('button', { name: /Done/i });
    await expect(doneButton).toBeVisible();
    
    // Verify that allow selecting hour, minute, and period
    // Select hour (e.g., "03")
    const hourSelect = popoverContent.locator('text=Hour').locator('..').getByRole('combobox').first();
    await hourSelect.click();
    await page.getByRole('option', { name: '3' }).click();

    // Select minute (e.g., "30")
    const minuteSelect = popoverContent.locator('text=Minute').locator('..').getByRole('combobox');
    await minuteSelect.click();
    await page.getByRole('option', { name: '30' }).click();

    // Select period (PM)
    const periodSelect = popoverContent.locator('text=Period').locator('..').getByRole('combobox');
    await periodSelect.click();
    await page.getByRole('option', { name: 'PM' }).click();

    // Click Done button
    await doneButton.click();

    // Verify the button now shows the selected time
    await expect(timePickerButton).toContainText('03:30 PM');

    // Verify that clear the time when Clear button is clicked
    await timePickerButton.click();
    await clearButton.click();
    await expect(timePickerButton).toContainText('Pick a time');
}