const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getUserList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return User.find(filter).skip(skip).limit(options.limit).select("-password");
  // return User.find()
  return User.find({$or : [{address : "Sarthana"}]})
};

/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const getUserById = async (userId) => {
  return User.findById(userId);
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<User>}
 */
const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

const getUserByName = async (user_name) => {
  return User.findOne({ user_name });
};

module.exports = {
  createUser,
  getUserList,
  deleteUser,
  getUserById,
  updateDetails,
  getUserByName
};
