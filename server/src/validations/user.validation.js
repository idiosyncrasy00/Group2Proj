const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().min(1).max(30).required(),
    username: Joi.string().alphanum().min(5).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
});

module.exports = { registerSchema };
