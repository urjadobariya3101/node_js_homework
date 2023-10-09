const fs = require('fs');
const { sportsService } = require("../services");

/**create sports */
const createSports = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.sports_image = req.file.filename;
    } else {
      throw new Error("Sports image is required!");
    }

    const sports = await sportsService.createSports(reqBody);
    if (!sports) {
      throw new Error("Something went wrong, Please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "Sports create successfully!",
      data: { sports },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get sports list */
const getSportsList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    const getList = await sportsService.getSportsList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get sports list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**delete sports */
const deleteDetails = async (req, res) => {
  try {
    const sportsId = req.params.sportsId;
    const sportsExists = await sportsService.getSportsById(sportsId);
    if (!sportsExists) {
      throw new Error("sports not found!");
    }

    await sportsService.deleteDetails(sportsId);
    res.status(200).json({
      success: true,
      message: "Delete data successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**sports by id */
const updateDetails = async (req, res) => {
  try {
    const sportsId = req.params.sportsId;
    const sportsExists = await sportsService.getSportsById(sportsId);
    if (!sportsExists) {
      throw new Error("Sports not found!");
    }

    await sportsService.updateDetails(sportsId, req.body);

    res.status(200).json({
      success: true,
      message: "Sports update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**get sports details by id */
const getSportsDetails = async (req, res) => {
  try {
    const getDetails = await sportsService.getSportsById(req.params.sportsId);
    if (!getDetails) {
      throw new Error("Sports not found");
    }

    res.status(200).json({
      success: true,
      message: "Sports details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSports,
  getSportsList,
  getSportsDetails,
  deleteDetails,
  updateDetails,
};
