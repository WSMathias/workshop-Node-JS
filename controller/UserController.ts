export {};

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const helper = require('../helper/bcrypt');

const saltRounds = 10;
class userController {
  static validateUser(req, res, cb) {
    const { body } = req;
    User.find({ email: body.email })
      .then((data) => {
        if (data && data.length) {
          const flag = helper.comparePassword(body.password, data[0].password)
            if (flag) {
              jwt.sign({ user: data[0].email }, 'secretkey', (tokError, token) => {
                cb(null, token);
              });
            } else {
              cb(new Error('username password does not match'), null);
            }
          }
          else {
            cb(new Error('no user found with this account email'), null);
          }
        });
  }
  static registerDefault(req, res, cb) {
    const { body } = req;
    const hash = helper.generateSaltValue(body);
    return User.find({ email: body.email }).then((user) => {
      if (user && user.length > 0) {
        cb(new Error('user already regitsered with us'), null);
      } else {
        return User.create({
          username: body.username, password: hash, phone: body.phone, email: body.email
        }, (error, data) => {
          if (error) {
            cb(error, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
  static registerSocial(user, callback) {
    console.log(user);
    User.findOne({ email: user.email }, (error, existingUser) => {
      if (existingUser) {
        callback(null, (existingUser));
      } else {
        User.create({
          username: user.email, phone: user.phone, email: user.email
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
