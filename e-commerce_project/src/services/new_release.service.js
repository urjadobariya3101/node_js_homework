const { New_release } = require("../models");

/**
 * Create New_release
 * @param {object} reqBody
 * @returns {Promise<New_release>}
 */
const createNew_release = async (reqBody) => {
  return New_release.create(reqBody);
};

/**
 * Get New_release list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<New_release>}
 */
const getNew_releaseList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return New_release.find(filter).skip(skip).limit(options.limit).select("-password");
  return New_release.find({ $or: [{ items: "Camera" }] })
};

/**
 * Get New_release details by id
 * @param {ObjectId} new_releaseId
 * @returns {Promise<New_release>}
 */
const getNew_releaseById = async (new_releaseId) => {
  return New_release.findById(new_releaseId);
};

/**
 * Delete New_release
 * @param {ObjectId} new_releaseId
 * @returns {Promise<New_release>}
 */
const deleteNew_release = async (new_releaseId) => {
  return New_release.findByIdAndDelete(new_releaseId);
};

/**
 * update New_release
 * @param {ObjectId} new_releaseId
 * @param {object} updateBody
 * @returns {Promise<New_release>}
 */
const updateDetails = async (new_releaseId, updateBody) => {
  return New_release.findByIdAndUpdate(new_releaseId, { $set: updateBody })
};

const getNew_releaseByName = async (items) => {
  return New_release.findOne({ items });
};

module.exports = {
  createNew_release,
  getNew_releaseList,
  deleteNew_release,
  getNew_releaseById,
  updateDetails,
  getNew_releaseByName
};
