const { resultService } = require('../services');

/**create result */
const createResult = async (req,res) => {
    try{
        const reqBody = req.body;

        const result = await resultService.createResult(reqBody);
        if(!result){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        re.status(200).json({
            success : true,
            message : "Result create successfully!",
            data : { result }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get result list */
const getResultList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await resultService.getResultList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get result list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete result */
const deleteDetails = async (req,res) => {
    try {
        const resultId = req.params.resultId;
        const resultExists = await resultService.getResultById(resultId);
        if(!resultExists) {
            throw new Error ("Result not found!");
        }

        await resultService.deleteDetails(resultId);
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

/**result by id */
const updateDetails = async (req,res) => {
    try {
        const resultId = req.params.resultId;
        const resultExists = await resultService.getResultById(resultId);
        if(!resultExists) {
            throw new Error ('Result not found!');
        }

        await resultService.updateDetails(resultId,req.body);

        res.status(200).json({
            success : true,
            message : "Result update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get result details by id */
const getResultDetails = async (req,res) => {
    try {
        const getDetails = await resultService.getResultById(req.params.resultId);
        if(!getDetails) {
            throw new Error ("Result not found");
        }

        res.status(200).json({
            success : true,
            message : "Result details get successfully!",
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
    createResult,
    getResultList,
    getResultDetails,
    deleteDetails,
    updateDetails
};