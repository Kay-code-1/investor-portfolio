const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Portfolio, User, Investment, Tickers } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const portfolioData = await Portfolio.create({
            portfolio_name: req.body.portfolio_name,
            user_id: req.body.user_id,
        });
        req.session.save(() => {
            req.session.portfolio_name = portfolioData.portfolio_name;

            res.status(200).json(portfolioData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get("/:id", async (req, res) => {
    try {
        const portfolioData = await Portfolio.findByPk(req.params.id, {
            include: [{
                model: Investment,
                attributes: [
                    'id',
                    'price',
                    'quantity',
                    'portfolio_id',
                    'symbol_id'
                ],
                include : [{
                model: Tickers,
                attributes: [
                        'symbol',
                        'name'
                    ],
                }]
            }],
        });
        if (!portfolioData) {
            res.status(400).json({ message: 'No portfolio with this id' });
            return;
        }
        console.log(portfolioData);
        res.status(200).json(portfolioData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    res.status(200).json({
        message: "Portfolio deleted!"
    })
});

module.exports = router;