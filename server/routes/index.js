const express = require('express');
let router = express.Router();

const championController = require('../controllers').champion;

router.post('/champion', championController.add);

module.exports = router;
