import { test, expect, Page } from '@playwright/test';

export async function testEmptyStates(page: Page){
    // Verify that display empty states component
    const emptyStates = page.locator('[data-slot="empty-states"]');
    await expect(emptyStates).toBeVisible();

    // Verify that display image in empty states
    const image = emptyStates.locator('img');
    await expect(image).toBeVisible();
    
    // Verify image has src and alt attributes
    const imageSrc = await image.getAttribute('src');
    expect(imageSrc).toBeTruthy();
    const imageAlt = await image.getAttribute('alt');
    expect(imageAlt).toBeTruthy();
    expect(imageAlt).toBe('magnifier icon');

    // Verify that display correct title and description in empty states
    await expect(emptyStates).toContainText('No search results');
    await expect(emptyStates).toContainText('Try a different search query.');

    // Verify that display action button in empty states
    const actionButton = emptyStates.getByRole('button', { name: 'Reset search' });
    await expect(actionButton).toBeVisible();
    await expect(actionButton).toBeEnabled();
}