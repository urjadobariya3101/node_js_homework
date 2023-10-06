const express = require('express');

const { resultValidation } = require('../../validations');
const { resultController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create result */
router.post(
    "/create-result",
    validate(resultValidation.createResult),
    resultController.createResult
);

/**get list of result */
router.get(
    "/list",
    validate(resultValidation.getResultList),
    resultController.getResultList
);

/**update result */
router.put(
    "/update-result/:resultId",
    validate(resultValidation.updateDetails),
    resultController.updateDetails
);

/**delete result */
router.delete(
    "/delete-result/:resultId",
    validate(resultValidation.getDetails),
    resultController.deleteDetails
);

module.exports = router;

