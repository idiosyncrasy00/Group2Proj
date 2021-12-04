const Joi = require('joi');

const feedbackSchema = Joi.object({
    message: Joi.string().required(),
});

const statsSchema = Joi.object({
    date: Joi.string().required()
});

module.exports = { feedbackSchema, statsSchema };
