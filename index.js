const path = require('path');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./models/User');

const Router = require('./Router');

// App
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// Databse
const url = 'mongodb://127.0.0.1:27017/rehviproff?compressors=zlib&gssapiServiceName=mongodb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

// Session
console.log('should create the session store in mongo db here');

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

// Router
new Router(app, db);

// Serve the front-end
app.get('/', () => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));