const { founderService } = require('../services');
const { emailService } = require('../services');

/**create founder */
const createFounder = async (req,res) => {
    try {
        const reqBody = req.body;

        const founder = await founderService.createFounder(reqBody);
        if(!founder) {
            throw new Error("Something went wrong, please try again or later!!");
        }

        res.status(200).json({
            success : true,
            message : "Founder create successfully!!",
            data : { founder }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
}

/**get founder list */
const getFounderList = async (req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await founderService.getFounderList(filter, options);

        res.status(200).json({
            success : true,
            message : "Get founder list successfully!!",
            data : getList
        });
    }
    catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**Delete founder */
const deleteDetails = async (req,res) => {
    try {
        const founderId = req.params.founderId;
        const founderExists = await founderService.getFounderById(founderId);
        if(!founderExists) {
            throw new Error ('Founder not found!');
        }

        await founderService.deleteDetails(founderId);
        res.status(200).json({
            success : true,
            message : "Founder delete successfully!!"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

/**founder update by id */
const updateDetails = async (req,res) => {
    try {
        const founderId = req.params.founderId;
        const founderExists = await founderService.getFounderById(founderId);
        if(!founderExists) {
            throw new Error ('Founder not found!!');
        }
        await founderService.updateDetails(founderId,req.body);

        res.status(200).json({
            success : true,
            message : "Founder update successfully!!"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get founder details by id */
const getFounderDetails = async (req,res) => {
    try {
        const getDetails = await founderService.getFounderById(req.params.founderId);
        if (!getDetails) {
            throw new Error("Founder not found!!");
        }

        res.status(200).json({
            success : true,
            message : "Founder details get successfully!!",
            data : getDetails
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
    try {
      const reqBody = req.body;
      const sendEmail = await emailService.sendMail(
        reqBody.email,
        reqBody.subject,
        reqBody.text
      );
      if (!sendEmail) {
        throw new Error("Something went wrong, please try again or later.");
      }

      res
        .status(200)
        .json({ success: true, message: "Email send successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createFounder,
    getFounderList,
    deleteDetails,
    updateDetails,
    getFounderDetails,
    sendMail
}