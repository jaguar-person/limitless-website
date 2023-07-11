const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
app.get('/health', (req, res) => res.sendStatus(204));

// Middleware
app.set('trust proxy', true);
app.use(logger(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use((req, res, next) => {
	res.setHeader('X-Powered-By', 'Rusticated');
	next();
});

// Static files
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Prevent JS files from being cached as HTML
app.get('/static/*', (req, res) => {
	res.sendStatus(404);
});

// Cloudflare access tokens stuff for non-prod environments
if (process.env.RC_INGRESS_HOSTNAME.includes('test.')) {
	app.get('/cf', (req, res) => {
		res.json({
			'CF-Access-Client-Id': "1c8186e0728a1a2c194cb668e2d05e90.access.rusticated.com",
			'CF-Access-Client-Secret': "88b62150ce40dfb7aeba1256a5850e60bd8b922ead3186d39451dd38dbfde486"
		});
	});
}

// React router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(8080, () => console.log('App listening on 8080'));
