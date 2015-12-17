'use strict'

var LdapAuth = require('ldapauth-fork')
var config = require('./config')
var username = 'adusername'
var password = 'password'
var auth = new LdapAuth(config.ldap)

auth.authenticate(username, password, function (err, user) {
  if (err) {
    console.error(JSON.stringify(err))
  } else {
    console.log(user)
    auth.close(function (err) {
      if (err) {
        console.error(err)
      } else {
        console.log('bye!')
      }
    })
  }
})
