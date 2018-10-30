/* eslint func-names: ["error", "never"] */
/* eslint prefer-destructuring: 0 */
import * as express from 'express';
const expressRouter= express.Router();
import authRoutes from './routes/routes';
import validAuthTokenMiddleware from './middleware/authMiddleware';

expressRouter.use('/auth/', authRoutes);
expressRouter.use('/scooty/',validAuthTokenMiddleware.validateToken, authRoutes);


export default expressRouter;
