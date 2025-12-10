const nineModel = require("../model/dailyResultModel")

exports.homePage=(req, res)=>{
    res.render('home');
}
//
// //9:00
// exports.renderNineInsertData=(req, res)=>{
//     console.log("GET /admin/nineAmInsertData");
//     res.render("nineAmInsertData");
// }
// //9:00
// exports.nineInsertData=async (req, res)=>{
//     try{
//         const {date,twoD,set,value} = req.body;
//         const child = [{
//             time: "9:00",
//             twoD,
//             set,
//             value
//         }]
//         const dateCheck = await nineModel.findOne({date})
//         console.log(`Date ${date}`)
//         console.log(`Date Check ${dateCheck}`)
//         console.log("child data", child);
//         if(dateCheck){
//             await nineModel.updateOne({date},{$push:{child:{$each :child}}});
//             // res.status(200).json({message:"Updated Existing history"});
//             res.status(200).render('home', { message: "Success!" });
//         }else {
//             const data = new nineModel({date,child})
//             await data.save();
//             // res.status(201).json({message:"Created new Data entry"})
//             res.status(201).render('home', { message: "Success!" });
//         }
//     }catch(e){
//         // res.status(500).json({message:"Internal Server Error"})
//         res.status(500).render('home', { message: `Error ! ${e}` });
//     }
// }
//
// //11:00
// exports.renderElevenInsertData=(req, res)=>{
//     console.log("GET /admin/elevenAmInsertData");
//     res.render("elevenAmInsertData");
// }
// //11:00
// exports.elevenInsertData=async (req, res)=>{
//     try{
//         const {date,twoD,set,value} = req.body;
//         const child = [{
//             time: "11:00",
//             twoD,
//             set,
//             value
//         }]
//         const dateCheck = await nineModel.findOne({date})
//         console.log(`Date ${date}`)
//         console.log(`Date Check ${dateCheck}`)
//         console.log("child data", child);
//         if(dateCheck){
//             await nineModel.updateOne({date},{$push:{child:{$each :child}}});
//             // res.status(200).json({message:"Updated Existing history"});
//             res.status(200).render('home', { message: "Success!" });
//         }else {
//             const data = new nineModel({date,child})
//             await data.save();
//             // res.status(201).json({message:"Created new Data entry"})
//             res.status(201).render('home', { message: "Success!" });
//         }
//     }catch(e){
//         // res.status(500).json({message:"Internal Server Error"})
//         res.status(500).render('home', { message: `Error ! ${e}` });
//     }
// }
//
// //12:00
// exports.renderTwelveInsertData=(req, res)=>{
//     console.log("GET /admin/elevenAmInsertData");
//     res.render("twelveAmInsertData");
// }
// //12:00
// exports.twelveInsertData=async (req, res)=>{
//     try{
//         const {date,twoD,set,value} = req.body;
//         const child = [{
//             time: "12:00",
//             twoD,
//             set,
//             value
//         }]
//         const dateCheck = await nineModel.findOne({date})
//         console.log(`Date ${date}`)
//         console.log(`Date Check ${dateCheck}`)
//         console.log("child data", child);
//         if(dateCheck){
//             await nineModel.updateOne({date},{$push:{child:{$each :child}}});
//             // res.status(200).json({message:"Updated Existing history"});
//             res.status(200).render('home', { message: "Success!" });
//         }else {
//             const data = new nineModel({date,child})
//             await data.save();
//             // res.status(201).json({message:"Created new Data entry"})
//             res.status(201).render('home', { message: "Success!" });
//         }
//     }catch(e){
//         // res.status(500).json({message:"Internal Server Error"})
//         res.status(500).render('home', { message: `Error ! ${e}` });
//     }
// }
//
// //3:00
// exports.renderThreeInsertData=(req, res)=>{
//     console.log("GET /admin/elevenAmInsertData");
//     res.render("threePmInsertData");
// }
// //3:00
// exports.threeInsertData=async (req, res)=>{
//     try{
//         const {date,twoD,set,value} = req.body;
//         const child = [{
//             time: "3:00",
//             twoD,
//             set,
//             value
//         }]
//         const dateCheck = await nineModel.findOne({date})
//         console.log(`Date ${date}`)
//         console.log(`Date Check ${dateCheck}`)
//         console.log("child data", child);
//         if(dateCheck){
//             await nineModel.updateOne({date},{$push:{child:{$each :child}}});
//             // res.status(200).json({message:"Updated Existing history"});
//             res.status(200).render('home', { message: "Success!" });
//         }else {
//             const data = new nineModel({date,child})
//             await data.save();
//             // res.status(201).json({message:"Created new Data entry"})
//             res.status(201).render('home', { message: "Success!" });
//         }
//     }catch(e){
//         // res.status(500).json({message:"Internal Server Error"})
//         res.status(500).render('home', { message: `Error ! ${e}` });
//     }
// }
//
// //4:00
// exports.renderFourInsertData=(req, res)=>{
//     console.log("GET /admin/elevenAmInsertData");
//     res.render("fourPmInsertData");
// }
// //4:00
// exports.fourInsertData=async (req, res)=>{
//     try{
//         const {date,twoD,set,value} = req.body;
//         const child = [{
//             time: "4:00",
//             twoD,
//             set,
//             value
//         }]
//         const dateCheck = await nineModel.findOne({date})
//         console.log(`Date ${date}`)
//         console.log(`Date Check ${dateCheck}`)
//         console.log("child data", child);
//         if(dateCheck){
//             await nineModel.updateOne({date},{$push:{child:{$each :child}}});
//             // res.status(200).json({message:"Updated Existing history"});
//             res.status(200).render('home', { message: "Success!" });
//         }else {
//             const data = new nineModel({date,child})
//             await data.save();
//             // res.status(201).json({message:"Created new Data entry"})
//             res.status(201).render('home', { message: "Success!" });
//         }
//     }catch(e){
//         // res.status(500).json({message:"Internal Server Error"})
//         res.status(500).render('home', { message: `Error ! ${e}` });
//     }
// }
