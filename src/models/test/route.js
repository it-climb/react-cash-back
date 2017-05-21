const express = require('express');
const router = express.Router();
const testsController = require('./controller');

router.get('/test', testsController.getAll);


module.exports = router;