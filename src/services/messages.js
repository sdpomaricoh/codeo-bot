/**
 * Import dependencies
 */
var rp = require('request-promise');
var User = require('../models/user');
var structures = require('./structures');

/**
 * [receive message and process a response]
 * @param  {Object} event [message event to facebook webhook]
 */
function recivedMessage (event) {

	var senderID = event.sender.id;
	var recipientID = event.recipient.id; //myself
	var text = event.message.text;

	var typing = structures.typingMessage(senderID);
	callSendAPI(typing);

	saluteUser(senderID);
}

/**
 * [Send message to facebook api]
 * @param  {Object} messageData [message structure]
 */
function callSendAPI(messageData){
    rp(
    	{
        	uri: 'https://graph.facebook.com/v2.6/me/messages',
        	qs: {
           		access_token: process.env.TOKEN 
        	},
        	method: 'POST',
        	json: messageData
    	}, 
    	function(error,response,data){
        	if(error){
            	console.log(error);
        	}
    	}
    );
	
}

/**
 * [generate salute for the user]
 * @param  {String} userID [unique user id]
 */
function saluteUser(userID){

	var saluteMessage = '';
	var options = prepareConsultUserAPI(userID);

	rp(options)
		.then(function (user) {
			saluteMessage = 'Hola, '+user.first_name+' ¿Comó estas?';
			var messageData = structures.textMessage(userID,saluteMessage);
			callSendAPI(messageData);
	    })
	    .catch(function (err) {
	        console.log(err);
	    });
}

/**
 * [generate object for http request to facebook api]
 * @param  {String} userID [unique user id]
 * @return {Object}        [options to http request]
 */
function prepareConsultUserAPI(userID){

	var options = {
		uri: 'https://graph.facebook.com/v2.6/'+userID,
	    qs: {
	        access_token: process.env.TOKEN
	    },
	    method: 'GET',
    	json: true 
	};

	return options;
}

/**
 * export services module
 */
module.exports = {
	recivedMessage: recivedMessage
};