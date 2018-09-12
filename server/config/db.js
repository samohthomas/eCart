const env = process.env.NODE_ENV || 'dev';; // 'dev' or 'test'

const dev = { 
 db: {
   host: process.env.DEV_DB_HOST || 'mongodb://localhost/',
   port: parseInt(process.env.DEV_DB_PORT) || 27017,
   name: process.env.DEV_DB_NAME || 'shopping'
 }
};
const test = {
 db: {
   host: process.env.TEST_DB_HOST || 'mongodb://localhost/',
   port: parseInt(process.env.TEST_DB_PORT) || 27017,
   name: process.env.TEST_DB_NAME || 'shopping'
 }
};

const prod = {
    db: {
      host: process.env.TEST_DB_HOST || 'mongodb://localhost/',
      port: parseInt(process.env.TEST_DB_PORT) || 27017,
      name: process.env.TEST_DB_NAME || 'shopping'
    }
   };

const dbConfig = {
 dev,
 test,
 prod
};

module.exports = dbConfig[env];