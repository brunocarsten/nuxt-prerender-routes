import {
  defineNuxtModule,
  addPlugin,
  useLogger,
  createResolver,
  addPrerenderRoutes,
} from '@nuxt/kit'
import { $fetch } from 'ofetch'

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiUrl: string | null
  prerender?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-prerender-routes',
    configKey: 'prerenderRoutes',
  },

  // Default configuration options of the Nuxt module
  defaults: {
    apiUrl: null,
    prerender: true,
  },

  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger('nuxt-prerender-routes')

    if (!_options.apiUrl) {
      logger.error('No api url defined on nuxt.config...')
      return
    }

    if (!_options.prerender) {
      logger.info('Prerender is disabled')
      return
    }

    if (_options.apiUrl && _options.prerender) {
      logger.start('Retrivieng routes from API...')
      const data = await $fetch(`${_options.apiUrl}/api/website/all`)

      if (data) {
        logger.success('Routes fetched...')

        const routes = data.map((route: string) => {
          logger.info(`/website/${route}`)
          return `/website/${route}`
        })

        _nuxt.options.nitro.prerender!.crawlLinks = true
        _nuxt.options.nitro.prerender!.routes?.push(routes)

        addPrerenderRoutes(routes)
      }
    }
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
