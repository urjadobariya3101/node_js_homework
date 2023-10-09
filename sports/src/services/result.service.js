const { Result } = require("../models");

/**create Result */
const createResult = async(reqbody) => {
    return Result.create(reqbody);
}

/**get list of Result */
const getResultList = async() => {
    return Result.find().populate("sports").populate("event_");
}

/**get Result by id*/
const getResultById = async (resultId) => {
    return Result.findById(resultId);
}

/**update Result by id */
const updateDetails = async (resultId) => {
    return Result.findByIdAndUpdate(resultId);
}

/**d oelete Result */
const deleteDetails = async (resultId) => {
    return Result.findByIdAndDelete(resultId)
}

module.exports = {
    createResult,
    getResultList,
    getResultById,
    updateDetails,
    deleteDetails
}