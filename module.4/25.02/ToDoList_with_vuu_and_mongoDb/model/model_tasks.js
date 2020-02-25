let mongoClient = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID
// Строка подлючения
//let url = 'mongodb://localhost:27017';
let url = 'mongodb://84.201.158.208:27017/';
//Переменная для хранения подключения к коллекции
let collection;

exports.init = function(callback){
	mongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client)=>{
		if(err){
			return console.log(err);
		}
		collection = client.db('tasks').collection('tasks');
		callback();
	});
};

exports.read = function(callback){
	collection.find().toArray(callback);		
};

exports.create = function(task, callback){
	collection.insertOne(task, (err, result)=>{
		if (err) return callback(err);
		callback(null, result.ops[0])
	});	
};

exports.delete = function(arrIds, callback){
	let filter = {_id: {$in :[]}};
	for(let i = 0; i < arrIds.length; i++){
		filter._id['$in'].push(new ObjectID(arrIds[i]));
	}	
	collection.deleteMany(filter, (err, result)=>{
		if (err) return callback(err);
		callback(null, arrIds);
	});
};
