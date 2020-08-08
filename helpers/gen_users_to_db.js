const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../src/models/User');

const url = 'mongodb://127.0.0.1:27017/rehviproff?compressors=zlib&gssapiServiceName=mongodb';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once('open', _ => {

  console.log('Database connected:', url);

  const margo = new User({ 
  	username: 'margo', 
  	password: bcrypt.hashSync('margo', 9),
  	firstname: 'Margo',
  	lastname: 'Pruul'
  }).save((err, user) => {
  	if (err) return console.error(err);
  	console.log('user created in db: ' + user.username + ' ' + user.password);
  });

  const german = new User({ 
  	username: 'german', 
  	password: bcrypt.hashSync('german', 9),
  	firstname: 'German',
  	lastname: 'Mumma'
  }).save((err, user) => {
  	if (err) return console.error(err);
  	console.log('user created in db: ' + user.username + ' ' + user.password);
  });

  const peter = new User({ 
  	username: 'peter', 
  	password: bcrypt.hashSync('peter', 9),
  	firstname: 'Peter',
  	lastname: 'Parker'
  }).save((err, user) => {
  	if (err) return console.error(err);
  	console.log('user created in db: ' + user.username + ' ' + user.password);
  });

});

db.on('error', err => {
  console.error('connection error:', err)
});