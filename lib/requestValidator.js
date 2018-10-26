const Joi = require('joi');

module.exports = {
  createUser: {
    body: {
      user: Joi.string().min(5).max(50).required(),
      password: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(50).required(),
      mobno: Joi.string().min(5).max(50).required()
    },
  }
};
