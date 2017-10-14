var mongo = require('mongoose');

var database = {};

database.connect = function(){
	mongo.connect(
		'mongodb://localhost:'+process.env.MONGO_PORT+'/'+process.env.DB_NAME,
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