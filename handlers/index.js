'use strict'

function badUsernames (request, reply) {
  var sql = require('mssql')
  var config = require('../config')

  var connection = new sql.Connection(config, function (err) {
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
    reply(err)
  })
}

module.exports.badUserNames = badUsernames
