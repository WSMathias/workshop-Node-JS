/* eslint func-names: ["error", "never"] */
/* eslint prefer-destructuring: 0 */
const router = require('express').Router();
const authRoutes = require('./routes/routes');
const validAuthTokenMiddleware = require('./Middleware/authMiddleware');


router.use('/auth/', authRoutes);
router.use('/scooty/',validAuthTokenMiddleware.validateToken, authRoutes);


module.exports = router;

