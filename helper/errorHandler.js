const winston = require('winston');
const ResponseTemplate = require('./responseTemplate');

const env = process.env.NODE_ENV;
const onDevEnv = env === 'dev' || env === 'test' || env === 'local';
class errorHandlers {
  static internalServerError(err, req, res, next) {
    winston.log(err);
    if (err.isBoom) {
      // Error From  joi express validator
      const error = {
        message: err.output.payload.error,
        error: err.output.payload.message
      };
      res.status(400).json(ResponseTemplate.BadRequestFromJoi(error));
    } else { // internalServerError
      res.status(500).json({
        success: false,
        message: err.message,
        error: (onDevEnv) ? err.stack : {}
      });
    }
  }
  static PageNotFound(req, res, err) {
    res.status(404).json({ message: 'api not found' });
  }
}

module.exports = errorHandlers;

