const { subChildCategoryService } = require('../services');

/**create category */
const createSubChildCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const subChildCategory = await subChildCategoryService.createSubChildCategory(reqBody);
        if (!subChildCategory) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Sub child category create successfully!",
            data: { subChildCategory }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };

}

/** Get category list */
const getSubChildCategoryList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [];
        }

        const getList = await subChildCategoryService.getSubChildCategoryList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get sub child category list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete category */
const deleteSubChildCategory = async (req, res) => {
    try {
        const subChildCategoryId = req.params.categoryId;
        const subChildCategoryExists = await subChildCategoryService.getSubChildCategoryById(subChildCategoryId);
        if (!subChildCategoryExists) {
            throw new Error("Sub child category not found!");
        }

        await subChildCategoryService.deleteSubChildCategory(subChildCategoryId);
        res.status(200).json({
            success: true,
            message: "Sub child category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**category update by id */
const updateDetails = async (req, res) => {
    try {
        const subChildCategoryId = req.params.subChildCategoryId;
        const subChildCategoryExists = await subChildCategoryService.getSubChildCategoryById(subChildCategoryId);
        if (!subChildCategoryExists) {
            throw new Error("Sub child category not found...");
        }

        await subChildCategoryService.updateDetails(subChildCategoryId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Sub child category details update successfully!" });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error, message
        });
    }
};

/** Get Category details by id */
const getSubChildCategoryDetails = async (req, res) => {
    try {
        const getDetails = await subChildCategoryService.getSubChildCategoryById(
            req.params.categoryId
        );
        if (!getDetails) {
            throw new Error("Sub child category not found!");
        }

        res.status(200).json({
            success: true,
            message: "Sub child category details get successfully!",
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
    createSubChildCategory,
    getSubChildCategoryList,
    deleteSubChildCategory,
    updateDetails,
    getSubChildCategoryDetails
}