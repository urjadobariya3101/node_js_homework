const express = require("express");
const { new_releaseValidation } = require("../../validations");
const { new_releaseController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create new_release */
router.post(
  "/create-new_release",
  validate(new_releaseValidation.createNew_release),
  new_releaseController.createNew_release
);

/** Get new_release list */
router.get(
  "/list",
  validate(new_releaseValidation.getNew_releaseList),
  new_releaseController.getNew_releaseList
);

/** Delete new_release */
router.delete(
  "/delete-new_release/:new_releaseId",
  validate(new_releaseValidation.getDetails),
  new_releaseController.deleteNew_release
);

/**Update new_release */
router.put(
  "/update-new_release/:new_releaseId",
  validate(new_releaseValidation.updateDetails),
  new_releaseController.updateDetails
);

module.exports = router;
