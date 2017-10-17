/**
 * [build structure to to show the action of "typing" in the facebook api]
 * @param  {String} recipientID [unique user id]
 * @return {Object}             [structure to show the action of "typing"]
 */
function typingMessage(recipientID){
	messageData = {
		'recipient': { 'id': recipientID},
		'sender_action': 'typing_on'
	};

	return messageData;
}

/**
 * [build structure to send a text-only message in the facebook api]
 * @param  {string} recipientID [unique user id]
 * @param  {String} text        [message to send]
 * @return {Object}             [structure to send a text-only message to facebook]
 */
function textMessage(recipientID,text){
	messageData = {
		'recipient': { 
			'id': recipientID 
		},
		'message': { 
			'text':  text
		}
	};

	return messageData;
}

/**
 * export services module
 */
module.exports = {
	typingMessage: typingMessage,
	textMessage: textMessage
};