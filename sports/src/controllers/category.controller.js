const { categoryService } = require('../services');

/**create category */
const createCategory = async (req,res) => {
    try{
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if(!category){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        re.status(200).json({
            success : true,
            message : "Category create successfully!",
            data : { category }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get category list */
const getCategoryList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await categoryService.getCategoryList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get category list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete category */
const deleteDetails = async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if(!categoryExists) {
            throw new Error ("Category not found!");
        }

        await categoryService.deleteDetails(categoryId);
        res.status(200).json({
            success : true,
            message : "Delete data successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**category by id */
const updateDetails = async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if(!categoryExists) {
            throw new Error ('Category not found!');
        }

        await categoryService.updateDetails(categoryId,req.body);

        res.status(200).json({
            success : true,
            message : "Category update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get category details by id */
const getCategoryDetails = async (req,res) => {
    try {
        const getDetails = await categoryService.getCategoryById(req.params.categoryId);
        if(!getDetails) {
            throw new Error ("Category not found");
        }

        res.status(200).json({
            success : true,
            message : "Category details get successfully!",
            data : getDetails
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryDetails,
    deleteDetails,
    updateDetails
};