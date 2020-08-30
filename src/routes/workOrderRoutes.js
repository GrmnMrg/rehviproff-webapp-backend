const router = require('express').Router();
const verify = require('./verifyToken');
const WorkOrder = require('../models/WorkOrder');
const User = require('../models/User');
const logger = require('../Logger');

router.get('/', verify, async (req, res) => {

	let workOrders = [];

	if (req.body.order_id) {
		workOrders[0] = await WorkOrder.findById(req.body.order_id);
	} else {
		workOrders = await WorkOrder.find();
	}

	// Try and get and send back all work orders
	try {
		logger.info('WorkOrder getting successful');
		res.send(workOrders);
	} catch(err) {
		logger.error('WorkOrder getting failed' + err);
		res.status(400).send(err);
	}

});

router.post('/save', verify, async (req, res) => {

	const user = await User.findOne({ _id: req.user });

	// Create a new work order
	const workOrder = new WorkOrder({
		creator_user_id: user._id,
		creator_user_username: user.username,
		title: req.body.title || 'missing'
	});

	// Try and save the new work order
	try {
		const savedWorkOrder = await workOrder.save();
		logger.info('Work order save successful');
		res.send({ 
			workOrder_id: workOrder._id,
			creator_user_id: workOrder.creator_user_id,
			creator_user_username: workOrder.creator_user_username,
			title: workOrder.title
		});
	} catch(err) {
		logger.error('Workorder save failed' + err);
		res.status(400).send(err);
	}

});

module.exports = router;