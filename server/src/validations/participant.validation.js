const Joi = require('joi');

const inviteSchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    userid: Joi.number().integer().required()
});

const inviteManySchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    participants: Joi.array().items(Joi.number().integer()).required()
});

const deleteSchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    userid: Joi.number().integer().required()
});

const feedbackSchema = Joi.object({
    meetingid: Joi.number().required(),
    message: Joi.string().required()
});

const leaveSchema = Joi.object({
    meetingid: Joi.number().integer().required()
});

module.exports = { inviteSchema, inviteManySchema, deleteSchema, feedbackSchema, leaveSchema };
