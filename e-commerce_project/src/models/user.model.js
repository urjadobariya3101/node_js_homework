const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    mobile_no: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim : true
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("users", userSchema);
module.exports = User;
