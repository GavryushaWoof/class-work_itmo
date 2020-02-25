window.reqToServer = {
	getAllTasks:function(callback){
		$.ajax({
			type: "GET",
			url:'/tasks/',
			success: function(data){
				callback(null, data);
			},
			error: function(err){
				callback(err);
			}
		});
	},
	addNewTask:function(data, callback){
		console.log(data);
		$.ajax({
			type: "POST",
			url: '/tasks/',
			contentType: "application/json",
			data:JSON.stringify(data),
			success:function(data){
				callback(null, data);
			},
			error: function(err){
				callback(err);
			}
		});
	},
	deleteTasks:function(data, callback){
		console.log(data);
		$.ajax({
			type: "DELETE",
			url: '/tasks/',
			contentType: "application/json",
			data:JSON.stringify(data),
			success:function(data){
				console.log(data);
				callback(null, data);
			},
			error: function(err){
				callback(err);
			}
		});
	}
}