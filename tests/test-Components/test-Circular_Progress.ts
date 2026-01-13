import { test, expect, Page } from '@playwright/test';

export async function testCircularProgressDefault(page: Page){
    // Verify that the Circular Progress is visible
    const circularDefault = page.locator('[id="circular-default"]');
    await expect(circularDefault).toBeVisible();

    // Verify that Circular Progress has the expected classes
    const classList = await circularDefault.locator('[data-testid="circular-progress"]').getAttribute('class');
    expect(classList).toContain('inline-block');
    expect(classList).toContain('rounded-full');
    expect(classList).toContain('border-4');
    expect(classList).toContain('border-t-purple-600');
    expect(classList).toContain('border-r-purple-600');
    expect(classList).toContain('border-b-gray-200');
    expect(classList).toContain('border-l-gray-200');
    expect(classList).toContain('w-6');
    expect(classList).toContain('h-6');
}

export async function testCircularProgressVariant(page: Page){
    // Verify that the Circular Progress is visible
    const circularVariant = page.locator('[id="circular-variant"]');
    await expect(circularVariant).toBeVisible();

    // Verify that Circular Progress has the expected classes
    const animateClass = await circularVariant.locator('[data-testid="circular-progress"]').getAttribute('class');
    expect(animateClass).toContain('animate-spin');

    // Verify that the Circular Progress is rotating (animation)
    const animateCircular = circularVariant.locator('[data-testid="circular-progress"]');
    const animation = await animateCircular.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        return {
          animationName: styles.animationName,
          animationDuration: styles.animationDuration,
          animationIterationCount: styles.animationIterationCount,
        };
      });
      
      // Verify animation properties
      expect(animation.animationName).not.toBe('none');
      expect(animation.animationDuration).not.toBe('0s');
      expect(animation.animationIterationCount).toBe('infinite');
}

export async function testCircularProgressWithText(page: Page){
    // Verify that the Circular Progress is visible
    const circularWithMessage = page.locator('[id="circular-withText"]');
    await expect(circularWithMessage).toBeVisible();

    // Verify that display Circular Progress with message
    const circularMessage = circularWithMessage.locator('text=Loading...')
    await expect(circularMessage).toContainText('Loading...');
}