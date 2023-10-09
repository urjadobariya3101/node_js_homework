const express = require("express");
// const auth = require("../../middlewares/auth");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { productValidation, bannerValidation } = require("../../validations");
const { bannerController , productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create",
  // auth(),
  upload.single("banner_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);



module.exports = router;