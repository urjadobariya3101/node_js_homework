const express = require('express');

const { sportsValidation } = require('../../validations');
const { sportsController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { upload } = require('../../middlewares/upload')

const router = express.Router();

/**create sports */
router.post(
    "/create-sports",
    upload.single("sports_image"),
    validate(sportsValidation.createSports),
    sportsController.createSports
);

/**get list of sports */
router.get(
    "/list",
    validate(sportsValidation.getSportsList),
    sportsController.getSportsList
);

/**update sports */
router.put(
    "/update-sports/:sportsId",
    validate(sportsValidation.updateDetails),
    sportsController.updateDetails
);

/**delete sports */
router.delete(
    "/delete-sports/:sportsId",
    validate(sportsValidation.getDetails),
    sportsController.deleteDetails
);

module.exports = router;

