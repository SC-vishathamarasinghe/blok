import { test, expect, Page } from '@playwright/test';

export async function testTable(page: Page){
    // Verify that display the table with correct structure
    const tableContainer = page.locator('[data-slot="table-container"]');
    await expect(tableContainer).toBeVisible();

    // Verify table element exists
    const table = tableContainer.locator('[data-slot="table"]');
    await expect(table).toBeVisible();

    // Verify table header exists
    const tableHeader = table.locator('[data-slot="table-header"]');
    await expect(tableHeader).toBeVisible();

    // Verify table body exists
    const tableBody = table.locator('[data-slot="table-body"]');
    await expect(tableBody).toBeVisible();

    // Verify that display all table headers correctly
    const headerRow = tableHeader.locator('tr');
    const headers = headerRow.locator('[data-slot="table-head"]');
    const headerTexts = await headers.allTextContents();
    expect(headerTexts).toContain('Feature');
    expect(headerTexts).toContain('Description');
    expect(headerTexts).toContain('Benefit');
    expect(headerTexts).toContain('Use case');

    // Verify that Table header has the expected classes
    const classHeader = await headerRow.getAttribute('class');
    expect(classHeader).toContain('border-b');
    expect(classHeader).toContain('transition-colors');
    expect(classHeader).toContain('hover:bg-muted/50');

    // Verify that display all table data correctly
    const dataRows = tableBody.locator('[data-slot="table-row"]');

    // Verify first row data
    const firstRow = dataRows.first();
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Personalization');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('Deliver tailored experiences');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('Increase engagement');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('Personalized product recommendations');

    // Verify second row data
    const secondRow = dataRows.nth(1);
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Composable DXP');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('Modular architecture');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('Faster innovation');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('Launching new microsites');

    // Verify third row data
    const thirdRow = dataRows.nth(2);
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Content Management');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('Centralized platform');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('Consistent brand messaging');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('Managing global campaigns');

    // Verify fourth row data
    const fourthRow = dataRows.nth(3);
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('AI-Powered Insights');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('Predictive analytics');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('Smarter decisions');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('Using AI to optimize');

    // Verify that Table header has the expected classes
    const classBody = await tableBody.locator('tr').nth(0).getAttribute('class');
    expect(classBody).toContain('border-b');
    expect(classBody).toContain('transition-colors');
    expect(classBody).toContain('hover:bg-muted/50');
}