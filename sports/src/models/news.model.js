const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
    {
        news_name : {
            type : String,
            trim : true
        },
        news_desc : {
            type : String,
            trim : true
        },
        sports : {
            type : mongoose.Types.ObjectId,
            ref : "sports"
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const News = mongoose.model('news',newsSchema);
module.exports = News;
