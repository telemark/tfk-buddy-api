'use strict'

var Hapi = require('hapi')
var Basic = require('hapi-auth-basic')
var validateUser = require('./lib/validateUser')

var server = new Hapi.Server()
var config = require('./config')
var buddyService = require('./index')

server.connection({
  port: config.SERVER_PORT,
  routes: {
    cors: {
      credentials: true
    }
  }
})

server.register(Basic, function (err) {
  if (err) {
    console.error(err)
  }
  server.auth.strategy('simple', 'basic', { validateFunc: validateUser })
})

server.register([require('vision'), require('inert'),
  {
    register: require('lout')
  },
  {
    register: buddyService,
    options: {}
  }
], function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err)
  }
})

function startServer () {
  server.start(function () {
    console.log('Server running at:', server.info.uri)
  })
}

function stopServer () {
  server.stop(function () {
    console.log('Server stopped')
  })
}

module.exports.start = startServer

module.exports.stop = stopServer
