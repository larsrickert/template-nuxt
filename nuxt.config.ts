// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-28",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint", "@nuxt/test-utils/module"],
  css: ["~/assets/css/main.scss"],
  i18n: {
    lazy: true,
    defaultLocale: "en-US",
    locales: [{ code: "en-US", file: "en-US.json" }],
    bundle: {
      // see: https://github.com/nuxt-modules/i18n/issues/3238#issuecomment-2672492536
      optimizeTranslationDirective: false,
    },
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
});
