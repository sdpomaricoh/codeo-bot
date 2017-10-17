var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
	firstName: String,
	lastName: String,
	locale: String,
	timezone: String,
	gender: String,
	createAt: {
		type: Date,
		default: Date.now()
	},
});

module.exports = mongoose.model('User', userSchema);