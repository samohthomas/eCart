
const dbConfig = require('./db')
import * as promise from 'es6-promise';
import * as mongoose from 'mongoose';

mongoose.Promise = promise;

// Create the database connection 
mongoose.connect(dbConfig.db.host); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbConfig.db.host);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + dbConfig.db.host);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});


mongoose.connection.close(function () { 
console.log('Mongoose default connection disconnected through app termination');    
}); 

module.exports = mongoose;