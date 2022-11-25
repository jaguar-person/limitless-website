const { createProxyMiddleware } = require('http-proxy-middleware');
const rconf = require('rusty-config');
rconf.load();

module.exports = (app) => {
    app.use('/api/v2',
        createProxyMiddleware({
            target: rconf.get('apiBaseUrl').replace('/api/v2', ''),
            changeOrigin: true,
            ws: true,
            headers: {
                'CF-Access-Client-Id': rconf.get('cloudflareAccessTokens.clientId'),
                'CF-Access-Client-Secret': rconf.get('cloudflareAccessTokens.clientSecret')
            }
        })
    );
};
