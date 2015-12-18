'use strict'

function validateJWT (decoded, request, callback) {
  if (!decoded) {
    return callback(null, false)
  } else {
    request.session.set('whoami', decoded)
    return callback(null, true)
  }
}

module.exports = validateJWT
