const router = require('express').Router();
const userRoutes = require('./userRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const investmentsRoutes = require('./investmentsRoutes');
const tickerRoutes = require('./tickerRoutes');
const polygonRoutes = require('./polygon');

router.use('/users', userRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/investments', investmentsRoutes);
router.use('/tickers', tickerRoutes);
router.use('/polygon', polygonRoutes);

module.exports = router;