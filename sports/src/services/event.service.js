const { Event } = require("../models");

/**create Event */
const createEvent = async(reqbody) => {
    return Event.create(reqbody);
}

/**get list of Event */
const getEventList = async() => {
    return Event.find().populate("sports");
}

/**get Event by id*/
const getEventById = async (eventId) => {
    return Event.findById(eventId);
}

/**update Event by id */
const updateDetails = async (eventId) => {
    return Event.findByIdAndUpdate(eventId);
}

/**d oelete Event */
const deleteDetails = async (eventId) => {
    return Event.findByIdAndDelete(eventId)
}

module.exports = {
    createEvent,
    getEventList,
    getEventById,
    updateDetails,
    deleteDetails
}