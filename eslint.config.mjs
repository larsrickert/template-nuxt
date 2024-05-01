// @ts-check
import playwright from "eslint-plugin-playwright";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  // Your custom configs here
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**"],
  },
]);
