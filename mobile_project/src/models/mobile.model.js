const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema(
    {
        company_name : {
            type : String,
            trim : true
        },
        model : {
            type : String,
            trim : true
        },
        price : {
            type : Number,
            trim : true
        },
        mobile_disc : {
            type : String,
            trim : true
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const Mobile = mongoose.model('mobiles',mobileSchema)
module.exports = Mobile;