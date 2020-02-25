let express = require('express');
let route = express.Router();

let model = require('../model/model_tasks.js');

route.get('/', (req, res, next)=>{
	model.read((err, data)=>{
		if(err) return res.sendStatus(500);
		res.send(data);
	});
});

route.post('/', (req, res, next)=>{
	model.create(req.body, (err, data)=>{
		if(err) return res.sendStatus(500);
		res.send(data);
	});
});

route.delete('/', (req, res, next)=>{
	model.delete(req.body, (err, data)=>{
		if(err) return res.sendStatus(500);
		res.send(data);
	});
});

module.exports = route;

