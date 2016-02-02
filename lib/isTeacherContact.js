'use strict'

var buddyQuery = require('./buddyQuery')

function isTeacherContact (query, callback) {
  buddyQuery(query, function (err, contactTeacher) {
    if (err) {
      return callback(err, null)
    } else {
      return callback(null, contactTeacher)
    }
  })
}

module.exports = isTeacherContact
