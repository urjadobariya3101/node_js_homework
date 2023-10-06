const Joi = require('joi');

/** create player */
const createPlayer = {
    body : Joi.object().keys({
        player_name : Joi.string().required().trim(),
        player_desc : Joi.string().required().trim()
    })
};

/**get list of player */
const getPlayerList = {
    query : Joi.object().keys()
};

/**get details */
const getDetails = {
    params : Joi.object().keys({
        playerId : Joi.string().required().trim()
    })
};

/**update player details */
const updateDetails = {
    params : Joi.object().keys({
        playerId : Joi.string().required().trim()
    }),
    body : Joi.object().keys({
        player_name : Joi.string().required().trim(),
        player_desc : Joi.string().required().trim()
    })
};

module.exports = {
    createPlayer,
    getPlayerList,
    getDetails,
    updateDetails
}