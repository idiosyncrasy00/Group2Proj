const Joi = require('joi');

const addSchema = Joi.object({
    roomid: Joi.number().integer().required(),
    rating: Joi.number().integer().min(0).max(10),
    message: Joi.string().required()
});

const editSchema = Joi.object({
    id: Joi.number().integer().required(),
    rating: Joi.number().integer().min(0).max(10),
    message: Joi.string()
});

const deleteSchema = Joi.object({
    id: Joi.number().integer().required()
});

module.exports = { addSchema, editSchema, deleteSchema };
