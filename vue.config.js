module.exports = {
   pluginOptions: {
      i18n: {
         locale: "en",
         fallbackLocale: "en",
         localeDir: "locales",
         enableInSFC: false
      }
   },
   chainWebpack: config => {
      config.module
         .rule('vue')
         .use('vue-loader')
         .loader('vue-loader')
         .options({
            prettify: false
         })
   }
   // chainWebpack: config => {
   //    config.module
   //       .rule("i18n")
   //       .resourceQuery(/blockType=i18n/)
   //       .type('javascript/auto')
   //       .use("i18n")
   //       .loader("@intlify/vue-i18n-loader")
   //       .end();
   // }
   // publicPath: process.env.NODE_ENV === 'production' ?
   //    '/interline-frankfurt.github.io/' : '/',
}