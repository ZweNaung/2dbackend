const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
const insertDataController = require('../controller/dataController');
const renderDataController = require('../controller/renderDataController');


router.get("/nineAmInsertData/",insertDataController.renderNineInsertData)
router.post("/nineAmInsertData",insertDataController.nineInsertData);

router.get("/elevenAmInsertData",insertDataController.renderElevenInsertData);
router.post("/elevenAmInsertData",insertDataController.elevenInsertData);


router.get("/twelveAmInsertData",insertDataController.renderTwelveInsertData);
router.post("/twelveAmInsertData",insertDataController.twelveInsertData);

router.get("/threePmInsertData",insertDataController.renderThreeInsertData);
router.post("/threePmInsertData",insertDataController.threeInsertData);

router.get("/fourPmInsertData",insertDataController.renderFourInsertData);
router.post("/fourPmInsertData",insertDataController.fourInsertData);

//get edit
router.get('/editChild', renderDataController.renderEditChild);
router.post('/update-child', renderDataController.updateChild);




// router.get("/nineAmInsertData/",postController.renderNineInsertData)
// router.post("/nineAmInsertData",postController.nineInsertData);
//
// router.get("/elevenAmInsertData",postController.renderElevenInsertData);
// router.post("/elevenAmInsertData",postController.elevenInsertData);
//
//
// router.get("/twelveAmInsertData",postController.renderTwelveInsertData);
// router.post("/twelveAmInsertData",postController.twelveInsertData);
//
// router.get("/threePmInsertData",postController.renderThreeInsertData);
// router.post("/threePmInsertData",postController.threeInsertData);
//
// router.get("/fourPmInsertData",postController.renderFourInsertData);
// router.post("/fourPmInsertData",postController.fourInsertData);

module.exports = router;