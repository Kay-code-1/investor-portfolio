const router = require('express').Router();
const { Portfolio, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const portfolioData = await Portfolio.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

    const portfolio = portfolioData.map((portfolio) => portfolio.get({ plain: true }));

    
    res.render('homepage', { 
      portfolio, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});