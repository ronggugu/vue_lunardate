const pxtorem = require('postcss-pxtorem')

module.exports = {
  lintOnSave: true,
  outputDir: process.env.VUE_APP_URL === 'production' ? 'dist' : 'test',
  publicPath: process.env.VUE_APP_URL,
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    port: 4567,
    /* proxy: {
      '/apis': {
        target: process.env.VUE_APP_API_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      }
    } */
  }
}