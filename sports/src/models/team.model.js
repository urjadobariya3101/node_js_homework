const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      trim: true,
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "player",
    },
    is_active: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Team = mongoose.model("team", teamSchema);
module.exports = Team;
