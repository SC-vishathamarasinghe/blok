import { test, expect, Page } from '@playwright/test';

export async function testSwitchPrimary(page: Page){
    // Verify that the Primary Switch is visible
    const primarySwitch = page.locator('[id="switch-primary"]');
    await expect(primarySwitch).toBeVisible();

    // Verify that the Primary Switch toggle button is visible
    const primarySwitchToggle = primarySwitch.locator('[id="switch-demo-airplane-mode"]');
    await expect(primarySwitchToggle).toBeVisible();

    // Verify that the Primary Switch is unchecked initially
    await expect(primarySwitchToggle).not.toBeChecked();

    // Verify that Primary Switch has the expected classes
    const classList = await primarySwitchToggle.getAttribute('class');
    expect(classList).toContain('bg-input');
    expect(classList).toContain('items-center');
    expect(classList).toContain('rounded-full');
    expect(classList).toContain('border-transparent');
    expect(classList).toContain('outline-none');

    // Verify that the Primary Switch is checked when clicked
    await primarySwitchToggle.click();
    await expect(primarySwitchToggle).toBeChecked();
    expect(classList).toContain('bg-primary');

    // Verify that have associated label
    const primaryLabel = primarySwitch.locator('label[for="switch-demo-airplane-mode"]');
    await expect(primaryLabel).toBeVisible();
    await expect(primaryLabel).toHaveText('Primary');
}

export async function testSwitchDanger(page: Page){
    // Verify that the Danger Switch is visible
    const dangerSwitch = page.locator('[id="switch-danger"]');
    await expect(dangerSwitch).toBeVisible();

    // Verify that the Danger Switch toggle button is visible
    const dangerSwitchToggle = dangerSwitch.locator('[id="switch-demo-danger"]');
    await expect(dangerSwitchToggle).toBeVisible();

    // Verify that the Danger Switch is unchecked initially
    await expect(dangerSwitchToggle).not.toBeChecked();

    // Verify that Primary Switch has the expected classes
    const classList = await dangerSwitchToggle.getAttribute('class');
    expect(classList).toContain('bg-input');
    expect(classList).toContain('items-center');
    expect(classList).toContain('rounded-full');
    expect(classList).toContain('border-transparent');
    expect(classList).toContain('outline-none');

    // Verify that the Danger Switch is checked when clicked
    await dangerSwitchToggle.click();
    await expect(dangerSwitchToggle).toBeChecked();
    expect(classList).toContain('bg-destructive');

    // Verify that have associated label
    const dangerLabel = dangerSwitch.locator('label[for="switch-demo-danger"]');
    await expect(dangerLabel).toBeVisible();
    await expect(dangerLabel).toHaveText('Danger');
}

export async function testSwitchSuccess(page: Page){
    // Verify that the Success Switch is visible
    const successSwitch = page.locator('[id="switch-success"]');
    await expect(successSwitch).toBeVisible();

    // Verify that the Success Switch toggle button is visible
    const successSwitchToggle = successSwitch.locator('[id="switch-demo-success"]');
    await expect(successSwitchToggle).toBeVisible();

    // Verify that the Success Switch is unchecked initially
    await expect(successSwitchToggle).not.toBeChecked();

    // Verify that Primary Switch has the expected classes
    const classList = await successSwitchToggle.getAttribute('class');
    expect(classList).toContain('bg-input');
    expect(classList).toContain('items-center');
    expect(classList).toContain('rounded-full');
    expect(classList).toContain('border-transparent');
    expect(classList).toContain('outline-none');

    // Verify that the Success Switch is checked when clicked
    await successSwitchToggle.click();
    await expect(successSwitchToggle).toBeChecked();
    expect(classList).toContain('bg-success');

    // Verify that have associated label
    const successLabel = successSwitch.locator('label[for="switch-demo-success"]');
    await expect(successLabel).toBeVisible();
    await expect(successLabel).toHaveText('Success');    
}