var welcomeController = {};

welcomeController.test = function (req,res) {
	res.status(200)
	.send('welcome to codeo chatbot api');
};

module.exports = welcomeController;