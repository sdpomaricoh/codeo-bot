var mongo = require('mongoose');

var database = {};

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

module.exports = database;