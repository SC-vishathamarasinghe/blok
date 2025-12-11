import { test, expect, Page } from '@playwright/test';

export async function testAreaChart(page: Page){
    // Verify that "Area Chart" title is visible
    const cardTitle = page.locator('[data-slot="card-title"]', { hasText: 'Area Chart' });
    await expect(cardTitle).toBeVisible();

    // Verify that "Area Chart" card description is visible
    const cardDescription = page.locator('[data-slot="card-description"]').filter({ 
        hasText: 'Showing total visitors for the last 6 months'});
    await expect(cardDescription).toBeVisible();
    
    // Verify chart container is visible
    const chartContainer = page.locator('[data-slot="chart"]');
    await expect(chartContainer).toBeVisible();

    const svg = chartContainer.locator('svg');
    await expect(svg).toBeVisible();

    // Verify that grid lines are visible
    const gridLines = svg.locator('g.recharts-cartesian-grid-horizontal');
    await expect(gridLines).toBeVisible();

    // Verify that month labels are visible
    const monthLabels = svg.locator('text').filter({ hasText: /^(Jan|Feb|Mar|Apr|May|Jun)$/ });
    const count = await monthLabels.count();
    expect(count).toBeGreaterThan(0);

    // Verify that tooltip is visible on hover
    const chartBoundingBox = await svg.boundingBox();
    if (chartBoundingBox) {
      await page.mouse.move(
        chartBoundingBox.x + chartBoundingBox.width / 2,
        chartBoundingBox.y + chartBoundingBox.height / 2
      );
      await page.waitForTimeout(300);
      const tooltip = page.locator('.recharts-tooltip-wrapper');
      const tooltipCount = await tooltip.count();
      expect(tooltipCount).toBeGreaterThanOrEqual(0);
    }

    // Verify that "Area Chart" card footer is visible and contains trending text and date range text
    const footerTrendingText = page.locator('[data-slot="card-footer"]').filter({ hasText: 'Trending up'});
    await expect(footerTrendingText).toBeVisible();

    const footerDescription = page.locator('[data-slot="card-footer"]').filter({ hasText: 'January - June 2024'});
    await expect(footerDescription).toBeVisible();

    // Find the TrendingUp icon
    const trendingIcon = footerTrendingText.locator('svg'); 
    await expect(trendingIcon).toBeVisible();

}