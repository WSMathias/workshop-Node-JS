# Hapi JS Application | Hapi based REST application using async/await | "Bla Bla Scooty"

## Overview
A RESTful APIs in Node.js using [hapi.js](https://github.com/hapijs/hapi).
Follows industry standard best practices, and uses latest [async/await](https://blog.risingstack.com/mastering-async-await-in-nodejs/) ES8 feature.
Starter baseline code to develop api routes using Hapi JS with Mongoose.

## Features

| Feature                                                                                         | Summary                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Uses latest ES8/ES2017 features (async/await)                                                   | Uses latest ES7 and ES8 features including async/await  |
| Application Configuration via [env configs]                | Node-config organizes env.sh let you manage node env variable in process.env Object. It lets you define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.).
| Auto Documentation via [hapi-swagger](https://www.npmjs.com/package/hapi-swagger)               | This will self document the API interface. You can also tests your APIs using the Swagger interface.
| Unit and Integration Tests via [Mocha](https://mochajs.org/) with async/await                   | Demo unit and integration tests using latest ES7/ES8 features. 
| Code Coverage via [nyc](https://www.npmjs.com/package/istanbul)                            | Supports code coverage of ES8 code using istanbul and mocha. Code coverage reports are saved in `coverage/` directory post `yarn test` execution. Open `coverage/lcov-report/index.html` to view coverage report. `yarn test` also displays code coverage summary on console. Code coverage can also be enforced overall and per file as well, configured via .istanbul.yml                                                                                                                                                                            |
| Logging via [bunyan](https://www.npmjs.com/package/bunyan)                                      | Bunyan is simple and fast JSON logging library. Logs timestamp, machine name and process ID and most importantly makes it really easy to parse logs as it logs in JSON format. You can selectively turn on/off logs by setting log level via LOG_LEVEL env variable.
| Code Linting via [Standard](https://github.com/standard/standard)                               | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript. 
| API parameter validation via [joi](https://www.npmjs.com/package/joi)                           | Validate body, params, query, headers and cookies of a request (via middleware) and return a response with errors; if any of the configured validation rules fail. You won't anymore need to make your route handler dirty with such validations. |
| Application monitoring via [New Relic](https://newrelic.com/application-monitoring)             | Set `NEW_RELIC_APP_NAME` and `NEW_RELIC_LICENSE_KEY` environment variables in production environment to get metrics in New Relic Dashboard |
| Uses [yarn](https://yarnpkg.com) over npm                                                       | Uses new released yarn package manager by facebook. You can read more about it [here](https://code.facebook.com/posts/1840075619545360) |
| [Docker](https://www.docker.com/) compatible                                                    | Docker and [Docker Compose](https://docs.docker.com/compose/overview/) files to develop and deploy via Docker |
| Mongoose                                                   | Mongoose [ORM](https://mongoosejs.com/) to connect with mongo db and managing collections |



## Requirements
 - [node.js](https://nodejs.org/en/download/current/) >= `8.4.0`
 - [yarn](https://yarnpkg.com/en/docs/install) >= `0.27.5`
 - [docker](https://docs.docker.com/engine/installation/#supported-platforms)
    - Docker is optional and is required only if you want to develop and deploy using Docker

## start application
```
source env.sh && npm run start
```
