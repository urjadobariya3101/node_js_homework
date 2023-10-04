const { Contact } = require('../models')

/**create contact */
const createContact = async(reqBody) => {
    return Contact.create(reqBody);
};

/**list contact */
const getContactList = async() => {
    return Contact.find();
};

/**get details contact */
const getContactById = async(contactId) => {
    return Contact.findById(contactId);
};

/**update details */
const updateDetails = async(contactId) => {
    return Contact.findByIdAndUpdate(contactId);
};

/**delete details */
const deleteDetails = async(contactId) => {
    return Contact.findByIdAndDelete(contactId);
};

module.exports = {
    createContact,
    getContactList,
    getContactById,
    updateDetails,
    deleteDetails
}
