const mongoose = require('mongoose');

const workOrderSchema = new mongoose.Schema({
	date: {
		type: Date,
		default: Date.now
	},
	client_name_and_address: {
		type: String,
		max: 512
	},
	client_phone: {
		type: String,
		max: 254
	},
	car_mark_and_model: {
		type: String,
		max: 254
	},
	car_reg_nr: {
		type: String,
		max: 254
	},
	car_vin_code: {
		type: String,
		max: 254
	},
	car_mileage: {
		type: Number
	},
	list_of_works: {
		type: String,
		max: 2048
	},
	replaceable_parts: {
		type: String,
		max: 2048
	},
	faults_and_remarks: {
		type: String,
		max: 2048
	},
	required_parties_client_representative: {
		type: String,
		max: 512
	},
	required_parties_work_receiver: {
		type: String,
		max: 512
	},
	required_parties_work_performer: {
		type: String,
		max: 512
	}
});

module.exports = mongoose.model('WorkOrder', workOrderSchema);