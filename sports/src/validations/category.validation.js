const Joi = require('joi');

/**create category */
const createCategory = {
    body : Joi.object().keys({
        category_name : Joi.string().required().trim(),
        category_desc : Joi.string().required().trim(),
        sports : Joi.string().required().trim()
    })
};

/**get list of category */
const getCategoryList = {
    query : Joi.object().keys()
};

/**get category list by id */
const getDetails = {
    params : Joi.object().keys({
        categoryId : Joi.string().required().trim()
    })
};

/**update category details */
const updateDetails = {
    params : Joi.object().keys({
        categoryId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        category_name : Joi.string().required().trim(),
        category_desc : Joi.string().required().trim()
    })
};

module.exports = {
    createCategory,
    getCategoryList,
    getDetails,
    updateDetails
}