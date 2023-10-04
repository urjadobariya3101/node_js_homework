const { teamService } = require('../services');

/**create team */
const createTeam = async (req,res) => {
    try{
        const reqBody = req.body;

        const team = await teamService.createTeam(reqBody);
        if(!team){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        re.status(200).json({
            success : true,
            message : "Team create successfully!",
            data : { team }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get team list */
const getTeamList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await teamService.getTeamList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get team list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete team */
const deleteDetails = async (req,res) => {
    try {
        const teamId = req.params.teamId;
        const teamExists = await teamService.getTeamById(teamId);
        if(!teamExists) {
            throw new Error ("team not found!");
        }

        await teamService.deleteDetails(teamId);
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

/**team by id */
const updateDetails = async (req,res) => {
    try {
        const teamId = req.params.teamId;
        const teamExists = await teamService.getTeamById(teamId);
        if(!teamExists) {
            throw new Error ('Team not found!');
        }

        await teamService.updateDetails(teamId,req.body);

        res.status(200).json({
            success : true,
            message : "Team update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get team details by id */
const getTeamDetails = async (req,res) => {
    try {
        const getDetails = await teamService.getTeamById(req.params.teamId);
        if(!getDetails) {
            throw new Error ("Team not found");
        }

        res.status(200).json({
            success : true,
            message : "Team details get successfully!",
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
    createTeam,
    getTeamList,
    getTeamDetails,
    deleteDetails,
    updateDetails
};