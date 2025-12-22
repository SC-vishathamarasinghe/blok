import { test, expect, Page } from '@playwright/test';

export async function testCombobxFramework(page: Page){
    // Verify that combobox is visible
    const combobox = page.locator('[id="combobox-framework"]');  
    // Verify that combobox button is visible
    const comboboxButton = combobox.locator('button[aria-label="Select framework"]');
    await expect(comboboxButton).toBeVisible(); 

    // Verify initial text
    await expect(comboboxButton).toContainText('Select framework...');

    // Open the combobox    
    await comboboxButton.click();
    await expect(comboboxButton).toHaveAttribute('aria-expanded', 'true');

    // Wait for popover to be visible
    const popoverContentWrapper = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContentWrapper).toBeVisible();

    // Verify all framework options are visible in the combobox    
    const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];
    for (const framework of frameworks) {
      await expect(popoverContentWrapper.getByText(framework, { exact: true })).toBeVisible();
    }  

    // Verify that show empty state message when no results found
    const searchInput = popoverContentWrapper.getByPlaceholder('Search framework...');
    await searchInput.fill('abc123');
    await expect(popoverContentWrapper.getByText('No framework found.')).toBeVisible();

    // Verify that clear search and show all options again
    await searchInput.clear();
    
    // Verify all options are visible again
    await expect(popoverContentWrapper.getByText('Next.js', { exact: true })).toBeVisible();
    await expect(popoverContentWrapper.getByText('SvelteKit', { exact: true })).toBeVisible();
    await expect(popoverContentWrapper.getByText('Nuxt.js', { exact: true })).toBeVisible();
    await expect(popoverContentWrapper.getByText('Remix', { exact: true })).toBeVisible();
    await expect(popoverContentWrapper.getByText('Astro', { exact: true })).toBeVisible();

    // Verify that filtering options when searching
    await searchInput.fill('next');
    await expect(popoverContentWrapper.getByText('Next.js', { exact: true })).toBeVisible();
    await expect(popoverContentWrapper.getByText('SvelteKit', { exact: true })).not.toBeVisible();
    await expect(popoverContentWrapper.getByText('Nuxt.js', { exact: true })).not.toBeVisible(); 
    await expect(popoverContentWrapper.getByText('Remix', { exact: true })).not.toBeVisible();
    await expect(popoverContentWrapper.getByText('Astro', { exact: true })).not.toBeVisible();

    // Verify that selecting a framework option updates the combobox text
    await popoverContentWrapper.getByText('Next.js', { exact: true }).click();
    await expect(comboboxButton).toHaveAttribute('aria-expanded', 'false');
    await expect(comboboxButton).toContainText('Next.js');
    await expect(comboboxButton).not.toContainText('Select framework...');
}

export async function testCombobxUser(page: Page){
    // Verify that combobox is visible
    const combobox = page.locator('[id="combobox-user"]');  
    // Verify that combobox button is visible
    const comboboxButton = combobox.locator('button[aria-label="Select user"]');
    await expect(comboboxButton).toBeVisible(); 

    // Verify initial text
    await expect(comboboxButton).toContainText('ChristianHahn');

    // Open the combobox    
    await comboboxButton.click();
    await expect(comboboxButton).toHaveAttribute('aria-expanded', 'true');

    // Wait for popover to be visible
    const popoverContentWrapper = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContentWrapper).toBeVisible();

    // Select a different user
    await popoverContentWrapper.locator('[data-slot="command-item"]').filter({ hasText: 'ThomasKelly' }).click();
      
    // Verify the new selection
    await expect(comboboxButton).toHaveAttribute('aria-expanded', 'false');
    await expect(comboboxButton).toContainText('ThomasKelly');
    await expect(comboboxButton).not.toContainText('ChristianHahn');
}

export async function testCombobxTimezone(page: Page){
    // Verify that combobox is visible
    const comboboxButton = page.locator('[id="combobox-timezone"]');
    await expect(comboboxButton).toBeVisible(); 

    // Verify initial text
    await expect(comboboxButton).toContainText('Americas(GMT-5) New York');

    // Open the combobox    
    await comboboxButton.click();

    // Wait for popover to be visible
    const popoverContentWrapper = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContentWrapper).toBeVisible();

    // Select a different user
    await popoverContentWrapper.locator('[data-slot="command-item"]').filter({ hasText: '(GMT+0) London' }).click();
      
    // Verify the new selection
    await expect(comboboxButton).toContainText('Europe(GMT+0) London');
    await expect(comboboxButton).not.toContainText('Americas(GMT-5) New York');
}

export async function testCombobxWithCheckbox(page: Page){
    // Verify that combobox is visible
    const combobox = page.locator('[id="combobox-checkbox"]');  
    // Verify that combobox button is visible
    const comboboxButton = combobox.locator('button[aria-label="Select frameworks (multi-select)"]');
    await expect(comboboxButton).toBeVisible(); 

    // Verify initial text
    await expect(comboboxButton).toContainText('Select frameworks (multi-select)...');

    // Open the combobox    
    await comboboxButton.click();
    await expect(comboboxButton).toHaveAttribute('aria-expanded', 'true');

    // Wait for popover to be visible
    const popoverContentWrapper = page.locator('[role="dialog"], [data-radix-popper-content-wrapper]').first();
    await expect(popoverContentWrapper).toBeVisible();

    // Select a different user
    await popoverContentWrapper.locator('[data-slot="command-item"]').filter({ hasText: 'Next.js' }).click();
    await popoverContentWrapper.locator('[data-slot="command-item"]').filter({ hasText: 'SvelteKit' }).click();
      
    // Verify the new selection
    await expect(comboboxButton).toContainText('Next.js, SvelteKit');
    await expect(comboboxButton).not.toContainText('Select frameworks (multi-select)...');
}