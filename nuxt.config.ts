// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control'
  ]
})