const router = require('express').Router();
const { Portfolio } = require("../../models");

router.post("/portfolio", async (req, res) => {
    // TODO: Add logic to insert new portolio
    // Below is a dummy response
    res.status(201).json({
        message: "Portfolio Created!"
    })    
});

router.get("/portfolio/:id", async (req, res) => {
    // TODO: Add logic to get portolio by Id
    // Below is a dummy response
    res.status(200).json({
        message: "Portfolio found!"
    })    
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