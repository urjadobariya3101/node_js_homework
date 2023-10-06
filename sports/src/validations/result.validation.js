const Joi = require('joi');

/**create Result */
const createResult = {
    body : Joi.object().keys({
        teamName : Joi.string().required().trim(),
        winningDate : Joi.string().required().trim()
    })
};

/**get list of Result */
const getResultList = {
    query : Joi.object().keys()
};

/**get Result list by id */
const getDetails = {
    params : Joi.object().keys({
        resultId : Joi.string().required().trim()
    })
};

/**update Result details */
const updateDetails = {
    params : Joi.object().keys({
        resultId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        teamName : Joi.string().required().trim(),
        winningDate : Joi.string().required().trim()
    })
};

module.exports = {
    createResult,
    getResultList,
    getDetails,
    updateDetails
}