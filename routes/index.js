'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'GET',
    path: '/test/badusernames',
    handler: handlers.badUserNames
  },
  {
    method: 'GET',
    path: '/test/name',
    handler: handlers.name,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/test/mail',
    handler: handlers.mail,
    config: {
      auth: 'simple'
    }
  }
]

module.exports = routes
