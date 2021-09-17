const router = require('express').Router();
const userRoutes = require('./userRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const investmentsRoutes = require('./investmentsRoutes');
const tickerRoutes = require('./tickerRoutes');
<<<<<<< HEAD
const marketDataRoutes = require('./marketDataRoutes');
=======
const polygonRoutes = require('./polygon');
>>>>>>> b40cc45b7e149754be7023e228f229ddc134bc12

router.use('/users', userRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/investments', investmentsRoutes);
router.use('/tickers', tickerRoutes);
<<<<<<< HEAD
router.use('/marketdata', marketDataRoutes);
=======
router.use('/polygon', polygonRoutes);
>>>>>>> b40cc45b7e149754be7023e228f229ddc134bc12

module.exports = router;