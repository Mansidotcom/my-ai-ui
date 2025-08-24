import { test, expect } from "@playwright/test";

//  Test 1: Homepage title check
test("homepage has correct title", async ({ page }) => {
  await page.goto("/");
  
  await expect(page).toHaveTitle("Create Next App"); 
});

// Test 2: Check heading
test("homepage shows a heading", async ({ page }) => {
  await page.goto("/");
  const heading = page.locator("h1"); 
  await expect(heading).toHaveText(" Next.js 15 + Tailwind working!"); 
});

//  Test 3: Navigation test (agar link hai)
test("clicks on docs link and goes to docs", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Docs"); 
  await expect(page).toHaveURL(/.*docs/); 
});

//  Test 4: Dark mode toggle (agar button hai)
test("dark mode toggle works", async ({ page }) => {
  await page.goto("/");
  const toggle = page.locator("button:has-text('Toggle Dark Mode')");
  if (await toggle.isVisible()) {
    await toggle.click();
    await expect(page.locator("body")).toHaveClass(/dark/);
  }
});
