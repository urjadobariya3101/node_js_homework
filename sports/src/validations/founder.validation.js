const Joi = require('joi');

/**create founder */
const createFounder = {
    body : Joi.object().keys({
        firstname : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        nationality : Joi.string().required().trim(),
        sport : Joi.string().required().trim(),
        founded_year : Joi.number().integer(),
        sports : Joi.string().required().trim()
    })
};

/**get list of Founder */
const getFounderList = {
    query : Joi.object().keys()
};

/**get Founder list by id */
const getDetails = {
    params : Joi.object().keys({
        founderId : Joi.string().required().trim()
    })
};

/**update founder details */
const updateDetails = {
    params : Joi.object().keys({
        founderId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        firstname : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        nationality : Joi.string().required().trim(),
        sport : Joi.string().required().trim()
    })
};

/** Send mail */
const sendMail = {
    body : Joi.object({
        email : Joi.string().required().trim().email(),
        subject : Joi.string().required().trim(),
        text : Joi.string().required().trim(),
        // founded_year : Joi.number().integer().required()
    }),
};

module.exports = {
    createFounder,
    getFounderList,
    getDetails,
    updateDetails,
    sendMail
}