'use strict'

var mergeGroups = require('./mergeGroups')
var addGroups = require('./addGroups')
var buddyQuery = require('./buddyQuery')
var setStudentGroups = require('./setStudentGroups')

function studentsInGroups (groups, query, callback) {
  var i = 0
  var result = []
  Object.keys(groups).forEach(function (key) {
    setStudentGroups(groups[key], query.isContactTeacher, function (err, res) {
      if (err) {
        return callback(err)
      }
      var queryStudentInGroup = query.studentsInGroup.replace('@id', res.group.id)
      buddyQuery(queryStudentInGroup, function (err, students) {
        if (err) {
          return callback(err, null)
        }
        if (students[0] != null) {
          addGroups(students, res, function (studentGroup) {
            result.push(studentGroup)
          })
        }
        i++
        if (i === groups.length) {
          return callback(null, mergeGroups(result))
        }
      })
    })
  })
}

module.exports = studentsInGroups
