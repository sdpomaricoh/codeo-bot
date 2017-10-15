/**
 * Configure express router
 */
var express = require('express');
var router = express.Router();

/**
 * Import controllers
 */
var welcomeController = require('../controllers/welcome');
var webhookController = require('../controllers/webhook');


router.get('/', welcomeController.test);

router.get('/webhook', webhookController.challenge);

module.exports = router;
