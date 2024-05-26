export default defineNuxtConfig({
  modules: ['../src/module'],

  prerenderRoutes: {
    prerender: true,
    apiUrl: 'https://yours/api/url',
    routePrefix: 'yours-prefix',
  },

  devtools: { enabled: true },

  routeRules: {
    '/**': { prerender: true },
  },
})
