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
  ldap: {
    url: 'ldap://ldap.forumsys.com:389',
    bindDn: 'cn=read-only-admin,dc=example,dc=com',
    bindCredentials: 'password',
    searchBase: 'dc=example,dc=com',
    searchFilter: '(uid={{username}})'
  },
  SERVER_PORT: 3000
}

module.exports = config
