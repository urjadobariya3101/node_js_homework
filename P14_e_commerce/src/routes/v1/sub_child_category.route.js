const express = require('express');

const { sub_child_categoryValidation } = require('../../validations');
const { sub_child_categoryController } = require('../../controllers');

const validate = require('../../middlewares/validate');

const router = express.Router();

/**create sub child category */
router.post(
    "/create-sub_child_category",
    validate(sub_child_categoryValidation.createSubChildCategory),
    sub_child_categoryController.createSubChildCategory
);

/**get list of sub child category */
router.get(
    "/list",
    validate(sub_child_categoryValidation.getSubChildCategoryList),
    sub_child_categoryController.getSubChildCategoryList
);

/**update sub child category */
router.put(
    "/update-sub_child_category/:subChildCategoryId",
    validate(sub_child_categoryValidation.updateDetails),
    sub_child_categoryController.updateDetails
);

/**delete sub child category */
router.delete(
    "/delete-sub_child_category/:subChildCategoryId",
    validate(sub_child_categoryValidation.getDetails),
    sub_child_categoryController.deleteSubChildCategory
);

module.exports = router;