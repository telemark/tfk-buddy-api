'use strict'

function validateUser (request, username, password, callback) {
  var LdapAuth = require('ldapauth-fork')
  var config = require('../config')
  var auth = new LdapAuth(config.ldap)
  auth.authenticate(username, password, function (err, user) {
    if (err) {
      console.error(JSON.stringify(err))
      return callback(null, false)
    } else {
      console.log(user)
      callback(err, true, user)
      auth.close(function (err) {
        if (err) {
          console.error(err)
        } else {
          console.log('bye!')
        }
      })
    }
  })
}

module.exports = validateUser
