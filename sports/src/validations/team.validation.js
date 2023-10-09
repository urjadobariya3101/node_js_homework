const Joi = require("joi");

/**create Team */
const createTeam = {
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
    player: Joi.string().required().trim(),
  }),
};

/**get list of Team */
const getTeamList = {
  query: Joi.object().keys(),
};

/**get Team list by id */
const getDetails = {
  params: Joi.object().keys({
    teamId: Joi.string().required().trim(),
  }),
};

/**update Team details */
const updateDetails = {
  params: Joi.object().keys({
    teamId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    team_name: Joi.string().required().trim(),
  }),
};

module.exports = {
  createTeam,
  getTeamList,
  getDetails,
  updateDetails,
};
