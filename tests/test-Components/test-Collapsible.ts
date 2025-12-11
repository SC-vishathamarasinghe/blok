import { test, expect, Page } from '@playwright/test';

export async function testCollapsible(page: Page){
    // Verify that collapsible is visible
    const collapsible = page.locator('[data-slot="collapsible"]').first();
    await expect(collapsible).toBeVisible();  

    // Verify that title is visible
    const collapsibleTitle = collapsible.locator('h4', { hasText: '@products' });
    await expect(collapsibleTitle).toBeVisible();
    await expect(collapsibleTitle).toContainText('@products');

    // Verify that trigger is visible
    const collapsibleTrigger = collapsible.locator('[data-slot="collapsible-trigger"]').first(); 
    await expect(collapsibleTrigger).toBeVisible();   

    // Check that collapsible content exists but is hidden initially
    const collapsibleContent = collapsible.locator('[data-slot="collapsible-content"]').first();
    await expect(collapsibleContent).toHaveAttribute('data-state', 'closed');  
    
    // Verify that always visible content "@XMCloud" is visible
    const visibleContent = collapsible.locator('text=@XMCloud').first();
    await expect(visibleContent).toBeVisible();

    // Verify that collapsible content is visible when trigger is clicked
    await collapsibleTrigger.click();
    await expect(collapsibleContent).toHaveAttribute('data-state', 'open');

    // Verift that display collapsible content items when open
    const contentHubItem = collapsibleContent.locator('text=@ContentHub').first();
    await expect(contentHubItem).toBeVisible();
    const cdpItem = collapsibleContent.locator('text=@CDP').first();
    await expect(cdpItem).toBeVisible();
 
}