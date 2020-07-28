const joi = require('joi');

// Registration validation
const registrationValidation = (data) => {
	
	const validationSchema = joi.object({
		username: joi.string().alphanum().min(3).max(254).required(),
		email: joi.string().min(5).max(254).required().email(),
		password: joi.string().min(6).max(254).required(),
		firstname: joi.string(),
		lastname: joi.string()
	});

	return validationSchema.validate(data);

};

// Login validation
const loginValidation = (data) => {
	
	const validationSchema = joi.object({
		username: joi.string().alphanum().min(3).max(254).required(),
		password: joi.string().min(6).max(254).required()
	});

	return validationSchema.validate(data);

};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;