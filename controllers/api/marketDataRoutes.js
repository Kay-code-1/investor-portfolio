const router = require('express').Router();
require('dotenv').config();


// endpoint: /api/marketdata
router.get("/", (req, res) => {
    const apiKey = process.env.MW_API_KEY;
    const url = `https://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=DJI.INDX`
    console.log(apiKey);
    res.status(200).json(url);
    return;
})

module.exports = router;
