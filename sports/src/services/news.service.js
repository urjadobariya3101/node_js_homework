const { News } = require("../models");

/**create News */
const createNews = async(reqbody) => {
    return News.create(reqbody);
}

/**get list of News */
const getNewsList = async() => {
    return News.find().populate("sports");
}

/**get News by id*/
const getNewsById = async (newsId) => {
    return News.findById(newsId);
}

/**update News by id */
const updateDetails = async (newsId) => {
    return News.findByIdAndUpdate(newsId);
}

/**d oelete News */
const deleteDetails = async (newsId) => {
    return News.findByIdAndDelete(newsId)
}

module.exports = {
    createNews,
    getNewsList,
    getNewsById,
    updateDetails,
    deleteDetails
}