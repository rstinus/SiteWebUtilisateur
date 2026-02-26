// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  cookieControl: {
    cookies: {
      necessary: [
        {
          name: 'Cookies fonctionnels',
          id: 'cw',
        }
      ],
      optional: [],
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8835033801649104',
          async: true,
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  nitro: {
    externals: {
      inline: ['entities']
    }
  },
  build: {
    transpile: ['@dargmuesli/nuxt-cookie-control','vue']
  },
  routeRules: {
    '/': { redirect: '/chronos' },
  }
})