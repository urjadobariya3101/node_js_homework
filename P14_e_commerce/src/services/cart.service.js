const { Cart } = require('../models');

/**create cart */
const createCart = async (reqBody) => {
    return Cart.create(reqBody);
};

/**get cart list */
const GetCartList = async () => {
    return Cart.find();
};

/**get cart details by id */
const getCartListById = async (cartId) => {
    return Cart.findById(cartId);
};

/**update cart */
const updateDetails = async (cartId) => {
    return Cart.findByIdAndUpdate(cartId);
};

/**delete cart */
const deleteCart = async (cartId) => {
    return Cart.findByIdAndDelete(cartId);
};

module.exports = {
    createCart,
    GetCartList,
    getCartListById,
    updateDetails,
    deleteCart
}