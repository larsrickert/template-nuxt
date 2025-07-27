// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-28",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint", "@nuxt/test-utils/module"],
  css: ["~/assets/css/main.scss"],
  i18n: {
    defaultLocale: "en-US",
    locales: [{ code: "en-US", file: "en-US.json" }],
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
});
