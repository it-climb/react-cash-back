const express = require('express');
const router = express.Router();

router.get('/bank', function(req, res) {
    res.send('Bank');
});

module.exports = router;