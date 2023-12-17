import DAL_Pages from './DAL/static_pages'
import config from './config'
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-slot',
    htmlAttrs: {
      lang: config.HTML_ATTRS[config.LANG]
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "true"},
	    { href: 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;800&family=Work+Sans&display=swap', rel:"stylesheet" }
    ],
  },
  serverMiddleware: [
    '~/serverMiddleware/redirects',
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            browsers: ["IE 11", "last 2 version"]
          }
        ]
      ]
    }
  },
  sitemap: {
    exclude: [
      '/games',
      '/bonuses'
    ],
    routes: async () => {
      const sitemapData = {
        type: 'sitemap',
        url: ''
      }
      const {data} = await DAL_Pages.getData(sitemapData)
      const {static_page, casino, games} = data
      return static_page.concat(casino, games)
    }
  }
}