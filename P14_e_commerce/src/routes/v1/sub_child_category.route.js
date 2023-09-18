const express = require('express');

const { subChildCategoryValidation } = require('../../validations');
const { subChildCategoryController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create sub child category */
router.post(
    "/create-sub_child_category",
    validate(subChildCategoryValidation.createSubChildCategory),
    subChildCategoryController.createSubChildCategory
);

/**get list of sub child category */
router.get(
    "/list",
    validate(subChildCategoryValidation.getSubChildCategoryList),
    subChildCategoryController.getSubChildCategoryList
);

/**update sub child category */
router.put(
    "/update-sub_child_category/:subChildCategoryId",
    validate(subChildCategoryValidation.updateDetails),
    subChildCategoryController.updateDetails
);

/**delete sub child category */
router.delete(
    "/delete-sub_child_category/:subChildCategoryId",
    validate(subChildCategoryValidation.getDetails),
    subChildCategoryController.deleteSubChildCategory
);

module.exports = router;