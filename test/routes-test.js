'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 13, 'There are 13 different routes')
