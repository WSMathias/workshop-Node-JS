const bunyan = require('bunyan');

// create a logger instance
const log = bunyan.createLogger({
  name: 'api app',
  level: 'debug',
  serializers: bunyan.stdSerializers
});

module.exports = log;
