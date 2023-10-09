const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
    {
        player_name : {
            type : String,
            trim : true
        },
        player_desc : {
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

const Player = mongoose.model('player',playerSchema);
module.exports = Player;
