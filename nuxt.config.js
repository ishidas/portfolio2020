import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Sawako Sagliano',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },
  /*
  ** Customize the progress-bar color
  */
  router: {
    middleware: ['home'],
  },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/vuetify.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // config.module.rules.push(
      //   {
      //     test: /\.(png|jpe?g|gif|svg|webp)$/,
      //     loader: 'url-loader',
      //     query: {
      //       limit: 1000, // 1kB
      //       name: 'img/[name].[hash:7].[ext]'
      //     }
      //   },
      //   {
      //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //     loader: 'url-loader',
      //     query: {
      //       limit: 1000, // 1kB
      //       name: 'fonts/[name].[hash:7].[ext]'
      //     }
      //   }
      // )
      // return config;
    }
  }
}
