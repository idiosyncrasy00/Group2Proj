const Joi = require('joi').extend(require('@joi/date'));


const querySchema = Joi.object({
    adminname: Joi.string(),
    roomname: Joi.string(),
    reserveddate: Joi.date().format('YYYY-MM-DD'),
    title: Joi.string()
});


module.exports = { querySchema };
