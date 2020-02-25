let mongoose = require('mongoose');
// Строка подлючения
//let url = 'mongodb://localhost:27017/tasks';
let url = 'mongodb://84.201.158.208:27017/tasks';
let Task = require('./task');

exports.init = function(callback){
	mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=> {
		if(err){
			return console.log(err);
		}
		callback();
	});
};

exports.read = function(callback){
	Task.find({}, (err, tasks)=> {
        if (err) throw err;
		callback(null, tasks);
    });		
};

exports.create = function(task, callback){
	let objTask = new Task(task);
	objTask.save(function(err) {
        if (err) {
			console.log(err);
			return callback(err);
		}
        callback(null, objTask);
    });
};

exports.delete = function(arrIds, callback){
	let filter = {_id: {$in :arrIds}};

	Task.deleteMany(filter, (err, result)=>{
		if (err) return callback(err);
		callback(null, arrIds);
	});
};
