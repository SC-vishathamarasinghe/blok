import { test, expect, Page } from '@playwright/test';

export async function testSpinnerDefault(page: Page){
    // Verify that the spinner section is visible
    const spinnerSection = page.locator('#spinner-default');
    await expect(spinnerSection).toBeVisible();
    
    // Verify that the default spinner is visible
    const defaultSpinner = spinnerSection.locator('[role="status"]');
    await expect(defaultSpinner).toBeVisible();

    // Verify spinner has expected classes
    await expect(defaultSpinner).toHaveClass(/lucide lucide-loader-circle size-4 animate-spin/);
}

export async function testSpinnerSize(page: Page){
    // Verify spinner sizes section is visible
    const sizeSpinnerSection = page.locator('#spinner-size');
    await expect(sizeSpinnerSection).toBeVisible();
    
    // Get all spinners
    const spinners = sizeSpinnerSection.locator('[role="status"]');
    
    // Verify we have at least 4 spinners
    const count = await spinners.count();
    expect(count).toBeGreaterThanOrEqual(4);
    
    // Check size classes are applied
    await expect(spinners.nth(0)).toHaveClass(/size-3/);
    await expect(spinners.nth(1)).toHaveClass(/size-4/);
    await expect(spinners.nth(2)).toHaveClass(/size-6/);
    await expect(spinners.nth(3)).toHaveClass(/size-8/);
}

export async function testSpinnerButton(page: Page){
    // Verify spinner button section is visible
    const buttonSpinnerSection = page.locator('#spinner-button');
    await expect(buttonSpinnerSection).toBeVisible();
    
    // Check for buttons with spinners
    const buttons = buttonSpinnerSection.locator('button');
    await expect(buttons).toHaveCount(3);
    
    // Verify each button contains a spinner
    for (let i = 0; i < 3; i++) {
      const button = buttons.nth(i);
      await expect(button).toBeVisible();
      await expect(button).toBeDisabled();
      
      const spinner = button.locator('[role="status"]');
      await expect(spinner).toBeVisible();
    }
    
    // Verify button text
    await expect(buttons.nth(0)).toContainText('Loading...');
    await expect(buttons.nth(1)).toContainText('Please wait');
    await expect(buttons.nth(2)).toContainText('Processing');
}

export async function testSpinnerBadge(page: Page){
    // Verify spinner badge section is visible
    const badgeSpinnerSection = page.locator('#spinner-badge');
    await expect(badgeSpinnerSection).toBeVisible();
    
    // Check for badges with spinners
    const badges = badgeSpinnerSection.locator('[role="status"]').locator('..');
    const spinnerCount = badgeSpinnerSection.locator('[role="status"]');
    await expect(spinnerCount).toHaveCount(3);
    
    // Verify each badge contains a spinner
    const spinners = badgeSpinnerSection.locator('[role="status"]');
    for (let i = 0; i < 3; i++) {
      await expect(spinners.nth(i)).toBeVisible();
    }
    
    // Verify badge text
    await expect(badges.nth(0)).toContainText('Syncing');
    await expect(badges.nth(1)).toContainText('Updating');
    await expect(badges.nth(2)).toContainText('Processing');
}