// routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiInsertDataController');
const dataController =require('../controller/dataController')
const omenController = require('../controller/omenController')
const multer = require('multer');
const luckyController = require("../controller/LuckyController");
const threeDController = require("../controller/threeDController");
const thaiLotteryController = require("../controller/thaiLotteryController");
const myanmarLotteryController = require("../controller/myanmarLotController");

const storage = multer.memoryStorage()
const upload = multer({storage: storage });


//----Daily-----
//api/insert
router.post('/insert/9am', apiController.nineInsertAPI);
router.post('/insert/11am', apiController.elevenInsertAPI);
router.post('/insert/12pm', apiController.twelveInsertAPI);
router.post('/insert/3pm', apiController.threeInsertAPI);
router.post('/insert/4pm', apiController.fourInsertAPI);

//api/allHistory 2D result
router.get('/allHistory/',dataController.getAllHistory)

//edit child array 2D result
router.put('/updateChild/:date/child/:childId',dataController.updateChildResult)


//------OMEN-----
//Upload a new omen
router.post('/omen',upload.single('omenImage'),omenController.omenInsertData)

//Read All Omens (data only)
router.get('/omen',omenController.getAllOmens)

//Read a single omen's image by ID
router.get('/omen/image/:id',omenController.getOmenImage)

//Update an existing omen by ID
router.patch('/omen/:id',upload.single('omenImage'),omenController.updateOmen)

//Delete an omen by ID
router.delete('/omen/:id',omenController.deleteOmen)


//------Lucky-----
router.post('/lucky/',upload.single('luckyImage'),luckyController.luckyUpload)

router.get('/lucky/',luckyController.getAllLucky)

router.delete('/lucky/:id',luckyController.deleteLucky)

//----Three_D----
router.get('/threeD/all',threeDController.getAllThreeD)
router.post('/threeD/',threeDController.entryThreeD)
router.delete('/threeD/:id',threeDController.deleteEntries)

//---Thai_Lottery---
router.get('/thaiLottery/all',thaiLotteryController.getAllThaiLottery)
router.post('/thaiLottery/',upload.single('thaiLotImg'),thaiLotteryController.uploadThaiLottery)
router.delete('/thaiLottery/:id',thaiLotteryController.deleteThaiLottery)

//---Myanmar Lottery---
router.get('/myanmarLot/all',myanmarLotteryController.getAllMyanmarLot)
router.post('/myanmarLot/',upload.single('myanmarLotImg'),myanmarLotteryController.uploadMyanmarLot)
router.delete('/myanmarLot/:id',myanmarLotteryController.deleteMyanmarLot)


module.exports = router;


