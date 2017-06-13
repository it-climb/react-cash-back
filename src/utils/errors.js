'use strict'
class ValidationError extends Error {
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, ValidationError)
  }
}
class DBError extends Error {
  constructor(...args) {
    super(...args)
    Error.captureStackTrace(this, DBError)
  }
}

module.exports = {
  ValidationError,
  DBError
}

