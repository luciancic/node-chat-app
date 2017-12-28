const config = require('./config.json');
const env = process.env.NODE_ENV || 'dev';

if (env === 'dev') {
  Object.keys(config).forEach((key) => {
    process.env[key] = config[key];
  });
}
