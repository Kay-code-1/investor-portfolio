const router = require('express').Router();
const { Portfolio, Tickers, Investment } = require("../../models");

router.post("/portfolio", async (req, res) => {
    // TODO: Add logic to insert new portolio
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
    // Below is a dummy response
    // res.status(201).json({
    //     message: "Portfolio Created!"
    // })    
});

router.get("/:id", async (req, res) => {
    try {
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
});

router.delete("/portfolio/:id", async (req, res) => {
    // TODO: Add logic to delete portolio by Id. 
    // Also ensure that underlying ref links to investment are also deleted.
    // Below is a dummy response
    res.status(200).json({
        message: "Portfolio deleted!"
    })    
});

module.exports = router;