module.exports = {
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: ['@/plugins/element-ui'],
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'Munchkin Level Counter ',
    htmlAttrs: {
      lang: 'pt-br'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7048e8' },
  /*
  ** Customize app manifest
  */

  manifest: {
    name: 'Munchkin Level Counter',
    short_name: 'Munchkin LC',
    background_color: '#fafafa',
    description: 'Contador de níveis do Munchkin',
    dir: 'ltr',
    display: 'standalone',
    lang: 'pt-br',
    theme_color: '#7048e8'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa']
}
