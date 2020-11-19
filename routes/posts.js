const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("We are on POSTS BRUH");
});

router.get('/specific', (req, res) => {
    res.send("We are on a SPECIFIC POSTS BRUH");
});

module.exports = router;