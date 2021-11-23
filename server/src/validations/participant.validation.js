const Joi = require('joi');

const inviteSchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    participants: Joi.array().items(Joi.number().integer()).required()
});

const feedbackSchema = Joi.object({
    meetingid: Joi.number().required(),
    message: Joi.string().required()
});

module.exports = { inviteSchema, feedbackSchema };
