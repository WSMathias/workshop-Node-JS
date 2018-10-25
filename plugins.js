;

/**
 * Vendor modules
 */
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Good = require('good');
/**
 * Internal modules
 */
const Package = require('./package.json');

const DEVELOPMENT = 'development';

/**
 * copied
 * exports array of plugins with configuration.
 * @type {Array}
 */
let plugins = [];

if (process.env.NODE_ENV === 'dev') {
  // add all plugins in an array and register them
  // add hapi swagger integration
  plugins = plugins.concat([
    Inert,
    Vision,
    {
      // swager plugin to create doc
      register: HapiSwagger,
      options: {
        info: {
          title: Package.description,
          version: Package.version
        },
        pathPrefixSize: 4
      }
    }]);

  // add good console for log reporting
  plugins.push({
    // good plugin for logger
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  });
}

module.exports = plugins;
