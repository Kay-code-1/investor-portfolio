const router = require('express').Router();
require('dotenv').config();


// endpoint: /api/marketdata
router.get("/", (req, res) => {
    const apiKey = process.env.MW_API_KEY;
    console.log(apiKey);
    res.status(200).json(apiKey);
    return;
})

module.exports = router;
