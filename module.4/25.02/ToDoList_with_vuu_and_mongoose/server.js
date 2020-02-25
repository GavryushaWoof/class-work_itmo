let express = require('express');
let bodyParser = require('body-parser')
let app = express();

let model = require('./model/model_tasks.js');

let routerTasks = require('./routes/tasks.js');

model.init(function(){
	app.use(express.static('public'));
	app.use(bodyParser.json());
	app.use('/tasks', routerTasks);

	app.listen(8080, ()=>{
		console.log('Server run 8080 port');
	});	
});