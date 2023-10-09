const { Category } = require('../models')

/**create category */
const createCategory = async(reqBody) => {
    return Category.create(reqBody);
};

/**list category */
const getCategoryList = async() => {
    return Category.find().populate("sports");
};

/**get details category */
const getCategoryById = async(categoryId) => {
    return Category.findById(categoryId);
};

/**update details */
const updateDetails = async(categoryId) => {
    return Category.findByIdAndUpdate(categoryId);
};

/**delete details */
const deleteDetails = async(categoryId) => {
    return Category.findByIdAndDelete(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    updateDetails,
    deleteDetails
}
