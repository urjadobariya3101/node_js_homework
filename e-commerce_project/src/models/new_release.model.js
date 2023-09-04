const mongoose = require('mongoose');

const new_releaseSchema = new mongoose.Schema(
    {
        items : {
            type : String,
            trim : true
        },
        price : {
            type : Number,
            trim : true
        },
        discount : {
            type : String,
            trim : true
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

const New_release = mongoose.model('new_release',new_releaseSchema)
module.exports = New_release;