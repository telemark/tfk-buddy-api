'use strict'

var sql = require('mssql')
var config = require('../config')

function buddyQuery (query, callback) {
  if (!query) {
    return callback(new Error('Missing required input: query'), null)
  }
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

module.exports = buddyQuery
