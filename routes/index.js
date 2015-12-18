'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse,
    config: {
      cors: false
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/name',
    handler: handlers.getUserName,
    config: {
      auth: 'simple',
      cors: false,
      description: 'Return users name',
      validate: {
        params: {
          username: Joi.string().min(3).max(10).required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/mail',
    handler: handlers.getUserMail,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: handlers.getUser,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/groups',
    handler: handlers.getUserGroups,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/groups/owner',
    handler: handlers.getUserGroupsOwner,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations',
    handler: handlers.getOrganizations,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations/{orgId}',
    handler: handlers.getOrganizations,
    config: {
      auth: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/units',
    handler: handlers.getUnits,
    config: {
      auth: 'simple',
      description: 'Return all units'
    }
  },
  {
    method: 'GET',
    path: '/units/{unitId}',
    handler: handlers.getUnit,
    config: {
      auth: 'simple',
      description: 'Return spesific unit',
      validate: {
        params: {
          unitId: Joi.number().required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/units/{unitId}/groups',
    handler: handlers.getUnitGroups,
    config: {
      auth: 'simple',
      description: 'Return unit groups',
      validate: {
        params: {
          unitId: Joi.number().required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/groups/{groupId}',
    handler: handlers.getGroup,
    config: {
      auth: 'simple',
      description: 'Return spesific group',
      validate: {
        params: {
          groupId: Joi.string().min(3).max(50).required()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/groups/{groupId}/members',
    handler: handlers.getGroupMembers,
    config: {
      auth: 'simple',
      description: 'Return group members',
      validate: {
        params: {
          groupId: Joi.string().min(3).max(50).required()
        }
      }
    }
  }
]

module.exports = routes
