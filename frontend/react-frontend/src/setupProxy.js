const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/user',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
    app.use(
        '/email',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin: true,
        })
    );
};