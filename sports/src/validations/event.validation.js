const Joi = require("joi");

/**create Event */
const createEvent = {
  body: Joi.object().keys({
    event_name: Joi.string().required().trim(),
    event_desc: Joi.string().required().trim(),
    duration: Joi.string().required().trim(),
  }),
};

/**get list of Event */
const getEventList = {
  query: Joi.object().keys(),
};

/**get Event list by id */
const getDetails = {
  params: Joi.object().keys({
    EventId: Joi.string().required().trim(),
  }),
};

/**update Event details */
const updateDetails = {
  params: Joi.object().keys({
    params: Joi.string().required().trim(),
  }),
  body: Joi.string().required().trim({
    event_name: Joi.string().required().trim(),
    event_desc: Joi.string().required().trim(),
    duration: Joi.string().required().trim(),
  }),
};

module.exports = {
  createEvent,
  getEventList,
  getDetails,
  updateDetails,
};
