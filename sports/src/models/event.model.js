const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        event_name : {
            type : String,
            trim : true
        },
        event_desc : {
            type : String,
            trim : true
        },
        duration : {
            type : String,
            trim : true
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

const Event = mongoose.model('event',eventSchema);
module.exports = Event;
