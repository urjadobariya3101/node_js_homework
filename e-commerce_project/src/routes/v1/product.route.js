const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product list */
router.get(
  "/list",
  validate(productValidation.getProductList),
  productController.getProductList
);

/** Delete product */
router.delete(
  "/delete-product/:productId",
  validate(productValidation.getDetails),
  productController.deleteProduct
);

/** update product */
router.put(
  "/update-product/:productId",
  validate(productValidation.updateDetails),
  productController.updateDetails
);

module.exports = router;
