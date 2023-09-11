const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
    {
        product_name : {
            type : String,
            trim : true
        },
        product_desc : {
            type : String,
            trim : true
        },
        price : {
            type : Number,
            trim :true
        },
        sub_child_category : {
            type : mongoose.Types.ObjectId,
            ref : "sub-child-category",
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Product = mongoose.model('product',productSchema);

module.exports = Product;
