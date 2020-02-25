let mongoose = require('mongoose');
 
let takSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: {
		type:String,
		required: true,
		validator: function(text) {
			return text !== "";
        }
	},
    isDelete: {
		type:Boolean,
		default: false
	}
});
 
let Task = mongoose.model('Task', takSchema);
 
module.exports = Task;