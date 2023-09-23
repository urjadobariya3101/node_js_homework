const { Founder } = require("../models");

/**create founder */
const createFounder = async(reqbody) => {
    return Founder.create(reqbody);
}

/**get list of founder */
const getFounderList = async() => {
    return Founder.find();
}

/**get founder by id*/
const getFounderById = async (founderId) => {
    return Founder.findById(founderId);
}

/**update founder by id */
const updateDetails = async (founderId) => {
    return Founder.findByIdAndUpdate(founderId);
}

/**delete founder */
const deleteDetails = async (founderId) => {
    return Founder.findByIdAndDelete(founderId)
}

module.exports = {
    createFounder,
    getFounderList,
    getFounderById,
    updateDetails,
    deleteDetails
}