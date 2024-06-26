const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/*', imageController.getImage);

module.exports = router;
