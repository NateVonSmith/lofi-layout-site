const packageJson = require('./package');
const date = new Date();

module.exports = {
    env: {
        ENV: process.env.ENV,
        GOOGLE_TRACKING_ID: 'UA-36587141-17',
        SLACK: {
            API_TOKEN: 'xoxb-1318809134980-1336547187808-hCCLjSLFdo5NsAQOWR1BGZl7',
            WEBSITE_CHANNEL_ID: 'C0196JASPQS'
        },
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
