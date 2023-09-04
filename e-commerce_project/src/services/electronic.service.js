const { Electronic } = require("../models");

/**
 * Create Electronic
 * @param {object} reqBody
 * @returns {Promise<Electronic>}
 */
const createElectronic = async (reqBody) => {
  return Electronic.create(reqBody);
};

/**
 * Get Electronic list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Electronic>}
 */
const getElectronicList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Electronic.find(filter).skip(skip).limit(options.limit).select("-password");
  return Electronic.find({ $or: [{ items: "iron" }] })
};

/**
 * Get Electronic details by id
 * @param {ObjectId} electronicId
 * @returns {Promise<Electronic>}
 */
const getElectronicById = async (electronicId) => {
  return Electronic.findById(electronicId);
};

/**
 * Delete Electronic
 * @param {ObjectId} electronicId
 * @returns {Promise<Electronic>}
 */
const deleteElectronic = async (electronicId) => {
  return Electronic.findByIdAndDelete(electronicId);
};

/**
 * update electronic
 * @param {ObjectId} electronicId
 * @param {object} updateBody
 * @returns {Promise<Electronic>}
 */
const updateDetails = async (electronicId, updateBody) => {
  return Electronic.findByIdAndUpdate(electronicId, { $set: updateBody })
};

const getElectronicByName = async (items) => {
  return Electronic.findOne({ items });
};

module.exports = {
  createElectronic,
  getElectronicList,
  deleteElectronic,
  getElectronicById,
  updateDetails,
  getElectronicByName
};
