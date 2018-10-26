/* eslint prefer-destructuring:0 */
const passport = require('passport');
const LocalStrategy = require('passport-local');
const userController = require('../../controller/UserController');
const User = require('../../models/User');
const helper = require('../../helper/bcrypt');


passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
    session: false
  },
  ((req, email, password, done) => {
    // write code here to find user if it exists in system
    User.find({ email }, (err, data) => {
      if (err) {
        return done(new Error('user not found'), null);
      } else if (data.length === 0) {
        return done(new Error('user not found'), null);
      }
      const flag = helper.comparePassword(password, data[0].password);
      if (!flag) {
        return done(new Error('invalid password provided'), null);
      }
      return done(null, data);
    });
  })
));

const localRoutes = {
  authenticate() {
    return passport.authenticate('local', { session: false });
  },
  authenticate_with_callback: () => passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failed'
  }),
};


module.exports = localRoutes;
