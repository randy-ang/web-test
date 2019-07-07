const openBrowser = require('react-dev-utils/openBrowser');
const {prepareUrls} = require('react-dev-utils/WebpackDevServerUtils');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT) || 8090;
const urls = prepareUrls(protocol, HOST, port);
openBrowser(urls.localUrlForBrowser);
