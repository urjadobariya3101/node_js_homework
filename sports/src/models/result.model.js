const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      trim: true,
    },
    winningDate: {
      type: String,
      trim: true,
    },
    event_: {
      type: mongoose.Types.ObjectId,
      ref: "event",
    },
    sports: {
      type: mongoose.Types.ObjectId,
      ref: "sports",
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

const Result = mongoose.model("result", resultSchema);
module.exports = Result;
