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
      target: ' https://mock.mengxuegu.com/mock/6099e32ac7b7385be0a83437/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  )
}
