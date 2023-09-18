const express = require('express');

const { subCategoryValidation } = require('../../validations');
const { subCategoryController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create sub category */
router.post(
    "/create-sub_category",
    validate(subCategoryValidation.createSubCategory),
    subCategoryController.createSubCategory
);

/**list sub category */
router.get(
    "/list",
    validate(subCategoryValidation.getSubCategoryList),
    subCategoryController.getSubCategoryList
);

/**update sub category */
router.put(
    "/update-sub_category/:subCategoryId",
    validate(subCategoryValidation.updateDetails),
    subCategoryController.updateDetails
);

/**delete sub category */
router.delete(
    "/delete-sub_category/:subCategoryId",
    validate(subCategoryValidation.getDetails),
    subCategoryController.deleteSubCategory
);

module.exports = router;