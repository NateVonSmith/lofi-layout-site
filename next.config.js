const packageJson = require('./package');
const date = new Date();

module.exports = {
    env: {
        ENV: process.env.ENV,
        THEME: {
            PRIMARY: '#272a3d'
        },
        BUILD_TIME: date.toString(),
        BUILD_TIME_ISO: date.toISOString(),
        BUILD_TIMESTAMP: +date,
        APP_NAME: packageJson.name,
        APP_VERSION: packageJson.version
    }
};
