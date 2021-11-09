const Joi = require('joi');

const inviteSchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    participants: Joi.array().items(Joi.number().integer()).required()
});

module.exports = { inviteSchema };
