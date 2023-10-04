const express = require('express')

const founderRoute = require('./founder.route');
const contactRoute = require('./contact.route');
const categoryRoute = require('./category.route')
const teamRoute = require('./team.route')
const newsRoute = require('./news.route')
const eventRoute = require('./event.route')

const router = express.Router();

router.use('/founder', founderRoute);
router.use('/contact', contactRoute);
router.use('/category', categoryRoute);
router.use('/team', teamRoute);
router.use('/news', newsRoute);
router.use('/event', eventRoute);

module.exports = router;