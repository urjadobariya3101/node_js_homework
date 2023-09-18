const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
    {
        sub_category_name : {
            type : String,
            trim : true
        },
        category : {
            type : mongoose.Types.ObjectId,
            ref : "category"
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

const SubCategory = mongoose.model("sub-category",subCategorySchema);

module.exports = SubCategory;