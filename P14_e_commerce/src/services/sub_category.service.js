const { SubCategory } = require('../models');

/**create sub category */
const createSubCategory = async (reqBody) => {
    return SubCategory.create(reqBody);
};

/**get list of sub category */
const getSubCategoryList = async () => {
    return SubCategory.find().populate("category",{category_name : 1});
};

/**get sub category list by id */
const getSubCategoryById = async (subCategoryId) => {
    return SubCategory.findById(subCategoryId);
};

/**update sub category */
const updateDetails = async (subCategoryId) => {
    return SubCategory.findByIdAndUpdate(subCategoryId);
};

/**delete sub category */
const deleteSubCategory = async (subCategoryId) => {
    return SubCategory.findByIdAndDelete(subCategoryId);
};

module.exports = {
    createSubCategory,
    getSubCategoryList,
    getSubCategoryById,
    updateDetails,
    deleteSubCategory
}