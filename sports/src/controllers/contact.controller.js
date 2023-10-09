const { contactService } = require('../services');

/**create contact */
const createContact = async (req,res) => {
    try{
        const reqBody = req.body;

        const contact = await contactService.createContact(reqBody);
        if(!contact){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        res.status(200).json({
            success : true,
            message : "Contact create successfully!",
            data : { contact }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get contact list */
const getContactList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await contactService.getContactList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get contact list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete contact */
const deleteDetails = async (req,res) => {
    try {
        const contactId = req.params.contactId;
        const contactExists = await contactService.getContactById(contactId);
        if(!contactExists) {
            throw new Error ("Contact not found!");
        }

        await contactService.deleteDetails(contactId);
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

/**contact by id */
const updateDetails = async (req,res) => {
    try {
        const contactId = req.params.contactId;
        const contactExists = await contactService.getContactById(contactId);
        if(!contactExists) {
            throw new Error ('Contact not found!');
        }

        await contactService.updateDetails(contactId,req.body);

        res.status(200).json({
            success : true,
            message : "Contact update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get contact details by id */
const getContactDetails = async (req,res) => {
    try {
        const getDetails = await contactService.getContactById(req.params.contactId);
        if(!getDetails) {
            throw new Error ("Contact not found");
        }

        res.status(200).json({
            success : true,
            message : "Contact details get successfully!",
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
    createContact,
    getContactList,
    getContactDetails,
    deleteDetails,
    updateDetails
};