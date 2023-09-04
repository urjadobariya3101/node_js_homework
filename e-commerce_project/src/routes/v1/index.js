const express = require("express");

const productRoute=require("./product.route");
const categoryRoute=require("./category.route");
const userRoute=require("./user.route");
const electronicRoute=require("./electronic.route");
const new_releaseRoute=require("./new_release.route");

const router = express.Router();

router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/user", userRoute);
router.use("/electronic", electronicRoute);
router.use("/new_release", new_releaseRoute);

module.exports = router;