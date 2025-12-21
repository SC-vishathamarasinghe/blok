import { test, expect, Page } from '@playwright/test';

export async function testTextareaBasic(page: Page){
    // Verify that the Basic Textarea is visible
    const textareaBasic = page.locator('[id="textarea-basic"]');
    await expect(textareaBasic).toBeVisible();

    // Verify that have associated label
    const label = textareaBasic.locator('label[for="basic-textarea"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Message');

    // verify that textarea is visible
    const textarea = textareaBasic.locator('[id="basic-textarea"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Type your message here.');

    // Verify that Primary Switch has the expected classes
    const classList = await textarea.getAttribute('class');
    expect(classList).toContain('placeholder:text-muted-foreground');
    expect(classList).toContain('focus-visible:border-primary');
    expect(classList).toContain('dark:aria-invalid:ring-destructive/40');
    expect(classList).toContain('bg-white');
    expect(classList).toContain('text-md');
    expect(classList).toContain('min-h-16');
    expect(classList).toContain('rounded-md');
    
    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}

export async function testTextareaInvalid(page: Page){
    // Verify that the Invalid Textarea is visible
    const textareaInvalid = page.locator('[id="textarea-invalid"]');
    await expect(textareaInvalid).toBeVisible();

    // Verify that have associated label
    const label = textareaInvalid.locator('label[for="invalid-textarea"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Message');

    // verify that textarea is visible
    const textarea = textareaInvalid.locator('[id="invalid-textarea"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Type your message here.');

    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}

export async function testTextareaWithLabel(page: Page){
    // Verify that the Textarea with Label is visible
    const textareaWithLabel = page.locator('[id="textarea-with-label"]');
    await expect(textareaWithLabel).toBeVisible();

    // Verify that have associated label
    const label = textareaWithLabel.locator('label[for="textarea-demo-message"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Message');

    // verify that textarea is visible
    const textarea = textareaWithLabel.locator('[id="textarea-demo-message"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Type your message here.');

    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}

export async function testTextareaWithLabelAndDescription(page: Page){
    // Verify that the Textarea with Label and Description is visible
    const textareaWithLabelAndDescription = page.locator('[id="textarea-with-label-and-description"]');
    await expect(textareaWithLabelAndDescription).toBeVisible();

    // Verify that have associated label
    const label = textareaWithLabelAndDescription.locator('label[for="textarea-demo-message-2"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Message');

    // verify that textarea is visible
    const textarea = textareaWithLabelAndDescription.locator('[id="textarea-demo-message-2"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Type your message here.');

    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);

    // verify that display description text for textarea with description
    const description = textareaWithLabelAndDescription.locator('text=Type your message and press enter to send.');
    await expect(description).toBeVisible();
}

export async function testTextareaDisabled(page: Page){
    // Verify that the Disabled Textarea is visible
    const textareaDisabled = page.locator('[id="textarea-disabled"]');
    await expect(textareaDisabled).toBeVisible();

    // Verify that have associated label
    const label = textareaDisabled.locator('label[for="textarea-demo-disabled"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Disabled Textarea');

    // verify that textarea is visible and disabled
    const textarea = textareaDisabled.locator('[id="textarea-demo-disabled"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Type your message here.');
    await expect(textarea).toBeDisabled();
}

export async function testTextareaSmall(page: Page){
    // Verify that the Small Textarea is visible
    const textareaSmall = page.locator('[id="textarea-small"]');
    await expect(textareaSmall).toBeVisible();

    // Verify that have associated label
    const label = textareaSmall.locator('label[for="small-textarea"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Small (3 rows)');

    // verify that textarea is visible
    const textarea = textareaSmall.locator('[id="small-textarea"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Small textarea');

    // Verify that Primary Switch has the expected attributes
    await expect(textarea).toHaveAttribute('rows', '3');
    const classList = await textarea.getAttribute('class');
    expect(classList).toContain('min-h-[60px]');
    
    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}

export async function testTextareaLarge(page: Page){
    // Verify that the Large Textarea is visible
    const textareaLarge = page.locator('[id="textarea-large"]');
    await expect(textareaLarge).toBeVisible();

    // Verify that have associated label
    const label = textareaLarge.locator('label[for="large-textarea"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Large (8 rows)');

    // verify that textarea is visible
    const textarea = textareaLarge.locator('[id="large-textarea"]');
    await expect(textarea).toBeVisible();
    await expect(textarea).toHaveAttribute('placeholder', 'Large textarea');

    // Verify that Primary Switch has the expected attributes
    await expect(textarea).toHaveAttribute('rows', '8');
    const classList = await textarea.getAttribute('class');
    expect(classList).toContain('min-h-[160px]');
    
    // verify that allow typing in textarea
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}

export async function testTextareaWithDefaultValue(page: Page){
    // Verify that the Textarea Pre-Filled is visible
    const textareaPreFilled = page.locator('[id="textarea-pre-filled"]');
    await expect(textareaPreFilled).toBeVisible();

    // Verify that have associated label
    const label = textareaPreFilled.locator('label[for="textarea-with-value"]');
    await expect(label).toBeVisible();
    await expect(label).toHaveText('Pre-filled Textarea');

    // verify that textarea is visible and has the expected value
    const textarea = textareaPreFilled.locator('[id="textarea-with-value"]');
    await expect(textarea).toBeVisible();
    const expectedValue = 'This textarea comes with some pre-filled content. You can edit this text or add more content as needed.';
    await expect(textarea).toHaveValue(expectedValue);

    // verify that allow typing in textarea
    await textarea.clear();
    const testText = 'This is a test message for the textarea component.';
    await textarea.fill(testText);
    await expect(textarea).toHaveValue(testText);
}