'use strict'

function name (request, reply) {
  reply('Hello, ' + request.auth.credentials.cn)
}

function mail (request, reply) {
  reply('Your e-mail: ' + request.auth.credentials.mail)
}

function badUsernames (request, reply) {
  var sql = require('mssql')
  var config = require('../config')

  var connection = new sql.Connection(config.buddy, function (err) {
    // ... error checks
    if (err) {
      reply(err)
    }
    // Query
    var query = 'SELECT TOP 1000 [ID] ,[BadUsernamePart][ReplaceWith]' +
      'FROM [dbMetakatalog].[dbo].[tblBadUsernames]'

    var request = new sql.Request(connection)
    request.query(query, function (err, recordset) {
      if (err) {
        reply(err)
      } else {
        reply(recordset)
      }
    })
  })

  connection.on('error', function (err) {
    // ... error handler
    if (err) {
      reply(err)
    }
  })
}

module.exports.badUserNames = badUsernames

module.exports.name = name

module.exports.mail = mail
