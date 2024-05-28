import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'

export function prepareNitroConfig(_nuxt: Nuxt, routes: string) {
  _nuxt.options.nitro.prerender = defu(_nuxt.options.nitro.prerender, { crawlLinks: true, routes: [...routes] })
}
