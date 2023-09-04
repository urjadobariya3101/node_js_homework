const { electronicService } = require('../services');

/** create Electronic */
const createElectronic = async (req, res) => {
    try {
        const reqBody = req.body;

        const electronic = await electronicService.createElectronic(reqBody);
        if (!electronic) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Electronic create successfully!",
            data: { electronic }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get Electronic list */
const getElectronicList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or  = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await electronicService.getElectronicList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get electronic list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete electronic */
const deleteElectronic = async (req, res) => {
    try {
        const electronicId = req.params.electronicId;
        const electronicExists = await electronicService.getElectronicById(electronicId);
        if (!electronicExists) {
            throw new Error("Electronic not found!");
        }

        await electronicService.deleteElectronic(electronicId);
        res.status(200).json({
            success: true,
            message: "Electronic delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**Electronic update by id */
const updateDetails = async (req, res) => {
    try {
        const electronicId = req.params.electronicId;
        const electronicExists = await electronicService.getElectronicById(electronicId);
        if (!electronicExists) {
            throw new Error("Electronic not found...");
        }

        await electronicService.updateDetails(electronicId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Electronic details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get Electronic details by id */
const getElectronicDetails = async (req, res) => {
    try {
      const getDetails = await electronicService.getElectronicById(
        req.params.electronicId
      );
      if (!getDetails) {
        throw new Error("Electronic not found!");
      }

      res.status(200).json({
        success: true,
        message: "Electronic details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createElectronic,
    getElectronicList,
    deleteElectronic,
    updateDetails,
    getElectronicDetails
}