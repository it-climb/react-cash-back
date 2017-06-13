'use strict'
class ValidationError extends Error {}
class DBError extends Error {}

module.exports = {
  ValidationError,
  DBError
}

