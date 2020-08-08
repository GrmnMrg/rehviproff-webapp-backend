const winston = require('winston');

// Logging
const Logger = winston.createLogger({
	format: winston.format.combine(
		winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
		winston.format.prettyPrint(),
		winston.format.align(),
		winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'logs/combined.log' })
	]
});

module.exports = Logger;