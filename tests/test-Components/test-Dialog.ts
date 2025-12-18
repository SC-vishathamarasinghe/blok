import { test, expect, Page } from '@playwright/test';

export async function testDialog(page: Page){
    // Verify that display dialog trigger button
    const dialog = page.locator('[id="dialog-default"]');
    const triggerButton = dialog.getByRole('button', { name: 'Edit Profile' });
    await expect(triggerButton).toBeVisible();

    // Verify that open dialog when trigger button is clicked
    await triggerButton.click();
    await page.waitForTimeout(100);
    const dialogContent = page.locator('[data-slot="dialog-content"]');
    await expect(dialogContent).toBeVisible();

    // Verify that display dialog title when opened
    const dialogTitle = dialogContent.getByRole('heading', { name: 'Edit profile' });
    await expect(dialogTitle).toBeVisible();

    // Verify that display dialog description when opened
    const dialogDescription = dialogContent.getByText('Make changes to your profile here. Click save when you\'re done.');
    await expect(dialogDescription).toBeVisible();

    // Verify that display Name input field in dialog
    const nameLabel = dialogContent.getByText('Name', { exact: true });
    await expect(nameLabel).toBeVisible();
    
    // Check for Name input field
    const nameInput = dialogContent.locator('input#name-1[name="name"]');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveValue('Liz');

    // Verify that display Username input field in dialog
    const usernameLabel = dialogContent.getByText('Username', { exact: true });
    await expect(usernameLabel).toBeVisible();
    
    // Check for Username input field
    const usernameInput = dialogContent.locator('input#name-1[name="username"]');
    await expect(usernameInput).toBeVisible();
    await expect(usernameInput).toHaveValue('@liz');

    // Verify that allow editing Name input field and update the value
    await nameInput.clear();
    await nameInput.fill('John Doe');
    await expect(nameInput).toHaveValue('John Doe');

    // Verify that allow editing Username input field and update the value
    await usernameInput.clear();
    await usernameInput.fill('@johndoe');
    await expect(usernameInput).toHaveValue('@johndoe');

    // Verify that display Cancel button in dialog footer
    const cancelButton = dialogContent.getByRole('button', { name: 'Cancel' });
    await expect(cancelButton).toBeVisible();

    // Verify that display Save changes button in dialog footer
    const saveButton = dialogContent.getByRole('button', { name: 'Save changes' });
    await expect(saveButton).toBeVisible();

    // Verify that close dialog when Cancel button is clicked
    await cancelButton.click();
    await expect(dialogContent).not.toBeVisible();

    await triggerButton.click();

    // Verify that close dialog when close button (X) is clicked
    const closeButton = dialogContent.locator('button').getByText('Close');
    await closeButton.click();
    await expect(dialogContent).not.toBeVisible();
    
    await triggerButton.click();

    // Verify that close dialog when clicking on overlay
    const overlay = page.locator('[data-slot="dialog-overlay"]');
    await overlay.click({ position: { x: 10, y: 10 } });
    await expect(dialogContent).not.toBeVisible();
}