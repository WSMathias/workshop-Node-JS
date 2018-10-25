'use strict'

const userService = require('./UserService')

const getUserByName = async function (name) {
  return userService.GetUserDummyAPI(name)
}

module.exports = {
  getUserByName
}
