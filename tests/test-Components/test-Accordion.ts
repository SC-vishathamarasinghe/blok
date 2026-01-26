import { test, expect, Page } from '@playwright/test';

export async function testAccordian(page: Page){
  // Verify that display accordion is visible
  const accordion = page.locator('[data-slot="accordion"]');
  await expect(accordion).toBeVisible();

  // Verify that display accordion items are visible
  // Item 1
  const accordionItem1 = accordion.locator('[data-slot="accordion-item"]').nth(0);
  await expect(accordionItem1).toBeVisible();
  const triggerItem1 = accordionItem1.locator('button[data-slot="accordion-trigger"]');
  await expect(triggerItem1).toContainText('Why do developers prefer dark mode?');
  const contentItem1 = accordionItem1.locator('[data-slot="accordion-content"]');
  // Item 2
  const accordionItem2 = accordion.locator('[data-slot="accordion-item"]').nth(1);
  await expect(accordionItem2).toBeVisible();
  const triggerItem2 = accordionItem2.locator('button[data-slot="accordion-trigger"]');
  await expect(triggerItem2).toContainText('Why do Java developers wear glasses?');
  const contentItem2 = accordionItem2.locator('[data-slot="accordion-content"]');
  // Item 3
  const accordionItem3 = accordion.locator('[data-slot="accordion-item"]').nth(2);
  await expect(accordionItem3).toBeVisible();
  const triggerItem3 = accordionItem3.locator('button[data-slot="accordion-trigger"]');
  await expect(triggerItem3).toContainText('What do developers cheer at birthday parties?');
  const contentItem3 = accordionItem3.locator('[data-slot="accordion-content"]');

  // open first
  await accordionItem1.click();
  await page.waitForTimeout(40);
  await expect(contentItem1).toBeVisible();
  await expect(contentItem1).toHaveText('Because light attracts bugs');

  // open second
  await accordionItem2.click();
  await page.waitForTimeout(40);
  await expect(contentItem2).toBeVisible();
  await expect(contentItem2).toHaveText('Because they don’t C#');

  // first should now be closed because of single mode
    await expect(contentItem1).toBeHidden();

  // open third
  await accordionItem3.click();
  await page.waitForTimeout(40);
  await expect(contentItem3).toBeVisible();
  await expect(contentItem3).toHaveText('“Hip, hip, array!!”');

  // first should now be closed because of single mode
    await expect(contentItem2).toBeHidden();
}
