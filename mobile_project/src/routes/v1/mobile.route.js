const express = require("express");
const { mobileValidation } = require("../../validations");
const { mobileController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create mobile */
router.post(
  "/create-mobile",
  validate(mobileValidation.createMobile),
  mobileController.createMobile
);

/** Get mobile list */
router.get(
  "/list",
  validate(mobileValidation.getMobileList),
  mobileController.getMobileList
);

/** Delete mobile */
router.delete(
  "/delete-mobile/:mobileId",
  validate(mobileValidation.getDetails),
  mobileController.deleteMobile
);

/**Update mobile */
router.put(
  "/update-mobile/:mobileId",
  validate(mobileValidation.updateDetails),
  mobileController.updateDetails
)

module.exports = router;
