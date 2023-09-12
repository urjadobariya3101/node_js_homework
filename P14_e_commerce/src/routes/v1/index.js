const express = require('express')

const categoryRoute = require('./category.route');
const productRoute = require('./product.route');
const cartRoute = require('./cart.route');
const orderRoute = require('./order.route');
const subCategoryRoute = require('./sub_category.route');
const subChildCategoryRoute = require('./sub_child_category.route');
const userRoute = require('./user.route');

const router = express.Router();

router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/cart',cartRoute);
router.use('/order',orderRoute);
router.use('/subCategory',subCategoryRoute);
router.use('/subChildCategory',subChildCategoryRoute);
router.use('/user',userRoute);

module.exports = router;