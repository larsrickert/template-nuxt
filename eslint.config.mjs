// @ts-check
import playwright from "eslint-plugin-playwright";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  // Your custom configs here
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/playwright/**"],
  },
  {
    files: ["**/*.vue"],
    rules: {
      // do not use self closing tags for regular HTML tags
      // see https://eslint.vuejs.org/rules/html-self-closing
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
        },
      ],
    },
  },
]);
