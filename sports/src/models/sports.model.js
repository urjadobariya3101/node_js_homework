const mongoose = require("mongoose");
const config = require("../config/config");

const sportsSchema = new mongoose.Schema(
  {
    sport_name: {
      type: String,
      trim: true,
    },
    sport_desc: {
      type: String,
      trim: true,
    },
    sports_image: {
      type: String,
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "player",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.sports_image) {
          data.sports_image = `${config.base_url}sports_image/${data.sports_image}`;
        }
      },
    },
  }
);

const Sports = mongoose.model("sports", sportsSchema);
module.exports = Sports;
