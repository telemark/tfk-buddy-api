'use strict'

var fs = require('fs')

require.extensions['.sql'] = function (module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8')
}

var buddyQuery = require('../lib/buddyQuery')

/*!
 *
 * Public
 *
 */

function getPublicResponse (request, reply) {
  var message = {
    message: "Hello, I'm your API"
  }
  reply(message)
}

/*!
 *
 * User
 *
 */

function getUser (request, reply) {
  var username = request.params.username
  var query = require('../lib/sql/getUser.sql')
  query = query.replace('@username', username)

  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUserName (request, reply) {
  var username = request.params.username
  var query = require('../lib/sql/getUsername.sql')
  query = query.replace('@username', username)

  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUserMail (request, reply) {
  var username = request.params.username
  var query = require('../lib/sql/getUserMail.sql')
  query = query.replace('@username', username)

  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUserGroupsOwner (request, reply) {
  var username = request.params.username
  var query = require('../lib/sql/getUserGroupsOwner.sql')
  query = query.replace('@username', username)

  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUserGroups (request, reply) {
  var username = request.params.username
  var query = require('../lib/sql/getUserGroups.sql')
  query = query.replace('@username', username)

  buddyQuery(query, function (error, data) {
    console.log(query)
    reply(error || data)
  })
}

/*!
 *
 * Units
 *
 */

function getUnits (request, reply) {
  var query = require('../lib/sql/getUnits.sql')

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

function getUnit (request, reply) {
  var unitId = request.params.unitId
  var query = require('../lib/sql/getUnit.sql')
  query = query.replace('@unitId', unitId)

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

function getUnitGroups (request, reply) {
  var unitId = request.params.unitId
  var query = require('../lib/sql/getUnitGroups.sql')
  query = query.replace('@unitId', unitId)

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

/*!
 *
 * Groups
 *
 */

function getGroup (request, reply) {
  var groupId = request.params.groupId
  var query = require('../lib/sql/getGroup.sql')
  query = query.replace('@groupId', groupId)

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

function getGroupMembers (request, reply) {
  var groupId = request.params.groupId
  var query = require('../lib/sql/getGroupMembers.sql')
  query = query.replace('@groupId', groupId)

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

/*!
 *
 * Organizations
 *
 */

function getOrganizations (request, reply) {
  var query = require('../lib/sql/getOrganizations.sql')

  if (request.params.id) {
    query = require('../lib/sql/getOrganization.sql')
    query = query.replace('@orgId', Number(request.params.id))
  }
  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

function getSchools (request, reply) {
  var query = require('../lib/sql/getSchools.sql')

  buddyQuery(query, function (error, data) {
    reply(error || data)
  })
}

module.exports.getUser = getUser

module.exports.getUserGroups = getUserGroups

module.exports.getUserGroupsOwner = getUserGroupsOwner

module.exports.getUserName = getUserName

module.exports.getUserMail = getUserMail

module.exports.getOrganizations = getOrganizations

module.exports.getUnits = getUnits

module.exports.getUnit = getUnit

module.exports.getUnitGroups = getUnitGroups

module.exports.getGroup = getGroup

module.exports.getGroupMembers = getGroupMembers

module.exports.getSchools = getSchools

module.exports.getPublicResponse = getPublicResponse
