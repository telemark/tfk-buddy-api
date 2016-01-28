'use strict'

function addStudentToGroups(list, group, callback) {
  var students = []
  Object.keys(list).forEach(function(key) {
    var student = {}
    var id = list[key].personalIdNumber
    student[id] = list[key]
    student[id].group = group
    console.log(student)
    students.push(student)
  })
  return callback(students)
}

function addGroups(list, group, callback) {
  addStudentToGroups(list, group, function (students) {
    return callback(students)
  })
}

module.exports = addGroups
