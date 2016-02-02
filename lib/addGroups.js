'use strict'

function addStudentToGroups (list, groupsInfo, callback) {
  var students = []
  Object.keys(list).forEach(function (key) {
    var student = {}
    var id = list[key].personalIdNumber
    student[id] = list[key]
    student[id].contactTeacher = groupsInfo.contactTeacher
    student[id].unitId = groupsInfo.unitId
    student[id].unitName = groupsInfo.unitName
    student[id].mainGroupName = groupsInfo.mainGroupName
    student[id].group = groupsInfo.group
    students.push(student)
  })
  return callback(students)
}

function addGroups (list, groupsInfo, callback) {
  addStudentToGroups(list, groupsInfo, function (students) {
    return callback(students)
  })
}

module.exports = addGroups
