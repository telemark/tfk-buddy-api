'use strict'

var isTeacherContact = require('./isTeacherContact')

function setStudentGroups (group, query, callback) {
  var mainGroupName = group.groupId.replace(/\/(.*)/, '')
  var atferdCode = mainGroupName + '%ATF%'
  query = query.replace('@atferdCode', atferdCode)
  var ct = false
  isTeacherContact(query, function (err, contactTeacher) {
    if (err) {
      return callback(err, null)
    }
    var rgroup = {
      id: group.groupId,
      description: group.description,
      unitId: group.unitId,
      organizationNumber: group.organizationNumber,
      unitName: group.unitName,
      contactTeacher: contactTeacher[0]['contactTeacher']
    }
    if (rgroup.contactTeacher === true) {
      ct = true
    }
    var result = {
      group: rgroup,
      contactTeacher: ct,
      unitId: group.unitId,
      unitName: group.unitName,
      mainGroupName: mainGroupName,
      organizationNumber: group.organizationNumber
    }
    return callback(null, result)
  })
}

module.exports = setStudentGroups
