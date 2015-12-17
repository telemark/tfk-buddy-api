'use strict'

var message = {
  message: "Hello, I'm your API"
}

function getPublicResponse (request, reply) {
  reply(message)
}

function name (request, reply) {
  reply({name: request.auth.credentials.cn})
}

function mail (request, reply) {
  reply({mail: request.auth.credentials.mail})
}

function user (request, reply) {
  var loggedInUser = request.auth.credentials.sAMAccountName
  var query = "SELECT * FROM dbMetakatalog.dbo.tblObjects WHERE ID = '" + loggedInUser + "'"
  buddyQuery(query, function (err, data) {
    if (err) {
      reply(err)
    } else {
      reply(data)
    }
  })
}

function membershipsOwners (request, reply) {
  var loggedInUser = 'elimariannh'
  var query = 'SELECT ' +
  'm.AttributeName as Role,m.ID as GroupID,m.StringValue as Username,o.ObjectType,o.GroupType,o.Description,n.StringValue as Unit ' +
  'FROM dbMetakatalog.dbo.tblMultiValue m, dbMetakatalog.dbo.tblObjects o ' +
  'inner join dbMetakatalog.dbo.tblMultiValue n on n.ID = o.ID ' +
  "WHERE n.AttributeName = 'Enhet' AND o.ID = m.ID AND m.StringValue like '" +
  loggedInUser +
  "' and m.AttributeName = 'Owner' AND m.ID NOT LIKE '%" +
  loggedInUser +
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

function memberships (request, reply) {
  var loggedInUser = 'elimariannh'
  var query = 'SELECT ' +
  'o.SSN, m.ID, m.AttributeName, m.StringValue from dbMetakatalog.dbo.tblObjects o, dbMetakatalog.dbo.tblMultiValue m WHERE ' +
  "o.ID = m.StringValue AND m.AttributeName in ('Owner', 'Member') AND o.Mail LIKE '%t-fk.no' AND m.StringValue = '" + loggedInUser + "'"
  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      reply(data)
    }
  })
}

function studentsInClasses (request, reply) {
  buddyQuery(query, function (err, data) {
    if (err) {
      console.log(query)
      reply(err)
    } else {
      reply(data)
    }
  })
}

function organizations (request, reply) {
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

function units (request, reply) {
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

function buddyQuery (query, callback) {
  var sql = require('mssql')
  var config = require('../config')
  var connection = new sql.Connection(config.buddy, function (err) {
    if (err) {
      return callback(err)
    }
    var request = new sql.Request(connection)
    request.query(query, function (err, recordset) {
      if (err) {
        return callback(err, null)
      } else {
        return callback(null, recordset)
      }
    })
  })
}

module.exports.user = user

module.exports.memberships = memberships

module.exports.membershipsOwners = membershipsOwners

module.exports.name = name

module.exports.mail = mail

module.exports.organizations = organizations

module.exports.units = units

module.exports.schools = schools

module.exports.getPublicResponse = getPublicResponse
