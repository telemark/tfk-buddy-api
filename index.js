var sql = require('mssql');
var config = require('./config');

var connection = new sql.Connection(config, function(err) {
    // ... error checks

    // Query

    var request = new sql.Request(connection); // or: var request = connection.request();
    request.query('SELECT TOP 1000 [ID] ,[BadUsernamePart],[ReplaceWith] FROM [dbMetakatalog].[dbo].[tblBadUsernames]', function(err, recordset) {
        // ... error checks
        console.dir(recordset);
    });
});

connection.on('error', function(err) {
    // ... error handler
    console.log('error');
});
