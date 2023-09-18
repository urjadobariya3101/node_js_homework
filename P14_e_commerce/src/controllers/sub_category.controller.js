const { subCategoryService } = require('../services');

/**create category */
const createSubCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const subCategory = await subCategoryService.createSubCategory(reqBody);
        if (!subCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Sub category create successfully!",
            data: { subCategory }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };

}

/** Get category list */
const getSubCategoryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [];
        }

        const getList = await subCategoryService.getSubCategoryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get sub category list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete category */
const deleteSubCategory = async (req, res) => {
    try {
        const subCategoryId = req.params.categoryId;
        const subCategoryExists = await subCategoryService.getSubCategoryById(subCategoryId);
        if (!subCategoryExists) {
            throw new Error("Sub category not found!");
        }

        await subCategoryService.deleteSubCategory(subCategoryId);
        res.status(200).json({
            success: true,
            message: "Sub category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**category update by id */
const updateDetails = async (req, res) => {
    try {
        const subCategoryId = req.params.subCategoryId;
        const subCategoryExists = await subCategoryService.getSubCategoryById(subCategoryId);
        if (!subCategoryExists) {
            throw new Error("Sub category not found...");
        }

        await subCategoryService.updateDetails(subCategoryId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Sub category details update successfully!" });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error, message
        });
    }
};

/** Get Category details by id */
const getSubCategoryDetails = async (req, res) => {
    try {
        const getDetails = await subCategoryService.getSubCategoryById(
            req.params.categoryId
        );
        if (!getDetails) {
            throw new Error("Sub category not found!");
        }

        res.status(200).json({
            success: true,
            message: "Sub category details get successfully!",
            data: getDetails,
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createSubCategory,
    getSubCategoryList,
    deleteSubCategory,
    updateDetails,
    getSubCategoryDetails
}