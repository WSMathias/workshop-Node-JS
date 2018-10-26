/* istanbul ignore file */
const Response = {
  general(data) {
    return data;
  },
  successMessage(message) {
    return {
      success: true,
      message
    };
  },
  success(data, message) {
    return {
      success: true,
      message,
      data
    };
  },
  error(message, err, code) {
    return {
      success: false,
      message: message || 'some error occurred',
      error: err || 'error occurred on server, please try again after some time.'
    };
  },
  emptyContent() {
    return Response.general({
      message: 'empty content found',
      description: 'you must provide valid data and it must not be empty.',
      helpful_links: ['http://stackoverflow.com/questions/18419428/what-is-the-minimum-valid-json']
    });
  },
  invalidContentType() {
    return Response.general({
      message: 'invalid content type',
      description: 'you must specify content type and it must be application/json',
      helpful_links: ['http://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type']
    });
  },
  BadRequestFromJoi(err) {
    return Response.error(
      err.message,
      err.error
    );
  },
  userAlreadyExist(err) {
    return Response.general({
      message: 'user already registered in System',
      description: 'user already registered in System'
    });
  }
};
module.exports = Response;
