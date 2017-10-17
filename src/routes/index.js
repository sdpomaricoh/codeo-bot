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

/**
 * Welcome routes
 */
router.get('/', welcomeController.salute);

/**
 *  Facebook webhook routes
 */
router.get('/webhook', webhookController.challenge);
router.post('/webhook', webhookController.message);


/**
 * Export route module
 */
module.exports = router;
