import { expect, test } from "@nuxt/test-utils/playwright";

test("example test", async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page.getByRole("heading", { name: "Welcome to Nuxt!" })).toBeVisible();
});
