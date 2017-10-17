/**
 * [welcomeController welcome controller to the app]
 * @type {Object}
 */
var welcomeController = {};

/**
 * [send a welcome salute]
 * @param  {http Object} req [http request]
 * @param  {http Object} res [http response]
 * @return {String}     [Welcome message]
 */
welcomeController.salute = function (req,res) {
	res.status(200)
	.send('welcome to codeo chatbot api');
};

/**
 * export controller module
 */
module.exports = welcomeController;