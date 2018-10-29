export {}
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocaleRoute = require('./provider/Locale');
const UserController = require('../controller/UserController');
const jwt = require('jsonwebtoken');
// seralize user Object
const expressJoiValidator = require('express-joi-validator');
const expressJoi = require('../lib/requestValidator');
const FacebookRoutes = require('./provider/Facebook');
const GoogleRoutes = require('./provider/Google');
const LinkedinRoutes = require('./provider/Linkedin');
const Template = require('../routes/routes');
const TwitterRoute = require('./provider/Twitter');

const boom = require('express-boom');

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

router.get('/ping', (req, res) => {
  // login stuff here
  res.status(200).json({ message: 'pong' });
});
router.post('/login', LocaleRoute.authenticate(), (req, res) => {
  // login stuff here
  if (req.user && req.user[0].email) {
    jwt.sign({ user: req.user[0].email }, 'secretkey', (tokError, token) => {
      res.json({
        statusCode: 200,
        message: 'success',
        token
      });
    });
  } else {
    res.boom.unauthorized('invalid username or password');
  }
});

router.post(
  '/register',
  expressJoiValidator(expressJoi.createUser),
  (req, res) => {
    UserController.registerDefault(req, res, (error, user) => {
      if (error) {
        res.status(400).json(Template.userAlreadyExist(error.message));
      } else {
        res.json({
          statusCode: 200,
          message: 'success',
          user
        });
      }
    });
  }
);

const redirectSocialUser = (req, res) => {
  jwt.sign({ user: req.user }, 'secretkey', (tokError, token) => {
    if (tokError) {
      res.boom.badImplementation(tokError);
    } else {
      // redirect app to FE app routes with Token
      res.json({
        statusCode: 200,
        message: 'success',
        token
      });
    }
  });
};

/**
 * @api {POST} /auth/login/facebook Social Login
 * @apiName google
 * @apiGroup Auth
 * @apiSuccess {String} code HTTP status code from API.
 * @apiSuccess {String} message Message from API.
 */
router.get('/login/facebook', FacebookRoutes.authenticate());
router.get('/callback/facebook', FacebookRoutes.callback(), redirectSocialUser);


/**
 * @api {POST} /auth/login/google Social Login
 * @apiName google
 * @apiGroup Auth
 * @apiSuccess {String} code HTTP status code from API.
 * @apiSuccess {String} message Message from API.
 */
router.get('/login/google', GoogleRoutes.authenticate());
router.get('/callback/google', GoogleRoutes.callback(), redirectSocialUser);

/**
 * @api {POST} /auth/login/twitter Social Login
 * @apiName twitter
 * @apiGroup Auth
 * @apiSuccess {String} code HTTP status code from API.
 * @apiSuccess {String} message Message from API.
 */
router.get('/login/twitter', TwitterRoute.authenticate('twitter'));
router.get('/callback/twitter', TwitterRoute.callback(), redirectSocialUser);
module.exports = router;

/**
 * @api {POST} /auth/login/linkedin Social Login
 * @apiName linkedin
 * @apiGroup Auth
 * @apiSuccess {String} code HTTP status code from API.
 * @apiSuccess {String} message Message from API.
 */
router.get('/login/linkedin', LinkedinRoutes.authenticate());
router.get('/callback/linkedin', LinkedinRoutes.callback(), redirectSocialUser);
module.exports = router;
