const { plyaerService } = require('../services');

/**create player */
const createPlayer = async (req,res) => {
    try{
        const reqBody = req.body;

        const player = await playerService.createPlayer(reqBody);
        if(!player){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        re.status(200).json({
            success : true,
            message : "Player create successfully!",
            data : { player }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get player list */
const getPlayerList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await playerService.getPlayerList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get player list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete player */
const deleteDetails = async (req,res) => {
    try {
        const playerId = req.params.playerId;
        const playerExists = await playerService.getPlayerById(playerId);
        if(!playerExists) {
            throw new Error ("Player not found!");
        }

        await playerService.deleteDetails(playerId);
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

/**player by id */
const updateDetails = async (req,res) => {
    try {
        const playerId = req.params.playerId;
        const playerExists = await playerService.getPlayerById(playerId);
        if(!playerExists) {
            throw new Error ('Player not found!');
        }

        await playerService.updateDetails(playerId,req.body);

        res.status(200).json({
            success : true,
            message : "Player update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get player details by id */
const getPlayerDetails = async (req,res) => {
    try {
        const getDetails = await playerService.getPlayerById(req.params.playerId);
        if(!getDetails) {
            throw new Error ("Player not found");
        }

        res.status(200).json({
            success : true,
            message : "Player details get successfully!",
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
    createPlayer,
    getPlayerList,
    getPlayerDetails,
    deleteDetails,
    updateDetails
};