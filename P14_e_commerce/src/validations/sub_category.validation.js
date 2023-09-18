const Joi = require('joi');

/**create sub category */
const createSubCategory = {
    body : Joi.object().keys({
        sub_category_name : Joi.string().required().trim(),
        category : Joi.string().required().trim()
    })
};

/**get sub category list */
const getSubCategoryList = {
    query : Joi.object().keys()
};

/**get sub category list by id */
const getDetails = {
    params : Joi.object().keys({
        subCategoryId : Joi.string().required().trim()
    })
};

/**update sub category by id */
const updateDetails = {
    params : Joi.object().keys({
        subCategoryId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        sub_category_name : Joi.string().required().trim(),
        category : Joi.string().required().trim()
    })
};

module.exports = {
    createSubCategory,
    getSubCategoryList,
    getDetails,
    updateDetails
}