const { newsService } = require('../services');

/**create news */
const createNews = async (req,res) => {
    try{
        const reqBody = req.body;

        const news = await newsService.createNews(reqBody);
        if(!news){
            throw new Error ("Something went wrong, Please try again or later!");
        }

        re.status(200).json({
            success : true,
            message : "News create successfully!",
            data : { news }
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    };
};

/**get news list */
const getNewsList = async(req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if(search) {
            filter.$or = [];
        }

        const getList = await newsService.getnewsList(filter,options);

        res.status(200).json({
            success : true,
            message : "Get news list successfully!",
            data : getList
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**delete news */
const deleteDetails = async (req,res) => {
    try {
        const newsId = req.params.newsId;
        const newsExists = await newsService.getNewsById(newsId);
        if(!newsExists) {
            throw new Error ("news not found!");
        }

        await newsService.deleteDetails(newsId);
        res.status(200).json({
            success : true,
            message : "Delete data successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**news by id */
const updateDetails = async (req,res) => {
    try {
        const newsId = req.params.newsId;
        const newsExists = await newsService.getNewsById(newsId);
        if(!newsExists) {
            throw new Error ('News not found!');
        }

        await newsService.updateDetails(newsId,req.body);

        res.status(200).json({
            success : true,
            message : "News update successfully!"
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

/**get news details by id */
const getNewsDetails = async (req,res) => {
    try {
        const getDetails = await newsService.getNewsById(req.params.newsId);
        if(!getDetails) {
            throw new Error ("News not found");
        }

        res.status(200).json({
            success : true,
            message : "News details get successfully!",
            data : getDetails
        });
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        });
    }
};

module.exports = {
    createNews,
    getNewsList,
    getNewsDetails,
    deleteDetails,
    updateDetails
};