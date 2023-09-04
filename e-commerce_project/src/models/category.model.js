const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category_name : {
            type : String,
            trim : true
        },
        category_desc : {
            type : String,
            trim : true
        },
        electronic : {
            type : mongoose.Types.ObjectId,
            ref : "electronic"
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "users"
        },
        new_release : {
            type : mongoose.Types.ObjectId,
            ref : "new_release"
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        trimstamp : true,
        versionKey : false,
    }
);

const Category = mongoose.model('category',categorySchema)
module.exports = Category;