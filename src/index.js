const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const logger = require('./Logger');

// Database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, e) => {
	logger.info('Database connection established');
}).catch(error => handleError(error));;

// App
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const workOrderRoutes = require('./routes/workOrderRoutes');

// Middleware
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/order', workOrderRoutes);

// Express-session // TODO: Rework the session thing into its own file or somthing
app.use(session({
	key: 'session',
	secret: 'session-secret',
	// store: {"test":"test"},
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 600000, // 10 minutes in milliseconds
		httpOnly: false
	}
}));

// Start the server
app.listen(process.env.PORT, () => logger.info('Server started on port ' + process.env.PORT));