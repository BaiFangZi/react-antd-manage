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
        'https://mock.mengxuegu.com/mock/60eec3e06644dc4a672d42e0/react-ant-manage',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  )
}
