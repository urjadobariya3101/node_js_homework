const { Player } = require('../models');

/**create player */
const createPlayer = async(reqBody) => {
    return Player.create(reqBody);
};

/** get player list*/
const getPlayerList = async() => {
    return Player.find().populate("sports");
};

/**get player list by id */
const getPlayerListById = async(playerId) => {
    return Player.findById(playerId);
};

/**update player */
const updateDetails = async(playerId) => {
    return Player.findByIdAndUpdate(playerId);
};

/**delete player */
const deleteDetails = async(playerId) => {
    return Player.findByIdAndDelete(playerId);
};

module.exports = {
    createPlayer,
    getPlayerList,
    getPlayerListById,
    updateDetails,
    deleteDetails
}

