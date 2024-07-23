// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-23",
  typescript: { typeCheck: "build" },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint", "@nuxt/test-utils/module"],
  css: ["~/assets/css/main.scss"],
  i18n: {
    lazy: true,
    langDir: "lang",
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
