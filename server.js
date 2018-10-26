#!/usr/bin/env node
const express = require('express');

const app = express();
console.log(` using ${process.env.NODE_ENV} to run application`);
global.configuration = require(`./config/environments/${process.env.NODE_ENV}`);
const logger = require('winston')
const mongoose = require('./lib/mongoose')();

require('./express')(app);
const server = app.listen(process.env.PORT || 3005, () => {
  console.log(`Listening on http://localhost:${process.env.PORT || 3005}`);
});

const gracefulStopServer = function () {
  // Wait 10 secs for existing connection to close and then exit.
  setTimeout(() => {
    logger.info('Shutting down server')
    process.exit(0)
  }, 1000)
}

process.on('uncaughtException', err => {
  logger.error(err, 'Uncaught exception')
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error({
    promise: promise,
    reason: reason
  }, 'unhandledRejection')
  process.exit(1)
})

process.on('SIGINT', gracefulStopServer)
process.on('SIGTERM', gracefulStopServer)

server.on('error', (error) => {
  if (error.syscall !== 'listen') { throw error; }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});