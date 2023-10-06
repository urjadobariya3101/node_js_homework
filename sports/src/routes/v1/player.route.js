const express = require('express');
const { playerValidation } = require('../../validations');
const { playerController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create player */
router.post(
    "create-player",
    validate(playerValidation.createPlayer),
    playerController.createPlayer
);

/**get list of player */
router.get(
    "/list",
    validate(playerValidation.getPlayerList),
    playerController.getPlayerList
);

/**update player */
router.put(
    "/update-player/:playerId",
    validate(playerValidation.updateDetails),
    playerController.updateDetails
);

/**delete player */
router.delete(
    "delete-player/:playerId",
    validate(playerValidation.getDetails),
    playerController.deleteDetails
);

module.exports = router;
