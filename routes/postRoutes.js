const express=require('express');
const postController=require('../controller/postController');
const router = express.Router();
const renderDataController = require('../controller/renderDataController');
const insertDataController = require('../controller/dataController');

router.get("/",postController.homePage)

router.get('/viewData', renderDataController.viewDateByDate);

//api
router.get("/dailyResult/:date",insertDataController.getDailyData)

module.exports = router;