import { test, expect, Page } from '@playwright/test';

export async function testAvatar(page: Page){
  // Find the avatar with an image
    const avatar = page.locator('[data-slot="avatar"]').first();
    
  // Check that avatar is visible
    await expect(avatar).toBeVisible();
  
  // Check that the avatar image exists
    const avatarImage = avatar.locator('[data-slot="avatar-image"]');
    await expect(avatarImage).toBeVisible();
  
  // Verify the image has the correct alt text
    await expect(avatarImage).toHaveAttribute('alt', 'Frank Grinaert');
  
}

export async function testFallbackAvatar(page: Page){
  // Find the avatar which only has fallback
    const avatars = page.locator('[data-slot="avatar"]');
    const fallbackAvatar = avatars.nth(1);
    
  // Check that fallback avatar is visible
    await expect(fallbackAvatar).toBeVisible();
    const fallback = fallbackAvatar.locator('[data-slot="avatar-fallback"]');
    await expect(fallback).toBeVisible();
    await expect(fallback).toContainText('BM');
  
}

export async function testLargeAvatar(page: Page){
  
  // Find the group of large avatars (third group)
    const avatarGroup = page.locator('[data-slot="avatar"]').nth(2).locator('..');
    
  // Verify multiple avatars are present in the group
    const avatarsInGroup = avatarGroup.locator('[data-slot="avatar"]');
    const count = await avatarsInGroup.count();
    expect(count).toBeGreaterThanOrEqual(3);
  
  // Check that each avatar in the group is visible
    for (let i = 0; i < count; i++) {
        await expect(avatarsInGroup.nth(i)).toBeVisible();
    }

  // display fallback text in avatar group
    const avatars = page.locator('[data-slot="avatar"]');
    
  // Check the first avatar in the group has fallback "CN"
    const firstGroupAvatar = avatars.nth(2);
    const fallback = firstGroupAvatar.locator('[data-slot="avatar-fallback"]');
    await expect(fallback).toContainText('CN');

  // correct image source for avatars with images
    const avatar = page.locator('[data-slot="avatar"]').first();
    const avatarImage = avatar.locator('[data-slot="avatar-image"]');
  
  // Verify the image source
    const imageSrc = await avatarImage.getAttribute('src');
    expect(imageSrc).toContain('slack-edge.com');
  
}

export async function testInteractiveAvatar(page: Page){
  // Find the interactive avatar group (last group)
    const avatars = page.locator('[data-slot="avatar"]');
    const interactiveGroup = avatars.nth(3).locator('..');
  
  // Verify the group exists
    await expect(interactiveGroup).toBeVisible();
  
  // Check that avatars in interactive group are visible
    const interactiveAvatars = interactiveGroup.locator('[data-slot="avatar"]');
    const count = await interactiveAvatars.count();
    expect(count).toBeGreaterThanOrEqual(3);
  
  // The hover effect might change spacing, verify avatars are still visible
  await interactiveAvatars.first().hover();
  await expect(interactiveAvatars.first()).toBeVisible();
  
}
