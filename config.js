'use strict';

var config = {
  user: 'username', // Database username
  password: 'password', // Database passord
  server: 'hostname', // You can use 'localhost\\instance' to connect to named instance
  database: 'databasename', // Database name

  options: {
    encrypt: false // Use this if you're on Windows Azure
  }
}
module.exports = config;
