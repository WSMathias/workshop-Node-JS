const winston = require('winston');

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
      res.status(400).json({'message' : 'internal server error occured'});
    } else { // internalServerError
      res.status(500).json({
        success: false,
        message: err.message,
        error: (onDevEnv) ? err.stack : {},
        code: 5400
      });
    }
  }
  static PageNotFound(req, res, err) {
    res.status(404).json({'message' : 'not found'});
  }
}

module.exports = errorHandlers;

