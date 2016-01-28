'use strict'
var mergeGroups = require('./mergeGroups')
var addGroups = require('./addGroups')
var buddyQuery = require('./buddyQuery')


function studentsInGroups (groups, query2, callback) {
  var i = 0
  var result = []
  Object.keys(groups).forEach(function (key) {
    var groupId = groups[key].groupId
    var group = {
      id: groupId,
      description: groups[key].description,
      unitId: groups[key].unitId
    }
    var qry2 = query2.replace('@id', groupId)
    buddyQuery(qry2, function (err, students) {
      if (err) {
        return callback(err, null)
      }
      if (students[0] != null) {
        addGroups(students, group, function (studentGroup) {
          result.push(studentGroup)
        })
      }
      i++
      if (i === groups.length) {
        return callback(null, mergeGroups(result))
      }
    })
  })
}

module.exports = studentsInGroups

