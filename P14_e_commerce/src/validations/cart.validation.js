const Joi = require('joi');

/**create cart */
const createCart = {
    body: Joi.object().keys({
        product: Joi.string().required().trim(),
        user: Joi.string().required().trim(),
        order: Joi.string().required().trim()
    }),
};

/**get cart list */
const getCartList = {
    body: Joi.object().keys()
};

/**get cart details by id */
const getDetails = {
    params: Joi.object().keys({
        cartId: Joi.string().required().trim()
    })
};

/**update cart by id */
const updateDetails = {
    params: Joi.object().keys({
        cartId: Joi.string().required().trim()
    }),
        body: Joi.object().keys({
        product: Joi.string().required().trim(),
        user: Joi.string().required().trim(),
        order: Joi.string().required().trim()
    })

};

module.exports = {
    createCart,
    getDetails,
    getCartList,
    updateDetails
};