'use strict'
var mergeGroups = require('./mergeGroups')
var addGroups = require('./addGroups')
var buddyQuery = require('./buddyQuery')

function isContact(query, callback) {
  buddyQuery(query, function (err, contactTeacher) {
    if (err) {
      return callback (err, null)
    } else {
      return callback(null, contactTeacher)
    }
  })
}

function setGroup (group, query, callback) {
  var atferdCode = group.groupId.replace(/\/(.*)/, '') + '%ATF%'
  var query= query.replace('@atferdCode', atferdCode)
  isContact(query, function(err, contactTeacher) {
    var rgroup = {
      id: group.groupId,
      description: group.description,
      unitId: group.unitId,
      unitName: group.unitName,
      contactTeacher: contactTeacher[0]['contactTeacher']
    }
    return callback(rgroup)
  })
}

function studentsInGroups (groups, query2, query3, callback) {
  var i = 0
  var result = []
  Object.keys(groups).forEach(function (key) {
    setGroup(groups[key], query3, function (group) {
      var qry2 = query2.replace('@id', group.id)
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
  })
}

module.exports = studentsInGroups

