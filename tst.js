'use strict'

var log4js = require('log4js');
var LdapAuth = require('ldapauth-fork')
var options = {
  url: 'ldap://ldap.forumsys.com:389',
  bindDn: 'cn=read-only-admin,dc=example,dc=com',
  bindCredentials: 'password',
  searchBase: 'dc=example,dc=com',
  searchFilter: '(uid={{username}})',
  log4js: log4js
}

var username = 'riemann'
var password = 'password'

var auth = new LdapAuth(options)

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