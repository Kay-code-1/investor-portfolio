const router = require('express').Router();
const userRoutes = require('./userRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const investmentsRoutes = require('./investmentsRoutes');

router.use('/users', userRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/investments', investmentsRoutes);

module.exports = router;