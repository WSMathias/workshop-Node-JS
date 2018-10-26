const User = require('../models/User');
const jwt = require('jsonwebtoken');
const helper = require('../helper/bcrypt');

const saltRounds = 10;
class userController {
  static validateUser(req, res, cb) {
    const { body } = req;
    User.find({ user: body.user })
    .then(data => {
      if(data && data.length){
        const flag = helper.comparePassword(body.password, data[0].password, (error, result) => {
          if(flag){
            jwt.sign({ user: data[0].email }, 'secretkey', (tokError, token) => {
              cb(null, token);
            });
          }
            cb(new Error('username password does not match'), null);
          });
      }
    })
  }
  static registerDefault(req, res, cb) {
    const { body } = req;
    const hash = helper.generateSaltValue(body);
      return User.create({
        user: body.user, password: hash, mobno: body.mobno, email: body.email
      }, (error, data) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
    });
  }
  static registerSocial(user, callback) {
    User.findOne({ email: user.email }, (error, existingUser) => {
      if (existingUser) {
        callback(null, (existingUser));
      } else {
        User.create({
          user: user.email, mobno: user.mobno, email: user.email
        }, (err, data) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
      }
    });
  }
}

module.exports = userController;
