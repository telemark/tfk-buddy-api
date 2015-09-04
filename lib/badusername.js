'use strict'

var sql = require('mssql')
var config = require('./config')

var connection = new sql.Connection(config, function (err) {
  // ... error checks
  if (err) {
    console.error(err)
  }
  // Query
  var query = 'SELECT TOP 1000 [ID] ,[BadUsernamePart][ReplaceWith]' +
    'FROM [dbMetakatalog].[dbo].[tblBadUsernames]'

  var request = new sql.Request(connection)
  request.query(query, function (err, recordset) {
    // ... error checks
    if (err) {
      console.error(err)
    } else {
      console.log(recordset)
    }
  })
})

connection.on('error', function (err) {
  // ... error handler
  if (err) {
    console.log('error')
  } else {
    console.log('Conection OK')
  }
})
