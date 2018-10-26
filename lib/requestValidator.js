const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      username: Joi.string().min(6).max(50).required(),
      password: Joi.string().min(6).max(50).required(),
      email: Joi.string().regex(/^[\w.]+@[\w]+?(\.[a-zA-Z]{2,3}){1,3}$/).required(),
      mobno: Joi.string().min(6).max(50).required()
    },
  }
};
