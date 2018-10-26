
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
  generateSaltValue(body) {
    const salt = bcrypt.genSaltSync(); // enter number of rounds, default: 10
    const hash = bcrypt.hashSync(body.password, salt);
    return hash;
  },
  comparePassword(userPassword, password) {
    if (!userPassword.length) {
      return false;
    }
    return bcrypt.compareSync(userPassword, password);
  }
};

