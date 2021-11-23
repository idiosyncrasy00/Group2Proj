const Joi = require('joi').extend(require('@joi/date'));


const querySchema = Joi.object({
    adminname: Joi.string().empty(null).default(""),
    roomname: Joi.string().empty(null).default(""),
    reserveddate: Joi.date().format('YYYY-MM-DD').empty(null).default(""),
    title: Joi.string().empty(null).default("")
});


module.exports = { querySchema };
