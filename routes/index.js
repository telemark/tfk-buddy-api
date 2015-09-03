'use strict'

var handlers = require('../handlers')

var routes = [
  {
    method: 'POST',
    path: '/test/badusernames',
    handler: handlers.badUserNames
  }
]

module.exports = routes