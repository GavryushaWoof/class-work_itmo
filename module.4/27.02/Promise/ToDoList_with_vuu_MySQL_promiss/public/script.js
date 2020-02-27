window.reqToServer = {
	getAllTasks:function(callback){
		fetch('/tasks/', {
			method:"GET"
		}).then((response)=>{
			return response.json();
		}).then((data)=>{
			callback(null, data);
		}).catch((err)=>{
			callback(err);
		});
	},
	addNewTask:function(data, callback){
		fetch('/tasks/', {
			method:"POST",
			headers :{
				'Content-Type':"application/json"
			},
			body:JSON.stringify(data)
		}).then((response)=>{
			return response.json();
		}).then((data)=>{
			callback(null, data);
		}).catch((err)=>{
			callback(err);
		});
	},
	deleteTasks:function(data, callback){
		fetch('/tasks/', {
			method:"DELETE",
			headers :{
				'Content-Type':"application/json"
			},
			body:JSON.stringify(data)
		}).then((response)=>{
			return response.json();
		}).then((data)=>{
			callback(null, data);
		}).catch((err)=>{
			callback(err);
		});
	}
}