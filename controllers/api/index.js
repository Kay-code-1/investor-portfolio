const router = require('express').Router();
const userRoutes = require('./userRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const investmentsRoutes = require('./investmentsRoutes');
const tickerRoutes = require('./tickerRoutes');
const marketDataRoutes = require('./marketDataRoutes');

router.use('/users', userRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/investments', investmentsRoutes);
router.use('/tickers', tickerRoutes);
router.use('/marketdata', marketDataRoutes);

module.exports = router;