const { Sports } = require("../models");

/**create Sports */
const createSports = async(reqbody) => {
    return Sports.create(reqbody);
}

/**get list of Sports */
const getSportsList = async() => {
    return Sports.find().populate("player");
}

/**get Sports by id*/
const getSportsById = async (sportsId) => {
    return Sports.findById(sportsId);
}

/**update Sports by id */
const updateDetails = async (sportsId) => {
    return Sports.findByIdAndUpdate(sportsId);
}

/**d oelete Sports */
const deleteDetails = async (sportsId) => {
    return Sports.findByIdAndDelete(sportsId)
}

module.exports = {
    createSports,
    getSportsList,
    getSportsById,
    updateDetails,
    deleteDetails
}