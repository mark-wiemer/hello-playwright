import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("index.html");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Test page");
});

test("has what I want", async ({ page }) => {
  await page.goto("index.html");

  await expect(
    page
      .locator(`[aria-label="Main menu"]`)
      .getByText("This is what you want.", { exact: true })
  ).toBeVisible();
});
