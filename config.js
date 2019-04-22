const path = require('path');
const dotenv = require('dotenv');

console.log(`Mode : ${process.env.DZ_MODE}`);

if (process.env.DZ_MODE == 'production') {
    dotenv.load({ path: '.env-prod' });
} else {
    //   dotenv.load({ path: '.env-dev' });
    dotenv.config({ path: './.env-dev' });
}

// console.log(process.env);
module.exports = {
    appName: process.env.DZ_APP_NAME,
    logPath: process.env.DZ_LOG_PATH,
    port: process.env.DZ_PORT,
    mode: process.env.DZ_MODE || 'development',
    databaseInfo: {
        userName: process.env.DZ_DB_USERNAME,
        password: process.env.DZ_DB_PASSWORD,
        databaseName: process.env.DZ_DB_NAME,
        host: process.env.DZ_LOG_PATH,
    },
    filePaths: {
        parentDir: __dirname,
        filesDir: path.join(__dirname, 'files'),
    }
};
