// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-19",
  devtools: { enabled: true },
  typescript: { typeCheck: "build" },
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
  css: ["~/assets/css/index.scss"],
  i18n: {
    defaultLocale: "en-US",
    locales: [{ code: "en-US", file: "en-US.json", name: "English" }],
  },
  nitro: {
    compressPublicAssets: true,
  },
});
