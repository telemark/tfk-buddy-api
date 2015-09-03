'use strict';

var sql = require('mssql');
var config = require('./config');

var connection = new sql.Connection(config, function(err) {
    // ... error checks

    // Query
    var query = 'SELECT TOP 1000 [ID] ,[BadUsernamePart][ReplaceWith]' +
      'FROM [dbMetakatalog].[dbo].[tblBadUsernames]';

    var request = new sql.Request(connection); 
    request.query(query, function(err, recordset) {
        // ... error checks
        console.dir(recordset);
    });
});

connection.on('error', function(err) {
    // ... error handler
    console.log('error');
});
