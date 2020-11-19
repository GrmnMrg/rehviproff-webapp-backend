const router = require('express').Router();
const verify = require('./verifyToken');
const WorkOrder = require('../models/WorkOrder');
const User = require('../models/User');
const logger = require('../Logger');

router.get('/', async (req, res) => {

	let workOrders = [];
	logger.info(`Getting all work orders`);


	// Try and get and send back all work orders
	try {
		workOrders = await WorkOrder.find();
		logger.info('WorkOrder getting successful');
		res.send(workOrders);
	} catch(err) {
		logger.error('WorkOrder getting failed' + err);
		res.status(400).send(err);
	}

});

router.get('/:order_id', async (req, res) => {

	let workOrders = [];
	const orderId = req.params.order_id;

		logger.info(`Getting work order with id ${orderId}`);
		try{
			workOrders[0] = await WorkOrder.findById(orderId);
			res.status(200).send(workOrders);
		}catch(err){
			logger.error('WorkOrder getting failed: ' + err);
			res.status(400).send({
				"message": `Error getting workorder with id ${orderId}`,
				"error": err.message
			});
		}
});

router.post('/save', async (req, res) => {

	const user = await User.findOne({ _id: req.user });

	// Create a new work order
	const workOrder = new WorkOrder({
		date: req.body.date,
		client_name_and_address: req.body.client_name_and_address,
		client_phone: req.body.client_phone,
		car_mark_and_model: req.body.car_mark_and_model,
		car_reg_nr: req.body.car_reg_nr,
		car_vin_code: req.body.car_vin_code,
		car_mileage: req.body.car_mileage,
		list_of_works: req.body.list_of_works,
		replaceable_parts: req.body.replaceable_parts,
		faults_and_remarks: req.body.faults_and_remarks,
		required_parties_client_representative: req.body.required_parties_client_representative,
		required_parties_work_receiver: req.body.required_parties_work_receiver,
		required_parties_work_performer: req.body.required_parties_work_performer
	});

	// Try and save the new work order
	try {
		const savedWorkOrder = await workOrder.save();
		logger.info('Work order save successful');

		res.send({
			"message": "Workorder saved successfully",
			"data": savedWorkOrder
		});
	} catch(err) {
		logger.error('Workorder save failed: ' + err);
		res.status(400).send(err);
	}

});

module.exports = router;