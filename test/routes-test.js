'use strict'

var tap = require('tap')
var routes = require('../routes')

tap.equal(routes.length, 15, 'There are 15 different routes')
