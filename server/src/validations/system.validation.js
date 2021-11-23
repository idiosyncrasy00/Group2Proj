const Joi = require('joi');

const feedbackSchema = Joi.object({
    message: Joi.string().required(),
});

module.exports = { feedbackSchema };
