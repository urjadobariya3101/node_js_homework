const express = require("express");

const founderRoute = require("./founder.route");
const contactRoute = require("./contact.route");
const categoryRoute = require("./category.route");
const teamRoute = require("./team.route");
const newsRoute = require("./news.route");
const eventRoute = require("./event.route");
const resultRoute = require("./result.route");
const playerRoute = require("./player.route");
const sportsRoute = require("./sports.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/founder", founderRoute);
router.use("/contact", contactRoute);
router.use("/category", categoryRoute);
router.use("/team", teamRoute);
router.use("/news", newsRoute);
router.use("/event", eventRoute);
router.use("/result", resultRoute);
router.use("/player", playerRoute);
router.use("/sports", sportsRoute);
router.use("/token", tokenRoute);

module.exports = router;
