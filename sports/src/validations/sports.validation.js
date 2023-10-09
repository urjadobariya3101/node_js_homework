const Joi = require("joi");

/** create Sports */
const createSports = {
  body: Joi.object().keys({
    sport_name: Joi.string().required().trim(),
    sport_desc: Joi.string().required().trim(),
    sports_image: Joi.string().allow(""),
    player: Joi.string().required().trim(),
  }),
};

/**get list of Sports */
const getSportsList = {
  query: Joi.object().keys(),
};

/**get details */
const getDetails = {
  params: Joi.object().keys({
    sportsId: Joi.string().required().trim(),
  }),
};

/**update Sports details */
const updateDetails = {
  params: Joi.object().keys({
    sportsId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    sport_name: Joi.string().required().trim(),
    sport_desc: Joi.string().required().trim(),
    sports_image: Joi.string().allow(""),
    player: Joi.string().required().trim()
  }),
};

module.exports = {
  createSports,
  getSportsList,
  getDetails,
  updateDetails,
};
