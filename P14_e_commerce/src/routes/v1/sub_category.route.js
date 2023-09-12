const express = require('express');

const { sub_categoryValidation } = require('../../validations');
const { sub_categoryController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create sub category */
router.post(
    "/create-sub_category",
    validate(sub_categoryValidation.createSubCategory),
    sub_categoryController.createSubCategory
);

/**list sub category */
router.get(
    "/list",
    validate(sub_categoryValidation.getSubCategoryList),
    sub_categoryController.getSubCategoryList
);

/**update sub category */
router.put(
    "/update-sub_category/:subCategoryId",
    validate(sub_categoryValidation.updateDetails),
    sub_categoryController.updateDetails
);

/**delete sub category */
router.delete(
    "/delete-sub_category/:subCategoryId",
    validate(sub_categoryValidation.getDetails),
    sub_categoryController.deleteSubCategory
);

module.exports = router;