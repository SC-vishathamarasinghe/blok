import { test, expect, Page } from '@playwright/test';

export async function testDraggable(page: Page){
    // Verify that display draggable component with source and drop zone
    // Wait for the draggable demo to be visible
    await expect(page.locator('text=Basic Drag & Drop')).toBeVisible();
    
    // Verify source area is visible
    await expect(page.locator('text=Source').first()).toBeVisible();
    
    // Verify drop zone is visible
    const draggableButton = page.locator('[data-draggable-id="draggable-button"]');
    await expect(draggableButton).toBeVisible();
    const sourceArea = page.locator('[data-droppable-id="source"]');
    await expect(sourceArea).toBeVisible();
    const dropZone = page.locator('[data-droppable-id="drop-zone"]');
    await expect(dropZone).toBeVisible();
    
    // Get bounding boxes for drag operation
    const sourceBox = await sourceArea.boundingBox();
    const dropZoneBox = await dropZone.boundingBox();
    
    if (sourceBox && dropZoneBox) {
      // Perform drag from source to drop zone
      await draggableButton.dragTo(dropZone, {
        force: true,
      });
      
      // Wait for the drag to complete
      await page.waitForTimeout(1000);
      
      // Verify button is now in drop zone
      await expect(dropZone.locator('[data-draggable-id="draggable-button"]')).toBeVisible();
      
      // Verify success message appears
      await expect(page.locator('text=Successfully Dropped!')).toBeVisible();
      await expect(page.locator('text=Drag the button back to the source area')).toBeVisible();
    }
}