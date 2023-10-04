const express = require('express');

const { contactValidation } = require('../../validations');
const { contactController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create contact */
router.post(
    "/create-contact",
    validate(contactValidation.createContact),
    contactController.createContact
);

/**get list of contact */
router.get(
    "/list",
    validate(contactValidation.getContactList),
    contactController.getContactList
);

/**update contact */
router.put(
    "/update-contact/:contactId",
    validate(contactValidation.updateDetails),
    contactController.updateDetails
);

/**delete contact */
router.delete(
    "/delete-contact/:contactId",
    validate(contactValidation.getDetails),
    contactController.deleteDetails
);

module.exports = router;

