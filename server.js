'use strict'

const Hapi = require('hapi')
global.env = process.env.NODE_ENV;
global.configuration = require(`./config/env/${global.env}`);

const routes = require('./routes')
const plugins = require('./plugins')
const logger = require('./server/utils/logger')

const server = new Hapi.Server()

server.connection({
  port: process.env.PORT || '5006'
})

server.route(routes)

// register plugins
const registerPlugins = async () => {
  try {
    await server.register(plugins)
  } catch (error) {
    logger.error(error, 'Failed to register hapi plugins')
    throw error
  }
}

registerPlugins()
// export modules
module.exports = server
