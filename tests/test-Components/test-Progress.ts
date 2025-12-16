import { test, expect, Page } from '@playwright/test';

export async function testProgress(page: Page){
    // Verify thatdisplay progress component
    const progress = page.locator('[data-slot="progress"]').first();
    await expect(progress).toBeVisible();

    // Check that progress has expected classes
    const classAttribute = await progress.getAttribute('class');
    expect(classAttribute).toBeTruthy();
    expect(classAttribute).toContain('relative');
    expect(classAttribute).toContain('h-2');
    expect(classAttribute).toContain('w-full');
    expect(classAttribute).toContain('overflow-hidden');
    expect(classAttribute).toContain('rounded-full');
    expect(classAttribute).toContain('bg-primary/20');

    const maxProgress = await progress.getAttribute('data-max');
    expect(maxProgress).toBe('100');

    const progressValue = await progress.getAttribute('aria-label');
    expect(progressValue).toBe('Progress: 80%');
}