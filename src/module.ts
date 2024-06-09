import {
  defineNuxtModule,
  useLogger,
  addPrerenderRoutes,
} from '@nuxt/kit'
import { $fetch } from 'ofetch'
import { prepareNitroConfig } from './utils'

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiUrl: string | null
  prerender?: boolean
  routePrefix?: string | null
}

declare module 'nuxt/schema' {
  interface NuxtOptions {
    prerenderRoutes: ModuleOptions
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-prerender-routes',
    configKey: 'prerenderRoutes',
    compatibility: {
      nuxt: '^3.10.X',
    },
  },

  // Default configuration options of the Nuxt prerender routes module
  defaults: nuxt => ({
    prerender: !nuxt.options.dev && (process.env.NODE_ENV === 'production'),
    apiUrl: null,
    routePrefix: null,
  }),

  async setup(_options, _nuxt) {
    const logger = useLogger('nuxt-prerender-routes')

    if (!_options.prerender) {
      logger.warn('Prerender is disabled or Nuxt is in dev mode')
      return
    }

    if (!_options.apiUrl) {
      logger.warn('No api url defined on nuxt.config')
      return
    }

    logger.info(`current apiUrl is:${_options.apiUrl}`)

    if (_options.apiUrl && _options.prerender) {
      try {
        logger.start(`Retrivieng routes from ${_options.apiUrl}`)
        const data = await $fetch(`${_options.apiUrl}`)
        if (data) {
          logger.success('Routes fetched...')

          const routes = data.map((route: string) => {
            if (_options.routePrefix) {
              logger.info(`/${_options.routePrefix}/${route}`)
              return `/${_options.routePrefix}/${route}`
            }

            logger.info(`/${route}`)
            return `/${route}`
          })

          prepareNitroConfig(_nuxt, routes)

          addPrerenderRoutes(routes)
          logger.success('Dynamic routes added to nitro config.')
        }
      }
      catch (error) {
        logger.error(`Unabled to fetch from ${_options.apiUrl}`)
      }
    }
  },
})
