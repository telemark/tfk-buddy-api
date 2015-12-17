'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse,
    config: {
      cors: false,
    }
  },
  {
    method: 'GET',
    path: '/users/name',
    handler: handlers.name,
    config: {
      auth: 'simple',
      cors: false,
      description: 'Nothing to see here',
      validate: {
        query: {
          param1: Joi.string().required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/users/mail',
    handler: handlers.mail,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users',
    handler: handlers.user,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/memberships',
    handler: handlers.memberships,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/memberships/owner',
    handler: handlers.membershipsOwners,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations',
    handler: handlers.organizations,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations/{id}',
    handler: handlers.organizations,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/units',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/units/{id}',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/units/{id}/classes',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/classes/{id}',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/classes/{id}/students',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/students/{id}',
    handler: handlers.units,
    config: {
      auth: 'simple'
    }
  }
]

module.exports = routes
