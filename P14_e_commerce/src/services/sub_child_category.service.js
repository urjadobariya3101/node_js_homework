const { SubChildCategory } = require('../models');
const { subscribe } = require('../routes/v1/sub_child_category.route');

/**create sub child category */
const createSubChildCategory = async (reqBody) => {
    return SubChildCategory.create(reqBody);
};

/**get sub child category list */
const getSubChildCategoryList = async () => {
    return SubChildCategory.find();
};

/**get sub child category by id */
const getSubChildCategoryById = async (subChildCategoryId) => {
    return SubChildCategory.findById(subChildCategoryId);
};

/**update sub child category */
const updateDetails = async (subChildCategoryId) => {
    return SubChildCategory.findByIdAndUpdate(subChildCategoryId);
};

/**delete sub child category */
const deleteSubChildCategory = async (subChildCategoryId) => {
    return SubChildCategory.findByIdAndDelete(subChildCategoryId);
};

module.exports = {
    createSubChildCategory,
    getSubChildCategoryList,
    getSubChildCategoryById,
    updateDetails,
    deleteSubChildCategory
};