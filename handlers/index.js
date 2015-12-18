'use strict'

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
  var query = "SELECT * FROM dbMetakatalog.dbo.tblObjects WHERE ID = '" + username + "'"

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
  var query = 'SELECT Firstname as firstName, Midlename as middleName, Lastname as lastName ' +
    'FROM dbMetakatalog.dbo.tblObjects ' +
    "WHERE ID = '" +
    username +
    "'"
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
  var query = 'SELECT Mail as email ' +
    'FROM dbMetakatalog.dbo.tblObjects ' +
    "WHERE ID = '" +
    username +
    "'"
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
  var query = 'SELECT ' +
  'm.AttributeName as Role,m.ID as GroupID,m.StringValue as Username,o.ObjectType,o.GroupType,o.Description,n.StringValue as Unit ' +
  'FROM dbMetakatalog.dbo.tblMultiValue m, dbMetakatalog.dbo.tblObjects o ' +
  'inner join dbMetakatalog.dbo.tblMultiValue n on n.ID = o.ID ' +
  "WHERE n.AttributeName = 'Enhet' AND o.ID = m.ID AND m.StringValue like '" +
  username +
  "' and m.AttributeName = 'Owner' AND m.ID NOT LIKE '%" +
  username +
  "'"

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
//  var loggedInUser = 'elimariannh'
  var username = request.params.username
  var query = 'SELECT ' +
  'o.SSN, m.ID, m.AttributeName, m.StringValue from dbMetakatalog.dbo.tblObjects o, dbMetakatalog.dbo.tblMultiValue m WHERE ' +
  "o.ID = m.StringValue AND m.AttributeName in ('Owner', 'Member') AND o.Mail LIKE '%t-fk.no' " +
//  "AND o.GroupType != 'Kontakgruppe' " +
//  "AND o.GroupType != 'Managergruppe' " +
  "AND m.StringValue = '" +
  username +
  "'"

  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      console.log(query)
      reply(data)
    }
  })
}

/*!
 *
 * Units
 *
 */

function getUnits (request, reply) {
  var query = 'SELECT ' +
    'o.id as name,m.id,m.org,m.beskrivelse,o.ObjectType,o.DisplayName,o.Status,o.PostalAddress,o.Street,o.PostalCode,o.City,o.OrganizationNumber ' +
    "FROM dbMetakatalog.dbo.tblKonverterIDer m, dbMetakatalog.dbo.tblObjects o where m.konverterTil = o.ID AND o.ObjectType = 'Enhet' AND m.org = 'TFK'"
  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUnit (request, reply) {
  var unitId = request.params.unitId
  var query = 'SELECT ' +
    'o.id as name,m.id,m.org,m.beskrivelse,o.ObjectType,o.DisplayName,o.Status,o.PostalAddress,o.Street,o.PostalCode,o.City,o.OrganizationNumber ' +
    "FROM dbMetakatalog.dbo.tblKonverterIDer m, dbMetakatalog.dbo.tblObjects o where m.konverterTil = o.ID AND o.ObjectType = 'Enhet' AND m.org = 'TFK' and m.id = '" +
    unitId +
    "'"

  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getUnitGroups (request, reply) {
  var unitId = request.params.unitId
  var query = 'SELECT mv.ID as groupName, mv.AttributeName as groupType, mv.StringValue as unitName, ki.id as unitId ' +
   'FROM dbMetakatalog.dbo.tblMultiValue mv, dbMetakatalog.dbo.tblKonverterIDer ki ' +
   'WHERE mv.StringValue = ki.konverterTil ' +
   "AND ki.id = '" +
   unitId +
   "' " +
   "AND mv.ID LIKE mv.StringValue  + '%'" +
   'ORDER BY mv.ID ASC'

  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

/*!
 *
 * Groups
 *
 */

function getGroup (request, reply) {
  var groupId = request.params.groupId
  var query = 'SELECT mv.ID, mv.AttributeName as groupType, mv.StringValue as unitId, ' +
    'o.ObjectType as objectType, o.GroupType as groupTypeDesc, o.Description as description ' +
    'FROM dbMetakatalog.dbo.tblMultiValue mv, dbMetakatalog.dbo.tblObjects o ' +
    'WHERE mv.ID = o.ID ' +
    "AND AttributeName = 'Enhet' " +
    "AND mv.ID = '" +
    groupId +
    "'"
  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function getGroupMembers (request, reply) {
  var groupId = request.params.groupId
  var query = 'SELECT mv.ID as groupId, mv.AttributeName as memberType, mv.StringValue as username, ' +
    'o.Firstname as firstName, o.Midlename as middleName, o.Lastname as lastName, o.SSN as ssn ' +
    'FROM dbMetakatalog.dbo.tblMultiValue mv, dbMetakatalog.dbo.tblObjects o ' +
    'WHERE mv.StringValue = o.ID ' +
    "AND mv.AttributeName = 'Member'" +
    "AND mv.ID = '" +
    groupId +
    "'"
  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(err)
      reply(err)
    } else {
      reply(data)
    }
  })
}

/*!
 *
 * Organizations
 *
 */

function getOrganizations (request, reply) {
  var query = 'SELECT * ' +
    "FROM dbMetakatalog.dbo.tblObjects where ObjectType = 'Organisasjon'"

  if (request.params.id) {
    query = 'SELECT * ' +
      "FROM dbMetakatalog.dbo.tblObjects WHERE ObjectType = 'Organisasjon' AND id = '" + Number(request.params.id) + "'"
  }
  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function schools (request, reply) {
  var query = 'SELECT ' +
   'o.id as name,m.id,m.org,m.beskrivelse,o.ObjectType,o.DisplayName,o.Status,o.PostalAddress,o.Street,o.PostalCode,o.City,o.OrganizationNumber ' +
   "FROM dbMetakatalog.dbo.tblKonverterIDer m, dbMetakatalog.dbo.tblObjects o where m.konverterTil = o.ID AND o.ObjectType = 'Enhet' " +
   // Filter
   "AND m.org = 'TFK' AND o.OrganizationNumber LIKE 'NO974568%'"

  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
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

module.exports.schools = schools

module.exports.getPublicResponse = getPublicResponse
