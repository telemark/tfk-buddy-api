'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 14, 'There are 14 different routes')
