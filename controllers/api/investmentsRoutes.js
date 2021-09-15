const router = require('express').Router();
const { Investment } = require("../../models");

router.post("/investment", async (req, res) => {
    // TODO: Add logic to insert new ticker to investment mapped to a portfolio
    // Below is a dummy response
    res.status(201).json({
        message: "Ticker added!"
    })    
});

router.get("/portfolio/:portfolioId/investment", async (req, res) => {
    // TODO: Add logic to get list of investments by Portfolio Id
    // Below is a dummy response
    res.status(200).json({
        message: "Ticker found!"
    })    
});

router.delete("/portfolio/:portfoliId/investment/:id", async (req, res) => {
    // TODO: Add logic to delete portolio by Id. 
    // Also ensure that underlying ref links to investment are also deleted.
    // Below is a dummy response
    res.status(200).json({
        message: "Ticker deleted!"
    })    
});

module.exports = router;