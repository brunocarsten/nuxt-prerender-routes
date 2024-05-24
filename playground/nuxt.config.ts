export default defineNuxtConfig({
  modules: ['../src/module'],
  prerenderRoutes: {
    prerender: true,
    apiUrl: process.env.NUXT_API_URL,
  },
  devtools: { enabled: true },

  routeRules: {
    '/**': { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: undefined,
      routes: [],
    },
  },
})
