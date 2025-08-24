import { test, expect } from "@playwright/test";

test("homepage shows the main heading", async ({ page }) => {
  await page.goto("/");
  const heading = page.locator("h1");
  await expect(heading).toHaveText(" Next.js 15 + Tailwind working!");
});
