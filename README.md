# Node JS app for REST APIs
REST API to support application features
  - Express as web framework
  - Passport js for social authentication 
  - Express CORS enabled
  - boom for error codes & Joi for Validation
  - Winston for logging and express minitor for monitoring
  - Mongoose as ODM driver
  - eslint validation extending airbnb styleguide 
  - git hooks & CI/CD in place
  - TDD in progress with Mocha
  - JWT based authentication
  - multiple Mongoose collection with referencing

# Node js bootcamp app #

"It's just simple application to teach students on node js basics.
REST API developed in Node and React is consuming those services with Redux as state manager.

# Application dependancies
```javascript
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "bluebird": "^3.5.2",
    "body-parser": "^1.18.3",
    "cookie-parser": "^1.4.3",
    "cors": "^2.8.4",
    "dotenv": "^6.1.0",
    "express": "^4.16.4",
    "express-boom": "^2.0.0",
    "express-joi-validator": "^2.0.0",
    "hbs": "^4.0.1",
    "helmet": "^3.14.0",
    "joi": "^14.0.1",
    "jsonwebtoken": "^8.3.0",
    "moment": "^2.22.2",
    "mongoose": "^5.3.6",
    "morgan": "^1.9.0",
    "nodemon": "^1.18.4",
    "passport": "0.3.2",
    "passport-facebook": "2.1.1",
    "passport-google-oauth": "1.0.0",
    "passport-google-oauth20": "^1.0.0",
    "passport-instagram": "1.0.0",
    "passport-local": "1.0.0",
    "passport-twitter": "1.0.4",
    "serve-favicon": "^2.5.0",
    "winston": "^2.4.2"
  },
  "devDependencies": {
    "babel-eslint": "^8.0.1",
    "eslint": "^4.19.1",
    "eslint-config-airbnb-base": "^12.1.0",
    "eslint-plugin-import": "^2.9.0",
    "eslint-plugin-node": "^5.2.1"
  }
```

# Application Execution
```javascript
git clone https://github.com/tkssharma/workshop-Node-JS.git
npm install
npm run start
```
