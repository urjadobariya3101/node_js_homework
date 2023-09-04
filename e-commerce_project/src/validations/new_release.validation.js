const Joi = require("joi");

/** create New_release */
const createNew_release = {
  body: Joi.object().keys({
    items: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    discount: Joi.string().required().trim()
  }),
};

/** GEt New_release list */
const getNew_releaseList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get New_release details by id */
const getDetails = {
  params: Joi.object().keys({
    new_releaseId: Joi.string().required().trim(),
  }),
};

/**update new_release by id */
const updateDetails = {
  params: Joi.object().keys({
    new_releaseId: Joi.string().required().trim(),
  }),
  body:Joi.object().keys({
    items: Joi.string().required().trim(),
    price: Joi.number().integer().required(),
    discount: Joi.string().required().trim()
  }),
};

module.exports = {
  createNew_release,
  getNew_releaseList,
  getDetails,
  updateDetails
};
