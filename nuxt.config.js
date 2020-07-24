
export default {
  mode: 'spa',

  render: {
    resourceHints: false,
  },

  router: {
    mode: 'hash',
  },

  modules: [
    '@nuxtjs/proxy',
  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    treeShake: true,
    theme: {
      dark: true,
    },
    defaultAssets: false,
    // defaultAssets: {
    //   font: {
    //     family: 'Roboto',
    //   },
    //   icons: false,
    // },
  },

  server: {
    host: '0.0.0.0',
    port: 3001,
  },

  proxy: {
    '/api': process.env.PROXY_URL || 'http://127.0.0.1:7000',
    ws: true,
  },

  plugins: [
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/i18n', ssr: false },
    { src: '~/plugins/vuetify', ssr: false },
  ],

  css: [
  ],

  head: {
    title: 'NUXT VUETIFY TEMPLATE',

    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0ff5' },
      { name: 'fragment', content: '!' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'msapplication-TileImage', content: '/icons/favicon.png' },
      { name: 'msapplication-TileColor', content: '#000' },
    ],

    link: [
      { rel: 'shortcut icon', href: '/icons/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon.png' },
      { rel: 'apple-touch-icon', href: '/icons/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'fonts/material-icons.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'fonts/font-awesome.css' },
    ],
  },
}
