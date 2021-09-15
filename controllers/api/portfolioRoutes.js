const router = require('express').Router();
<<<<<<< HEAD
const { Portfolio, Tickers, Investment } = require("../../models");
=======
const sequelize = require('../../config/connection');
const { Portfolio, User, Investment, Tickers } = require("../../models");
>>>>>>> 4599e36f390db606f1e297fb97c7df4159633f28

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
<<<<<<< HEAD
    const portfolioData = await Portfolio.findByPk(req.params.id, {
        include: [{ model: Investment,
        attributes: [
            "id",
            "price",
            "quantity",
            "portfolio_id",
        ],
        include: [{ model: Tickers, 
        attributes: [
            "symbol",
            "name"
        ]}]
    },
] 
});

if (!portfolioData) {
    res.status(404).json({ message: 'No portfolio found with this id!' });
    return;
  }
else {
  res.status(200).json(portfolioData);
}
} catch (err) {
  res.status(500).json(err);
  console.log(err);
}
=======
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
>>>>>>> 4599e36f390db606f1e297fb97c7df4159633f28
});

router.delete("/:id", async (req, res) => {
    res.status(200).json({
        message: "Portfolio deleted!"
    })
});

module.exports = router;