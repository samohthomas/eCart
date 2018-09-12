const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'test'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 4000
 } 
};
const test = {
 app: {
   port: parseInt(process.env.TEST_APP_PORT) || 4000
 } 
};
const prod = {
    app: {
      port: parseInt(process.env.TEST_APP_PORT) || 4000
    } 
   };
const appConfig = {
 dev,
 test,
 prod
};

module.exports = appConfig[env];