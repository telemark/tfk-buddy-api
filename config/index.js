'use strict'

var config = {
  buddy: {
    user: 'username', // Database username
    password: 'password', // Database passord
    server: 'hostname', // You can use 'localhost\\instance' to connect to named instance
    database: 'databasename', // Database name
    options: {
      encrypt: false // Use this if you're on Windows Azure
    }
  },
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'NeverShareYourSecret',
  YAR_SECRET: process.env.YAR_SECRET || 'NeverShareYourSecret'
}

module.exports = config
