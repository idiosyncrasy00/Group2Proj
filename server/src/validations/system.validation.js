const Joi = require('joi');

const feedbackSchema = Joi.object({
    message: Joi.string().required(),
});

const statsSchema = Joi.object({
    year: Joi.number().integer(),
    month: Joi.number().integer(),
    day: Joi.number().integer()
});

module.exports = { feedbackSchema, statsSchema };
