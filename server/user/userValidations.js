'use strict'

const joi = require('joi')

const userValidation = {
  getUsers: {
    headers: {},
    query: {
      cityName: joi.string().trim().required().description('name of the city whose weather is to be fetched')
    }
  }
}

module.exports = userValidation
