const Joi = require("joi");

/** create Electronic */
const createElectronic = {
  body: Joi.object().keys({
    items: Joi.string().required().trim(),
    model: Joi.string().required().trim(),
    price: Joi.number().integer().required()
  }),
};

/** GEt Electronic list */
const getElectronicList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Electronic details by id */
const getDetails = {
  params: Joi.object().keys({
    electronicId: Joi.string().required().trim(),
  }),
};

/**update electronic by id */
const updateDetails = {
  params: Joi.object().keys({
    electronicId: Joi.string().required().trim(),
  }),
  body:Joi.object().keys({
    items: Joi.string().required().trim(),
    model: Joi.string().required().trim(),
    price: Joi.number().integer().required()
  }),
};

module.exports = {
  createElectronic,
  getElectronicList,
  getDetails,
  updateDetails
};
