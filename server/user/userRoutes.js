'use strict'

const config = require('config')
const userHandler = require('./userHandler')
const userValidation = require('./userValidations')

const routes = []

routes.push({
  path: '' + '/user',
  method: 'GET',
  handler: userHandler.getUserByName,
  config: {
    tags: ['api'],
    validate: userValidation.getUsers
  }
})

module.exports = routes
