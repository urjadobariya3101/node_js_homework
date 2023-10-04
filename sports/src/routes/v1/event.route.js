const express = require('express');

const { eventValidation } = require('../../validations');
const { eventController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create event */
router.post(
    "/create-event",
    validate(eventValidation.createEvent),
    eventController.createEvent
);

/**get list of event */
router.get(
    "/list",
    validate(eventValidation.getEventList),
    eventController.getEventList
);

/**update event */
router.put(
    "/update-event/:eventId",
    validate(eventValidation.updateDetails),
    eventController.updateDetails
);

/**delete event */
router.delete(
    "/delete-event/:eventId",
    validate(eventValidation.getDetails),
    eventController.deleteDetails
);

module.exports = router;

