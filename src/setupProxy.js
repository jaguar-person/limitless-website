const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api/v2',
        createProxyMiddleware({
            target: "https://rusticated.com",
            changeOrigin: true,
            ws: true,
        })
    );
};
