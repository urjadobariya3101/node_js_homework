const Joi = require("joi");

/**create contact */
const createContact = {
  body: Joi.object().keys({
    name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    message: Joi.string().required().trim(),
  }),
};

/**get list of contact */
const getContactList = {
  query: Joi.object().keys(),
};

/**get contact list by id */
const getDetails = {
  params: Joi.object().keys({
    contactId: Joi.string().required().trim(),
  }),
};

/**update contact details */
const updateDetails = {
  params: Joi.object().keys({
    params: Joi.string().required().trim(),
  }),
  body: Joi.string().required().trim({
    name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    message: Joi.string().required().trim(),
  }),
};

module.exports = {
  createContact,
  getContactList,
  getDetails,
  updateDetails,
};
