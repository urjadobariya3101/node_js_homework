const { Mobile } = require("../models");

/**
 * Create Mobile
 * @param {object} reqBody
 * @returns {Promise<Mobile>}
 */
const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

/**
 * Get Mobile list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Mobile>}
 */
const getMobileList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Mobile.find(filter).skip(skip).limit(options.limit).select("-password");
  return Mobile.find()
};

/**
 * Get mobile details by id
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const getMobileById = async (mobileId) => {
  return Mobile.findById(mobileId);
};

/**
 * Delete Mobile
 * @param {ObjectId} mobileId
 * @returns {Promise<Mobile>}
 */
const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
};

/**
 * update mobile
 * @param {ObjectId} mobileId
 * @param {object} updateBody
 * @returns {Promise<Mobile>}
 */
const updateDetails = async (mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, {$set : {updateBody}})
};

const getMobileByName = async (mobile_name) => {
  return Mobile.findOne({ mobile_name });
};

/** update status */
const updateMobileStatus = async(mobileId,mobileStatus) => {
  if(mobileStatus){
      return Mobile.findByIdAndUpdate(mobileId,{$set: {is_active:false}});
  }
  return Mobile.findByIdAndUpdate(mobileId,{$set: {is_active:true}});
}

module.exports = {
  createMobile,
  getMobileList,
  deleteMobile,
  getMobileById,
  updateDetails,
  getMobileByName,
  updateMobileStatus
};
