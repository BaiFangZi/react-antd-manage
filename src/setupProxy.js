// const { createProxyMiddleware } = require('http-proxy-middleware')
// module.export = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:3200',
//       changeOrigin: true,
//     })
//   )
// }

const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api', {
      target:
        'https://mock.mengxuegu.com/mock/60a4ab7dff333b1b32495812/api_copy',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  )
}
