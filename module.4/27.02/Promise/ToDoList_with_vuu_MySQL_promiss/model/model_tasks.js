const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	user : 'admin',
	password : 'admin',
	database : 'firstDB'
});

connection.connect();

exports.read = function(callback){
	connection.query('SELECT id, name, isDelete FROM tasks', (error, results, fields)=>{
		if (error) return callback(error);

		for (let i in results) {
			console.log('The results is: ', results[i]);
		}
		callback(null, results);
	});		
};

exports.create = function(task, callback){
	connection.query('INSERT INTO tasks(name, isDelete) VALUES(?, ?)', 
		[task.name, task.isDelete], (error, results, fields)=>{
		if (error) return callback(error);
		task.id = results.insertId;
		callback(null, task);
	});
};

exports.delete = function(arrIds, callback){
	connection.query('DELETE FROM tasks WHERE id IN (?)', 
		[arrIds], (err, rows, fields)=>{
			if(err) {
				console.log(err);
				return callback(err);
			}
			callback(null, arrIds);
		});
};
