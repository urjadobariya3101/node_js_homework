const { mobileService } = require('../services');

/** create mobile */
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.createMobile(reqBody);
        if (!mobile) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Mobile create successfully!",
            data: { mobile }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get mobile list */
const getMobileList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } }
            ];
        }

        const getList = await mobileService.getMobileList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get mobile list successfully!",
            data: getList,
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete mobile */
const deleteMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobileExists = await mobileService.getMobileById(mobileId);
        if (!mobileExists) {
            throw new Error("Mobile not found!");
        }

        await mobileService.deleteMobile(mobileId);
        res.status(200).json({
            success: true,
            message: "Mobile delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**mobile update by id */
const updateDetails = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobileExists = await mobileService.getMobileById(mobileId);
        if (!mobileExists) {
            throw new Error("Mobile not found...");
        }

        await mobileService.updateDetails(mobileId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Mobile details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get Mobile details by id */
const getMobileDetails = async (req, res) => {
    try {
      const getDetails = await mobileService.getMobileById(
        req.params.mobileId
      );
      if (!getDetails) {
        throw new Error("Mobile not found!");
      }

      res.status(200).json({
        success: true,
        message: "Mobile details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** update mobile status */
const updateMobileStatus = async(req,res) => {
    try {
        const mobileId = req.params.MobileId;
        const MobileExist = await mobileService.getMobileById(mobileId);
        if(!MobileExist){
            throw new Error("Mobile not found..");
        }
        const MobileDetail = await mobileService.getmobilestatus(mobileId);
        const MobileStatus = MobileDetail.is_active;
        await mobileService.updateMobileStatus(mobileId,MobileStatus);
        res.status(200).json({
            success:true,
            message: "Mobile updated successfully..",
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
};

module.exports = {
    createMobile,
    getMobileList,
    deleteMobile,
    updateDetails,
    getMobileDetails,
    updateMobileStatus
}