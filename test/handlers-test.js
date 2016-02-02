'use strict'

var tap = require('tap')
var handlers = require('../handlers')

tap.equal(Object.keys(handlers).length, 15, 'There are 15 different handlers')

tap.ok(handlers.getUser, 'Handler has method getUser')

tap.ok(handlers.getUserGroups, 'Handler has method getUserGroups')

tap.ok(handlers.getUserGroupsOwner, 'Handler has method getUserGroupsOwner')

tap.ok(handlers.getUserName, 'Handler has method getUserName')

tap.ok(handlers.getUserMail, 'Handler has method getUserMail')

tap.ok(handlers.getOrganizations, 'Handler has method getOrganizations')

tap.ok(handlers.getUnits, 'Handler has method getUnits')

tap.ok(handlers.getUnit, 'Handler has method getUnit')

tap.ok(handlers.getUnitGroups, 'Handler has method getUnitGroups')

tap.ok(handlers.getGroup, 'Handler has method getGroup')

tap.ok(handlers.getGroupMembers, 'Handler has method getGroupMembers')

tap.ok(handlers.getSchools, 'Handler has method schools')

tap.ok(handlers.getPublicResponse, 'Handler has method getPublicResponse')

tap.ok(handlers.searchStudents, 'Handler has method searchStudents')

tap.ok(handlers.getStudents, 'Handler has method getStudents')
