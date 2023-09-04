const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema(
    {
        items : {
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

const Electronic = mongoose.model('electronic',electronicSchema)
module.exports = Electronic;