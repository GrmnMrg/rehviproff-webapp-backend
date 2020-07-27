const router = require('express').Router();

router.post('/getorder', (req, res) => {
	res.send('Order');
});

module.exports = router;