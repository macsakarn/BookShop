export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'user-page',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:3000'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token.token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'userData',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/user/login', method: 'post' },
          logout: false,
          user: { url: '/user/protected', method: 'get' }
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    port: 8080,
  },
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000,
  },
}
