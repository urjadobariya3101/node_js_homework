const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    mobile_no: Joi.number().integer().required(),
    address: Joi.string().required().trim(),
    password: Joi.string().required().trim()
  }),
};

/** GEt user list */
const getUserList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get user details by id */
const getDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
};

/** user details update by id */
const updateDetails = {
  params: Joi.object().keys({
    userId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    name: Joi.string().trim(),
    mobile_no: Joi.number().integer().required(),
    address: Joi.string().required().trim(),
    password: Joi.string().required().trim()
  }),
};

module.exports = {
  createUser,
  getUserList,
  getDetails,
  updateDetails
};
