'use strict'

function addStudentToGroups (list, group, contactTeacher, callback) {
  var students = []
  Object.keys(list).forEach(function (key) {
    var student = {}
    var id = list[key].personalIdNumber
    student[id] = list[key]
    student[id].contactTeacher = contactTeacher
    student[id].group = group
    students.push(student)
  })
  return callback(students)
}

function addGroups (list, group, contactTeacher, callback) {
  addStudentToGroups(list, group, contactTeacher, function (students) {
    return callback(students)
  })
}

module.exports = addGroups
