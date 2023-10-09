const express = require('express');

const { founderValidation } = require('../../validations');
const { founderController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const router = express.Router();

/**create founder */
router.post(
    "/create-founder",
    auth(),
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
router.put(
    "/update-founder/:founderId",
    validate(founderValidation.updateDetails),
    founderController.updateDetails
);

/**delete founder */
router.delete(
    "/delete-founder/:founderId",
    validate(founderValidation.getDetails),
    founderController.deleteDetails
);

/**Send mail */
router.post(
    "/send-mail",
    validate(founderValidation.sendMail),
    founderController.sendMail
)

module.exports = router;
