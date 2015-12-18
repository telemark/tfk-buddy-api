'use strict'

var tap = require('tap')
var buddyQuery = require('../lib/buddyQuery')

tap.test('It requires a query.', function (test) {
  var query = false
  var expectedErrorMessage = 'Missing required input: query'
  buddyQuery(query, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
