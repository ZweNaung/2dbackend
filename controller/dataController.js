const nineModel =require("../model/dailyResultModel")

//InsertData
const handleInsertData =async (req,res,time,viewName) => {
    try{
        const {date,twoD,set,value}=req.body;
        const child=[{
            time,
            twoD,
            set,
            value
        }];
    const dateCheck = await nineModel.findOne({date});
    console.log(`Date ${date}`);
    console.log(`Date Check ${dateCheck}`);
    console.log("child data", child);
    if(dateCheck){
        if(dateCheck.child.length >=4){
            return res.status(400).render('home',{message:" limit reach : Only 4 entries allowed pre day"});
        }


        await nineModel.updateOne({date},{$push:{child:{$each:child}}});
    }else {
        const data = new nineModel({date,child})
        await data.save();
    }
    res.status(200).render('home',{message:"Success"});
    }catch (error) {
        res.status(500).render('home', { message: `Error ! ${error}` });
    }
}

//api-get data by date
const handleGetDailyData = async (req,res)=>{
    try{
        const {date} = req.params;
        if(!date){
            return res.status(400).json({success:false,message:"Invalid date"});
        }
        const dailyResult = await nineModel.findOne({date});
        if(!dailyResult){
            return res.status(400).json({success:false,message:"No data found"});
        }
        res.status(200).json({success:true,data:dailyResult});
    }catch (error) {
        console.log("Error fetching daily data: ${error}");
        res.status(500).json({success:false,message:"Error fetching daily data"});
    }
}

//get all history
const getAllHistory = async (req,res)=>{
    try {
     const allHistory=await nineModel.find();
     res.status(200).json(allHistory);
    }catch (error) {
        res.status(500).json({message:`Error fetching data: ${error.message}`});
    }
}

//edit child array
const updateChildResult = async (req,res) =>{
    try {
        const {date, childId} = req.params;
        const updateData = req.body;

        const dailyResult = await nineModel.findOne({date});

        if(!dailyResult){
            return res.status(404).json({message : 'DailyResult not found'});
        }
        const childItem = dailyResult.child.id(childId);
        if(!childItem){
            return res.status(404).json({message:'Child not found'});
        }

        Object.assign(childItem,updateData);

        await  dailyResult.save()

        res.status(200).json(
            {
                success:'Child item updated successfully',
                updatedChild:childItem});
    }catch (error) {
        res.status(500).json({message:`Server error.`, error:error.message});
    }
}

// Render routes
exports.renderNineInsertData = (req, res) => {
    console.log("GET /admin/nineAmInsertData");
    res.render("nineAmInsertData");
};

exports.renderElevenInsertData = (req, res) => {
    console.log("GET /admin/elevenAmInsertData");
    res.render("elevenAmInsertData");
};

exports.renderTwelveInsertData = (req, res) => {
    console.log("GET /admin/twelveAmInsertData");
    res.render("twelveAmInsertData");
};

exports.renderThreeInsertData = (req, res) => {
    console.log("GET /admin/threePmInsertData");
    res.render("threePmInsertData");
};

exports.renderFourInsertData = (req, res) => {
    console.log("GET /admin/fourPmInsertData");
    res.render("fourPmInsertData");
};

// Generalized insert routes
exports.nineInsertData = (req, res) => handleInsertData(req, res, "9:00", "nineAmInsertData");
exports.elevenInsertData = (req, res) => handleInsertData(req, res, "11:00", "elevenAmInsertData");
exports.twelveInsertData = (req, res) => handleInsertData(req, res, "12:00", "twelveAmInsertData");
exports.threeInsertData = (req, res) => handleInsertData(req, res, "3:00", "threePmInsertData");
exports.fourInsertData = (req, res) => handleInsertData(req, res, "4:00", "fourPmInsertData");

//---API Function
exports.getDailyData = handleGetDailyData;

exports.getAllHistory = getAllHistory;

exports.updateChildResult = updateChildResult;