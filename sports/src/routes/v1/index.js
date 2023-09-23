const express = require('express')

const founderRoute = require('./founder.route');

const router = express.Router();

router.use('/founder', founderRoute);

module.exports = router;