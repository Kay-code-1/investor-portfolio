const router = require('express').Router();
const userRoutes = require('./userRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const investmentsRoutes = require('./investmentsRoutes');
const tickerRoutes = require('./tickerRoutes');

router.use('/users', userRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/investments', investmentsRoutes);
router.use('/tickers', tickerRoutes);

module.exports = router;