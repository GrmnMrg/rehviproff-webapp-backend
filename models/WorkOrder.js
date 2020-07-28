const mongoose = require('mongoose');

const workOrderSchema = new mongoose.Schema({
	creator_user_id: {
		type: String,
		requiered: true,
		min: 3,
		max: 254 
	},
	creator_user_username: {
		type: String,
		requiered: true,
		min: 3,
		max: 254
	},
	title: {
		type: String,
		max: 254 
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('WorkOrder', workOrderSchema);