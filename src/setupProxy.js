const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/api/accountInfo/',
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    })
  );

//   app.use(
//       '/api/board/',
//       createProxyMiddleware({
//         target: 'http://127.0.0.1:8000',
//         changeOrigin: true,
//       })
//   )

};