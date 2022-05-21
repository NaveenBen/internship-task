const Joi = require('joi');

const userSchema = Joi.object({
    
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().email().required(),
    password: Joi.string().required(),

}).required();

module.exports = { userSchema };