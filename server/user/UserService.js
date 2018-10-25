'use strict'

const axios = require('axios')
const config = require('config')
const logger = require('../utils/logger')

const GetUserDummyAPI = async function (name) {
  const options = {
    method: 'get',
    url: 'url',
    params: {
      q: name
    }
  }

  try {
    const response = await axios(options)
    return response.data
  } catch (error) {
    logger.error(error, `Failed to fetch user for ${name}`)
    error.logged = true
    throw error
  }
}

module.exports = {
  GetUserDummyAPI
}
