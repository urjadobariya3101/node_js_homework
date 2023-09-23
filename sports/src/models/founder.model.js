const mongoose = require('mongoose');

const founderSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        nationality: {
            type: String,
            trim: true
        },
        sport: {
            type: String,
            trim: true
        },
        founded_year : {
            type : number,
            trim : true
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

const Founder = mongoose.model('founder', founderSchema);

module.exports = Founder;