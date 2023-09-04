const express = require("express");
const { electronicValidation } = require("../../validations");
const { electronicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create electronic */
router.post(
  "/create-electronic",
  validate(electronicValidation.createElectronic),
  electronicController.createElectronic
);

/** Get electronic list */
router.get(
  "/list",
  validate(electronicValidation.getElectronicList),
  electronicController.getElectronicList
);

/** Delete electronic */
router.delete(
  "/delete-electronic/:electronicId",
  validate(electronicValidation.getDetails),
  electronicController.deleteElectronic
);

/**Update electronic */
router.put(
  "/update-electronic/:electronicId",
  validate(electronicValidation.updateDetails),
  electronicController.updateDetails
);

module.exports = router;
