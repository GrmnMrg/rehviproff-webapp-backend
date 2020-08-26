const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		requiered: true,
		unique: true,
		min: 3,
		max: 254 
	},
	email: {
		type: String,
		requiered: true,
		unique: true,
		min: 5,
		max: 254 
	},
	password: {
		type: String,
		requiered: true,
		min: 6,
		max: 254
	},
	firstname: {
		type: String 
	},
	lastname: {
		type: String 
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);