const express = require('express');

const { newsValidation } = require('../../validations');
const { newsController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create news */
router.post(
    "/create-news",
    validate(newsValidation.createNews),
    newsController.createNews
);

/**get list of news */
router.get(
    "/list",
    validate(newsValidation.getNewsList),
    newsController.getNewsList
);

/**update news */
router.put(
    "/update-news/:newsId",
    validate(newsValidation.updateDetails),
    newsController.updateDetails
);

/**delete news */
router.delete(
    "/delete-news/:newsId",
    validate(newsValidation.getDetails),
    newsController.deleteDetails
);

module.exports = router;

