const Joi = require('joi').extend(require('@joi/date'));

const createSchema = Joi.object({
    adminid: Joi.number().integer().required(),
    roomid: Joi.number().integer().required(),
    reserveddate: Joi.date().format('YYYY-MM-DD').raw().required(),
    startingtime: Joi.number().integer().min(7).max(21).required(),
    during: Joi.number().integer().min(1).max(100).required(),
    status: Joi.string().max(30)
});

const editSchema = Joi.object({
    id: Joi.number().integer().required(),
    roomid: Joi.number().integer().required(),
    reserveddate: Joi.date().format('YYYY-MM-DD').raw(),
    startingtime: Joi.number().integer().min(7).max(21),
    during: Joi.number().integer().min(1).max(100),
    status: Joi.string().max(30)
});

const deleteSchema = Joi.object({
    id: Joi.number().integer().required()
});

const infoSchema = Joi.object({
    id: Joi.number().integer().required()
});

module.exports = { createSchema, editSchema, deleteSchema, infoSchema };
