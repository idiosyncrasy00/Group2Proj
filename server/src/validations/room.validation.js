const Joi = require('joi');

const createSchema = Joi.object({
    roomname: Joi.string().max(30).required(),
    capacity: Joi.number().integer().min(0).max(200).required(),
    facilities: Joi.string(),
    status: Joi.string().max(30)
});

const editSchema = Joi.object({
    id: Joi.number().integer().required(),
    roomname: Joi.string().max(30),
    capacity: Joi.number().integer().min(0).max(200),
    facilities: Joi.string(),
    status: Joi.string().max(30)
});

module.exports = { createSchema, editSchema };
