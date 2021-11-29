const Joi = require('joi').extend(require('@joi/date'));


const querySchema = Joi.object({
    adminid: Joi.number().integer(),
    adminname: Joi.string().empty(null).default(""),
    roomname: Joi.string().empty(null).default(""),
    reserveddate: Joi.date().format('YYYY-MM-DD').empty(null).default(""),
    title: Joi.string().empty(null).default("")
});

const listParticipantSchema = Joi.object({
    meetingid: Joi.number().integer().required(),
    outside: Joi.string().empty(Joi.not('yes', 'no')).default('no')
});


module.exports = { querySchema, listParticipantSchema };
