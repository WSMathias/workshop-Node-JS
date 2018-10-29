/* eslint func-names: ["error", "never"] */
/* eslint prefer-destructuring: 0 */
const expressRouter = require('express').Router();
const authRoutes = require('./routes/routes');
const validAuthTokenMiddleware = require('./Middleware/authMiddleware');


expressRouter.use('/auth/', authRoutes);
expressRouter.use('/scooty/',validAuthTokenMiddleware.validateToken, authRoutes);


module.exports = expressRouter;

