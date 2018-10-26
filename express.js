const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');
const helmet = require('helmet');
const cors = require('cors');
const errorHandlers = require('./helper/errorHandler');
const router = require('./routes');
const boom = require('express-boom');
const expressSession = require('express-session');

/* eslint func-names:0 */

module.exports = function (app) {
  app.use(passport.initialize());
  // required for passport to initlize it
  app.use(expressSession({ secret: process.env.EXPRESS_SESSION_SECRET }));
  app.use(passport.session());
  // initlize session
  app.use(logger('dev'));
  app.disable('x-powered-by');
  app.disable('etag');
  app.use(helmet());
  app.use(boom());
  app.use(helmet.noCache({ noEtag: true })); // set Cache-Control header
  app.use(helmet.noSniff()); // set X-Content-Type-Options header
  app.use(helmet.frameguard()); // set X-Frame-Options header
  app.use(helmet.xssFilter()); // set X-XSS-Protection header
  // logger logs on console
  app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' })); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  // enable CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, api_key, Authorization, Referer');
    next();
  });
  // register all custom Middleware
  app.use(cors({ optionsSuccessStatus: 200 }));
  app.use(cookieParser()); // cookies-parser
  // manage session by cookies
  app.set('views', path.join(__dirname, 'views')); // setting views
  app.set('view engine', 'hbs');
  // server side template rendering
  app.use(express.static(path.join(__dirname, 'public')));
  // static folder path
  app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

  app.use('/', router);
  app.use(errorHandlers.internalServerError);
  app.use(errorHandlers.PageNotFound);
};

