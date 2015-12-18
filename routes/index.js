'use strict'

var handlers = require('../handlers')
var Joi = require('joi')

var routes = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getPublicResponse,
    config: {
      auth: false,
      cors: false
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/name',
    handler: handlers.getUserName,
    config: {
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
      description: 'Show an users email'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: handlers.getUser,
    config: {
      description: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/groups',
    handler: handlers.getUserGroups,
    config: {
      description: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/users/{username}/groups/owner',
    handler: handlers.getUserGroupsOwner,
    config: {
      description: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations',
    handler: handlers.getOrganizations,
    config: {
      description: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/organizations/{orgId}',
    handler: handlers.getOrganizations,
    config: {
      description: 'simple'
    }
  },
  {
    method: 'GET',
    path: '/units',
    handler: handlers.getUnits,
    config: {
      description: 'Return all units'
    }
  },
  {
    method: 'GET',
    path: '/units/{unitId}',
    handler: handlers.getUnit,
    config: {
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
