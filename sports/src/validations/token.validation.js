const Joi = require("joi");

/** Create jsonwebroken  */
const generateToken = {
  body: Joi.object({
    founder: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};