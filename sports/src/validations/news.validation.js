const Joi = require('joi');

/**create News */
const createNews = {
    body : Joi.object().keys({
        news_name : Joi.string().required().trim(),
        news_desc : Joi.string().required().trim()
    })
};

/**get list of News */
const getNewsList = {
    query : Joi.object().keys()
};

/**get News list by id */
const getDetails = {
    params : Joi.object().keys({
        newsId : Joi.string().required().trim()
    })
};

/**update News details */
const updateDetails = {
    params : Joi.object().keys({
        newsId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        news_name : Joi.string().required().trim(),
        news_desc : Joi.string().required().trim()
    })
};

module.exports = {
    createNews,
    getNewsList,
    getDetails,
    updateDetails
}