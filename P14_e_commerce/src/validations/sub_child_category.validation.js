const Joi = require('joi');

/**create sub child category */
const createSubChildCategory = {
    body : Joi.object().keys({
        brand_name : Joi.string().required().trim(),
        subCategory : Joi.string().required().trim(),
        category : Joi.string().required().trim()
    })
};

/**get list of sub child category */
const getSubChildCategoryList = {
    query : Joi.object().keys()
};

/**get list of sub child category by id */
const getDetails = {
    params : Joi.object().keys({
        subChildCategoryId : Joi.string().required().trim()
    })
};

/**update sub child category by id */
const updateDetails = {
    params : Joi.object().keys({
        subChildCategoryId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        brand_name : Joi.string().required().trim(),
        subCategory : Joi.string().required().trim()
    })
};

module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    getDetails,
    updateDetails
}