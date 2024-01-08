// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  devtools: { enabled: true },
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...https://github.com/Lavu2002/blogWebsite-FrontEnd.git
  ],
  vite: {
    vue: {
      // template: {
      //   transformAssetUrls,
      // },
    },
  },
})

