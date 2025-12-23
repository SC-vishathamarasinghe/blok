import { test, expect, Page } from '@playwright/test';

export async function testIconVariants(page: Page){
    //Verify that icon variants
    const iconSection = page.locator('[id="icon-variants"]');
    await expect(iconSection).toBeVisible();

    // Check that all three variants are present (default, subtle, filled)
    const svgIcons = iconSection.locator('svg');
    await expect(svgIcons).toHaveCount(3);
}

export async function testIconSizes(page: Page){
    //Verify that icon sizes variants
    const iconSection = page.locator('[id="icon-sizes"]');
    await expect(iconSection).toBeVisible();

    // Check that all six variants are present 
    const svgIcons = iconSection.locator('svg');
    await expect(svgIcons).toHaveCount(6);

    // Verify icon has size variants
    const iconSizesm = iconSection.locator('svg.size-4').first();
    await expect(iconSizesm).toBeVisible();
    const iconSizemd = iconSection.locator('svg.size-5').first();
    await expect(iconSizemd).toBeVisible();
    const iconSizedefault = iconSection.locator('svg.size-6').first();
    await expect(iconSizedefault).toBeVisible();
    const iconSizelg = iconSection.locator('svg.size-7').first();
    await expect(iconSizelg).toBeVisible();
    const iconSizexl = iconSection.locator('svg.size-9').first();
    await expect(iconSizexl).toBeVisible();
    const iconSizexxl = iconSection.locator('svg.size-11').first();
    await expect(iconSizexxl).toBeVisible();
}

export async function testIconColors(page: Page){
    //Verify that icon color schemes
    const iconSection = page.locator('[id="icon-color-schemes"]');
    await expect(iconSection).toBeVisible();

    // Check that all eleven variants are present
    const svgIcons = iconSection.locator('svg');
    await expect(svgIcons).toHaveCount(11);

    // Verify icon has color variants
    const iconColor1 = iconSection.locator('span.text-primary-fg').first();
    await expect(iconColor1).toBeVisible();
    const iconColor2 = iconSection.locator('span.text-neutral-fg').first();
    await expect(iconColor2).toBeVisible();
    const iconColor3 = iconSection.locator('span.text-danger-fg').first();
    await expect(iconColor3).toBeVisible();
    const iconColor4 = iconSection.locator('span.text-warning-fg').first();
    await expect(iconColor4).toBeVisible();
    const iconColor5 = iconSection.locator('span.text-yellow-800').first();
    await expect(iconColor5).toBeVisible();
    const iconColor6 = iconSection.locator('span.text-success-fg').first();
    await expect(iconColor6).toBeVisible();
    const iconColor7 = iconSection.locator('span.text-teal-800').first();
    await expect(iconColor7).toBeVisible();
    const iconColor8 = iconSection.locator('span.text-cyan-800').first();
    await expect(iconColor8).toBeVisible();
    const iconColor9 = iconSection.locator('span.text-blue-800').first();
    await expect(iconColor9).toBeVisible();
    const iconColor10 = iconSection.locator('span.text-info-fg').first();
    await expect(iconColor10).toBeVisible();
    const iconColor11 = iconSection.locator('span.text-pink-800').first();
    await expect(iconColor11).toBeVisible();
}

export async function testIconSubtleVariants(page: Page){
    //Verify that icon subtle variants
    const iconSection = page.locator('[id="icon-subtle-variants"]');
    await expect(iconSection).toBeVisible();

    // Check that all eleven variants are present
    const svgIcons = iconSection.locator('svg');
    await expect(svgIcons).toHaveCount(11);

    // Verify icon has subtle variants
    const iconSubtle1 = iconSection.locator('span.rounded-md.text-primary-fg.bg-primary-bg').first();
    await expect(iconSubtle1).toBeVisible();
    const iconSubtle2 = iconSection.locator('span.rounded-md.text-neutral-fg.bg-neutral-bg').first();
    await expect(iconSubtle2).toBeVisible();
    const iconSubtle3 = iconSection.locator('span.rounded-md.text-success-fg.bg-success-bg').first();
    await expect(iconSubtle3).toBeVisible();
    const iconSubtle4 = iconSection.locator('span.rounded-md.text-danger-fg.bg-danger-bg').first();
    await expect(iconSubtle4).toBeVisible();
    const iconSubtle5 = iconSection.locator('span.rounded-md.text-warning-fg.bg-warning-bg').first();
    await expect(iconSubtle5).toBeVisible();
    const iconSubtle6 = iconSection.locator('span.rounded-md.text-yellow-800.bg-yellow-100').first();
    await expect(iconSubtle6).toBeVisible();
    const iconSubtle7 = iconSection.locator('span.rounded-md.text-teal-800.bg-teal-100').first();
    await expect(iconSubtle7).toBeVisible();
    const iconSubtle8 = iconSection.locator('span.rounded-md.text-cyan-800.bg-cyan-100').first();
    await expect(iconSubtle8).toBeVisible();
    const iconSubtle9 = iconSection.locator('span.rounded-md.text-blue-800.bg-blue-100').first();
    await expect(iconSubtle9).toBeVisible();
    const iconSubtle10 = iconSection.locator('span.rounded-md.text-info-fg.bg-info-bg').first();
    await expect(iconSubtle10).toBeVisible();
    const iconSubtle11 = iconSection.locator('span.rounded-md.text-pink-800.bg-pink-100').first();
    await expect(iconSubtle11).toBeVisible();
}

export async function testIconFilledVariants(page: Page){
    //Verify that icon filled variants
    const iconSection = page.locator('[id="icon-filled-variants"]');
    await expect(iconSection).toBeVisible();

    // Check that all eleven variants are present
    const svgIcons = iconSection.locator('svg');
    await expect(svgIcons).toHaveCount(11);

    // Verify icon has filled variants
    const iconFilled1 = iconSection.locator('span.rounded-md.bg-primary-fg.text-background').first();
    await expect(iconFilled1).toBeVisible();
    const iconFilled2 = iconSection.locator('span.rounded-md.bg-neutral-fg.text-background').first();
    await expect(iconFilled2).toBeVisible();
    const iconFilled3 = iconSection.locator('span.rounded-md.bg-success-fg.text-background').first();
    await expect(iconFilled3).toBeVisible();
    const iconFilled4 = iconSection.locator('span.rounded-md.bg-danger-fg.text-background').first();
    await expect(iconFilled4).toBeVisible();
    const iconFilled5 = iconSection.locator('span.rounded-md.bg-warning-fg.text-background').first();
    await expect(iconFilled5).toBeVisible();
    const iconFilled6 = iconSection.locator('span.rounded-md.bg-yellow-800.text-background').first();
    await expect(iconFilled6).toBeVisible();
    const iconFilled7 = iconSection.locator('span.rounded-md.bg-teal-800.text-background').first();
    await expect(iconFilled7).toBeVisible();        
    const iconFilled8 = iconSection.locator('span.rounded-md.bg-cyan-800.text-background').first();
    await expect(iconFilled8).toBeVisible();
    const iconFilled9 = iconSection.locator('span.rounded-md.bg-blue-800.text-background').first();
    await expect(iconFilled9).toBeVisible();
    const iconFilled10 = iconSection.locator('span.rounded-md.bg-info-fg.text-background').first();
    await expect(iconFilled10).toBeVisible();
    const iconFilled11 = iconSection.locator('span.rounded-md.bg-pink-800.text-background').first();
    await expect(iconFilled11).toBeVisible();
}