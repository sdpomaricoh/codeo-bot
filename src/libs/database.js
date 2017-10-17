/**
 * Import dependencies
 */
var mongo = require('mongoose');

/**
 * [connection object to the database]
 * @type {Object}
 */
var database = {};

/**
 * [generate connection to the database]
 * @return {Object} [database connection handler]
 */
database.connect = function(){
	mongo.connect(
		process.env.MONGODB_URI,
		{ useMongoClient: true },
		function(err,res) {
			if (err){
				throw err;
			}
			else{
				console.log('database connection success');
			}
		});
};

/**
 * export library module
 */
module.exports = database;