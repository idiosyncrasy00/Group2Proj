const Joi = require('joi');

const registerSchema = Joi.object({
    firstname: Joi.string().max(30).required(),
    lastname: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    dob: Joi.date().format('YYYY-MM-DD').raw().required(),
    phone: Joi.string().max(15),
    address: Joi.string(),
    username: Joi.string().alphanum().min(5).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
});

module.exports = { registerSchema };
