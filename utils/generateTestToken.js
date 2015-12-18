'use strict'

var jwt = require('jsonwebtoken')
var config = require('../config')
var tokenOptions = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
var data = {
  dn: 'uid=riemann,dc=example,dc=com',
  controls: [],
  objectClass: [ 'inetOrgPerson', 'organizationalPerson', 'person', 'top' ],
  cn: 'Bernhard Riemann',
  sn: 'Riemann',
  uid: 'riemann',
  mail: 'riemann@ldap.forumsys.com'
}

var token = jwt.sign(data, config.JWT_SECRET, tokenOptions)

console.log(token)
