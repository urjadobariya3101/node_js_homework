const express = require('express');

const { founderValidation } = require('../../validations');
const { founderController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create founder */
router.post(
    "/create-founder",
    validate(founderValidation.createFounder),
    founderController.createFounder
);

/**get list of founder */
router.get(
    "/list",
    validate(founderValidation.getFounderList),
    founderController.getFounderList
);

/**update data by id */
router.update(
    "/update-founder/:founderId",
    validate(founderValidation.updateDetails),
    founderController.updateDetails
);

/**delete founder */
router.update(
    "/delete-founder/:founderId",
    validate(founderValidation.getDetails),
    founderController.deleteDetails
);

module.exports = router;
