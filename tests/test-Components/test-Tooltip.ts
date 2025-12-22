import { test, expect, Page } from '@playwright/test';

export async function testTooltip(page: Page){
    // Verify that tooltip section is visible
    const tooltipSection = page.locator('[id="tooltip"]');

    // Verify that display hover button
    const hoverButton = tooltipSection.locator('button', { hasText: /Hover/ });
    await expect(hoverButton).toBeVisible();

    // Verify that open tooltip when button is hovered
    await hoverButton.hover();
    // Wait for tooltip to appear
    const tooltipContent = page.locator('[role="tooltip"], [data-radix-popper-content-wrapper]')
    const tooltipText = tooltipContent.locator('span:nth-child(2)');
    await expect(tooltipText).toBeVisible();
    
    // Verify tooltip text content
    await expect(tooltipText).toHaveText('Add to library');
    await expect(tooltipText).toBeVisible();
}