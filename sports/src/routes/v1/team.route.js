const express = require('express');

const { teamValidation } = require('../../validations');
const { teamController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create team */
router.post(
    "/create-team",
    validate(teamValidation.createTeam),
    teamController.createTeam
);

/**get list of team */
router.get(
    "/list",
    validate(teamValidation.getTeamList),
    teamController.getTeamList
);

/**update team */
router.put(
    "/update-team/:teamId",
    validate(teamValidation.updateDetails),
    teamController.updateDetails
);

/**delete team */
router.delete(
    "/delete-team/:teamId",
    validate(teamValidation.getDetails),
    teamController.deleteDetails
);

module.exports = router;

