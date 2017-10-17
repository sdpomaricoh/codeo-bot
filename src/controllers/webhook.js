/**
 * Import dependencies
 */
var messagesHandler = require('../services/messages');

/**
 * [controller for the facebook webhook to recibe messages]
 * @type {Object}
 */
var webhookController = {};

/**
 * [check the connection with facebook]
 * @param  {http Object} req [http request]
 * @param  {http Object} res [http response]
 * @return {String}      [string generate to facebook as challenge response]
 */
webhookController.challenge = function (req,res) {
	if(req.query['hub.verify_token']=== process.env.SECRET){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Denied !');
    }
};

webhookController.message = function (req,res) {
	var data = req.body;
	if(data.object === 'page'){
		data.entry.forEach( function(pageEntry) {
            pageEntry.messaging.forEach(function(messagingEvent){
            	messagesHandler.recivedMessage(messagingEvent);
            	res.send('ok').status(200);
            });
        });
	}
};

/**
 * export controller module
 */
module.exports = webhookController;