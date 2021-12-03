const Joi = require('joi');

const feedbackSchema = Joi.object({
    message: Joi.string().required(),
});

const statsSchema = Joi.object({
    type: Joi.string().empty(Joi.not('date', 'month', 'year')).default('date'),
});

module.exports = { feedbackSchema, statsSchema };
