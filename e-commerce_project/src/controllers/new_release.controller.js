const { new_releaseService } = require('../services');

/** create new_release */
const createNew_release = async (req, res) => {
    try {
        const reqBody = req.body;

        const new_release = await new_releaseService.createNew_release(reqBody);
        if (!new_release) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "New_release create successfully!",
            data: { new_release }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get new_release list */
const getNew_releaseList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or  = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await new_releaseService.getNew_releaseList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get new_release list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete new_release */
const deleteNew_release = async (req, res) => {
    try {
        const new_releaseId = req.params.new_releaseId;
        const new_releaseExists = await new_releaseService.getNew_releaseById(new_releaseId);
        if (!new_releaseExists) {
            throw new Error("New_release not found!");
        }

        await new_releaseService.deleteNew_release(new_releaseId);
        res.status(200).json({
            success: true,
            message: "New_release delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**New_release update by id */
const updateDetails = async (req, res) => {
    try {
        const new_releaseId = req.params.new_releaseId;
        const new_releaseExists = await new_releaseService.getNew_releaseById(new_releaseId);
        if (!new_releaseExists) {
            throw new Error("New_release not found...");
        }

        await new_releaseService.updateDetails(new_releaseId, req.body);

        res
            .status(200)
            .json({ success: true, message: "New_release details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get New_release details by id */
const getNew_releaseDetails = async (req, res) => {
    try {
      const getDetails = await new_releaseService.getNew_releaseById(
        req.params.new_releaseId
      );
      if (!getDetails) {
        throw new Error("New_release not found!");
      }

      res.status(200).json({
        success: true,
        message: "New_release details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createNew_release,
    getNew_releaseList,
    deleteNew_release,
    updateDetails,
    getNew_releaseDetails
}