import { test, expect, Page } from '@playwright/test';

export async function testTable(page: Page){
    // Verify that display the table with correct structure
    const tableID = page.locator('[id="table"]');
    const tableContainer = tableID.locator('[data-slot="table-container"]');
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
}

export async function testDataTable(page: Page){
    // Verify that display the table with correct structure
    const tableID = page.locator('[id="data-table"]');
    const tableContainer = tableID.locator('[data-slot="table-container"]');
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
    expect(headerTexts).toContain('Keyword');
    expect(headerTexts).toContain('Clicks');
    expect(headerTexts).toContain('CTR');
    expect(headerTexts).toContain('Change');
    expect(headerTexts).toContain('Views');
    expect(headerTexts).toContain('Visits');
    expect(headerTexts).toContain('Unique views');

    // Verify that Table header has the expected classes
    const classHeader = await headerRow.getAttribute('class');
    expect(classHeader).toContain('border-b');
    expect(classHeader).toContain('transition-colors');
    expect(classHeader).toContain('hover:bg-muted/50');

    // Verify that display all table data correctly
    const dataRows = tableBody.locator('[data-slot="table-row"]');

    // Verify first row data
    const firstRow = dataRows.nth(0);
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Product search');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('235');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('24.00%');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('50.8K');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(4)).toContainText('235');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(5)).toContainText('235');
    await expect(firstRow.locator('[data-slot="table-cell"]').nth(6)).toContainText('235');

    // Verify second row data
    const secondRow = dataRows.nth(1);
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Pricing');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('2032');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('15.20%');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('5 sec');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(4)).toContainText('2032');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(5)).toContainText('2032');
    await expect(secondRow.locator('[data-slot="table-cell"]').nth(6)).toContainText('2032');

    // Verify third row data
    const thirdRow = dataRows.nth(2);
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Features');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('1245');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('8.20%');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('50.8K');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(4)).toContainText('1245');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(5)).toContainText('1245');
    await expect(thirdRow.locator('[data-slot="table-cell"]').nth(6)).toContainText('1245');

    // Verify fourth row data
    const fourthRow = dataRows.nth(3);
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(0)).toContainText('Support');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(1)).toContainText('456');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(2)).toContainText('21.40%');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(3)).toContainText('50.8K');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(4)).toContainText('456');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(5)).toContainText('456');
    await expect(fourthRow.locator('[data-slot="table-cell"]').nth(6)).toContainText('456');
}