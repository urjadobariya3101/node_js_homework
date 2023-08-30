const Joi = require("joi");

/** create mobile */
const createMobile = {
  body: Joi.object().keys({
    company_name: Joi.string().required().trim(),
    model: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    mobile_disc: Joi.string().required().trim()
  }),
};

/** GEt mobile list */
const getMobileList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get mobile details by id */
const getDetails = {
  params: Joi.object().keys({
    mobileId: Joi.string().required().trim(),
  }),
};

/** mobile details update by id */
const updateDetails = {
  params : Joi.object().keys({
    mobileId : Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    company_name: Joi.string().required().trim(),
    model: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    mobile_disc: Joi.string().required().trim()
  })
}

module.exports = {
  createMobile,
  getMobileList,
  getDetails,
  updateDetails
};
