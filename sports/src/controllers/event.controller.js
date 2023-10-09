const { eventService } = require('../services');

/**create event */
const createEvent = async (req,res) => {
    try{
        const reqBody = req.body;

        const event = await eventService.createEvent(reqBody);
        if(!event){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        res.status(200).json({
            success : true,
            message : "Event create successfully!",
            data : { event }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get event list */
const getEventList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await eventService.getEventList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get event list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete event */
const deleteDetails = async (req,res) => {
    try {
        const eventId = req.params.eventId;
        const eventExists = await eventService.getEventById(eventId);
        if(!eventExists) {
            throw new Error ("event not found!");
        }

        await eventService.deleteDetails(eventId);
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

/**event by id */
const updateDetails = async (req,res) => {
    try {
        const eventId = req.params.eventId;
        const eventExists = await eventService.getEventById(eventId);
        if(!eventExists) {
            throw new Error ('Event not found!');
        }

        await eventService.updateDetails(eventId,req.body);

        res.status(200).json({
            success : true,
            message : "Event update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get event details by id */
const getEventDetails = async (req,res) => {
    try {
        const getDetails = await eventService.getEventById(req.params.eventId);
        if(!getDetails) {
            throw new Error ("Event not found");
        }

        res.status(200).json({
            success : true,
            message : "Event details get successfully!",
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
    createEvent,
    getEventList,
    getEventDetails,
    deleteDetails,
    updateDetails
};