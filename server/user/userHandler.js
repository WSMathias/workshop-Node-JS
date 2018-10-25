'use strict'

const boom = require('boom')
const httpStatus = require('http-status')

const userCtrl = require('./userCtrl')
const logger = require('../utils/logger')

const getUserByName = async function (req, res) {
  const name = req.query.name

  try {
    const data = await userCtrl.getUserByName(name);
    return res(data)
  } catch (error) {
    const errorMessage = `Failed to fetch weather for ${cityName}`
    !error.logged && logger.error(error, errorMessage)
    return res(boom.boomify(error, { statusCode: httpStatus.INTERNAL_SERVER_ERROR, message: errorMessage }))
  }
}

module.exports = {
  getUserByName
}
