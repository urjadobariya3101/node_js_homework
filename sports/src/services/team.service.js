const { Team } = require("../models");

/**create Team */
const createTeam = async(reqbody) => {
    return Team.create(reqbody);
}

/**get list of Team */
const getTeamList = async() => {
    return Team.find();
}

/**get Team by id*/
const getTeamById = async (teamId) => {
    return Team.findById(teamId);
}

/**update Team by id */
const updateDetails = async (teamId) => {
    return Team.findByIdAndUpdate(teamId);
}

/**d oelete Team */
const deleteDetails = async (teamId) => {
    return Team.findByIdAndDelete(teamId)
}

module.exports = {
    createTeam,
    getTeamList,
    getTeamById,
    updateDetails,
    deleteDetails
}