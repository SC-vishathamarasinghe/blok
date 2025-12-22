import { test, expect, Page } from '@playwright/test';

export async function testTabsDefault(page: Page){
    // Verify that default tabs with Account and Password
    const tabsDefault = page.locator('[id="tabs-default"]');
    await expect(tabsDefault).toBeVisible();

    // Verify tabs are visible
    const tabsList = tabsDefault.locator('[data-slot="tabs-list"]');
    await expect(tabsList).toBeVisible();

    // Check Account tab is present
    const accountTab = tabsList.getByRole('tab', { name: 'Account' });
    await expect(accountTab).toBeVisible();
    
    // Check Password tab is present
    const passwordTab = tabsList.getByRole('tab', { name: 'Password' });
    await expect(passwordTab).toBeVisible();

    // Verify Account tab is active by default
    await expect(accountTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentAccount = tabsDefault.locator('[data-slot="tabs-content"]').nth(0);
    await expect(tabsContentAccount).toBeVisible();
    // Verify Account content is visible
    const accountContent = tabsContentAccount.filter({ hasText: 'Make changes to your account here. Click save when you\'re done.' });
    await expect(accountContent).toBeVisible();

    // Verify that switch between Account and Password tabs
    await passwordTab.click();
    // Verify Password tab is active
    await expect(passwordTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentPassword = tabsDefault.locator('[data-slot="tabs-content"]').nth(1);
    await expect(tabsContentPassword).toBeVisible();
    // Verify Password content is visible
    const passwordContent = tabsContentPassword.filter({ hasText: 'Change your password here. After saving, you\'ll be logged out.' });
    await expect(passwordContent).toBeVisible();
}

export async function testTabsLine(page: Page){
    // Verify that default tabs with Account and Password
    const tabsDefault = page.locator('[id="tabs-line"]');
    await expect(tabsDefault).toBeVisible();

    // Verify tabs are visible
    const tabsList = tabsDefault.locator('[data-slot="tabs-list"]');
    await expect(tabsList).toBeVisible();

    // Check Account tab is present
    const accountTab = tabsList.getByRole('tab', { name: 'Account' });
    await expect(accountTab).toBeVisible();
    
    // Check Password tab is present
    const passwordTab = tabsList.getByRole('tab', { name: 'Password' });
    await expect(passwordTab).toBeVisible();

    // Verify Account tab is active by default
    await expect(accountTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentAccount = tabsDefault.locator('[data-slot="tabs-content"]').nth(0);
    await expect(tabsContentAccount).toBeVisible();
    // Verify Account content is visible
    const accountContent = tabsContentAccount.filter({ hasText: 'Make changes to your account here. Click save when you\'re done.' });
    await expect(accountContent).toBeVisible();

    // Verify form inputs are visible in Account tab
    const nameInput = accountContent.locator('#tabs-demo-name');
    const usernameInput = accountContent.locator('#tabs-demo-username');
    
    await expect(nameInput).toBeVisible();
    await expect(usernameInput).toBeVisible();
    await expect(nameInput).toHaveValue('Liz');
    await expect(usernameInput).toHaveValue('@liz');

    // Verify that switch between Account and Password tabs
    await passwordTab.click();
    // Verify Password tab is active
    await expect(passwordTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentPassword = tabsDefault.locator('[data-slot="tabs-content"]').nth(1);
    await expect(tabsContentPassword).toBeVisible();
    // Verify Password content is visible
    const passwordContent = tabsContentPassword.filter({ hasText: 'Change your password here. After saving, you\'ll be logged out.' });
    await expect(passwordContent).toBeVisible();

    // Verify form inputs are visible in Password tab
    const currentPasswordInput = passwordContent.locator('#tabs-demo-current');
    const newPasswordInput = passwordContent.locator('#tabs-demo-new');
    
    await expect(currentPasswordInput).toBeVisible();
    await expect(newPasswordInput).toBeVisible();
    await expect(currentPasswordInput).toHaveAttribute('type', 'password');
    await expect(newPasswordInput).toHaveAttribute('type', 'password');
}

export async function testTabsLineIcons(page: Page){
    // Verify that default tabs with Account and Password
    const tabsDefault = page.locator('[id="tabs-line-icons"]');
    await expect(tabsDefault).toBeVisible();

    // Verify tabs are visible
    const tabsList = tabsDefault.locator('[data-slot="tabs-list"]');
    await expect(tabsList).toBeVisible();

    // Check Home tab is present
    const homeTab = tabsList.getByRole('tab', { name: 'Home' });
    await expect(homeTab).toBeVisible();

    // Verify that the Home tab has an icon
    const homeIcon = homeTab.locator('svg');
    await expect(homeIcon).toBeVisible();
    
    // Check Settings tab is present
    const settingsTab = tabsList.getByRole('tab', { name: 'Settings' });
    await expect(settingsTab).toBeVisible();

    // Verify that the Settings tab has an icon
    const settingsIcon = settingsTab.locator('svg');
    await expect(settingsIcon).toBeVisible();

    // Verify Home tab is active by default
    await expect(homeTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentHome = tabsDefault.locator('[data-slot="tabs-content"]').nth(0);
    await expect(tabsContentHome).toBeVisible();
    // Verify Home content is visible
    const homeContent = tabsContentHome.filter({ hasText: 'Home content' });
    await expect(homeContent).toBeVisible();

    // Verify that switch between Home and Settings tabs
    await settingsTab.click();
    // Verify Settings tab is active
    await expect(settingsTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentSettings = tabsDefault.locator('[data-slot="tabs-content"]').nth(1);
    await expect(tabsContentSettings).toBeVisible();
    // Verify Settings content is visible
    const settingsContent = tabsContentSettings.filter({ hasText: 'Settings content' });
    await expect(settingsContent).toBeVisible();
}

export async function testTabsSoftRounded(page: Page){
    // Verify that default tabs with Account and Password
    const tabsDefault = page.locator('[id="tabs-soft-rounded"]');
    await expect(tabsDefault).toBeVisible();

    // Verify tabs are visible
    const tabsList = tabsDefault.locator('[data-slot="tabs-list"]');
    await expect(tabsList).toBeVisible();

    // Check Home tab is present
    const homeTab = tabsList.getByRole('tab', { name: 'Home' });
    await expect(homeTab).toBeVisible();
    
    // Check Settings tab is present
    const settingsTab = tabsList.getByRole('tab', { name: 'Settings' });
    await expect(settingsTab).toBeVisible();

    // Verify Home tab is active by default
    await expect(homeTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentHome = tabsDefault.locator('[data-slot="tabs-content"]').nth(0);
    await expect(tabsContentHome).toBeVisible();
    // Verify Home content is visible
    const homeContent = tabsContentHome.filter({ hasText: 'Home content' });
    await expect(homeContent).toBeVisible();

    // Verify that switch between Home and Settings tabs
    await settingsTab.click();
    // Verify Settings tab is active
    await expect(settingsTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentSettings = tabsDefault.locator('[data-slot="tabs-content"]').nth(1);
    await expect(tabsContentSettings).toBeVisible();
    // Verify Settings content is visible
    const settingsContent = tabsContentSettings.filter({ hasText: 'Settings content' });
    await expect(settingsContent).toBeVisible();

    // Verify that tabs list has the expected classes
    const classList = await tabsList.locator('button').nth(0).getAttribute('class');
    expect(classList).toContain('text-neutral-fg data-[state=active]:text-primary-fg data-[state=active]:bg-primary-bg');
}

export async function testTabsSoftRoundedIcons(page: Page){
    // Verify that default tabs with Account and Password
    const tabsDefault = page.locator('[id="tabs-soft-rounded-icons"]');
    await expect(tabsDefault).toBeVisible();

    // Verify tabs are visible
    const tabsList = tabsDefault.locator('[data-slot="tabs-list"]');
    await expect(tabsList).toBeVisible();

    // Check Preview tab is present
    const previewTab = tabsList.getByRole('tab', { name: 'Preview' });
    await expect(previewTab).toBeVisible();

    // Verify that the Preview tab has an icon
    const previewIcon = previewTab.locator('svg');
    await expect(previewIcon).toBeVisible();
    
    // Check Code tab is present
    const codeTab = tabsList.getByRole('tab', { name: 'Code' });
    await expect(codeTab).toBeVisible();

    // Verify that the Code tab has an icon
    const codeIcon = codeTab.locator('svg');
    await expect(codeIcon).toBeVisible();

    // Verify Preview tab is active by default
    await expect(previewTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentPreview = tabsDefault.locator('[data-slot="tabs-content"]').nth(0);
    await expect(tabsContentPreview).toBeVisible();
    // Verify Preview content is visible
    const previewContent = tabsContentPreview.filter({ hasText: 'Preview content' });
    await expect(previewContent).toBeVisible();

    // Verify that switch between Preview and Code tabs
    await codeTab.click();
    // Verify Code tab is active
    await expect(codeTab).toHaveAttribute('data-state', 'active');
    // Verify tabs content are visible
    const tabsContentCode = tabsDefault.locator('[data-slot="tabs-content"]').nth(1);
    await expect(tabsContentCode).toBeVisible();
    // Verify Code content is visible
    const codeContent = tabsContentCode.filter({ hasText: 'Code content' });
    await expect(codeContent).toBeVisible();

    // Verify that tabs list has the expected classes
    const classList = await tabsList.locator('button').nth(0).getAttribute('class');
    expect(classList).toContain('text-neutral-fg data-[state=active]:text-primary-fg data-[state=active]:bg-primary-bg');
}