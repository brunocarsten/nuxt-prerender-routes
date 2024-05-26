<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Nuxt prerender routes

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<!-- My new Nuxt module for doing amazing things. -->

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- Prerender dynamic routes fetched from your api


## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-prerender-routes
```

That's it! You can now use nuxt-prerender-routes in your Nuxt app ✨

Add nuxt-prerender-routes to your nuxt.config modules setup

```bash
  modules: [
    'nuxt-prerender-routes'
  ]
```

Add prerenderRoutes object with prerender option enabled and your's api url to fetch your routes.
You can also define a route prefix (optional) with 'routePrefix' option

```bash
  prerenderRoutes: {
    prerender: true,
    apiUrl: https://yours-api/url,
    routePrefix: ''
  }
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-prerender-routes/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-prerender-routes

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-prerender-routes.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-prerender-routes

[license-src]: https://img.shields.io/npm/l/nuxt-prerender-routes.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-prerender-routes

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
