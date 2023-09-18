const mongoose = require('mongoose');

const subChildCategorySchema = new mongoose.Schema(
    {
        brand_name: {
            type: String,
            trim: true
        },
        subCategory: {
            type: mongoose.Types.ObjectId,
            ref: "sub-category"
        },
        category : {
            type : mongoose.Types.ObjectId,
            ref : "category"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const SubChildCategory = mongoose.model('sub-child-category', subChildCategorySchema);

module.exports = SubChildCategory;