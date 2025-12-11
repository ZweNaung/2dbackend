// controller/apiController.js

const nineModel = require('../model/dailyResultModel');

const handleInsertDataAPI = async (req, res, time) => {
    try {
        const { date, time,twoD, set, value } = req.body;

        // Validate input
        if (!date || !time || !twoD || !set || !value) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        if (twoD.length !== 2 || set.length !== 6 || value.length !== 7) {
            return res.status(400).json({ message: "Invalid input format" });
        }

        const child = [{ time, twoD, set, value }];
        const dateCheck = await nineModel.findOne({ date });

        if (dateCheck) {
            if (dateCheck.child.length >= 4) {
                return res.status(400).json({ message: "Limit reached: Only 4 entries allowed per day" });
            }
            await nineModel.updateOne({ date }, { $push: { child: { $each: child } } });
        } else {
            const data = new nineModel({ date, child });
            await data.save();
        }

        res.status(200).json({ message: "Success" });

    } catch (error) {
        res.status(500).json({ message: `Error: ${error.message}` });
    }
};

// Export APIs
exports.nineInsertAPI = (req, res) => handleInsertDataAPI(req, res, "9:00");
exports.elevenInsertAPI = (req, res) => handleInsertDataAPI(req, res, "11:00");
exports.twelveInsertAPI = (req, res) => handleInsertDataAPI(req, res, "12:00");
exports.threeInsertAPI = (req, res) => handleInsertDataAPI(req, res, "3:00");
exports.fourInsertAPI = (req, res) => handleInsertDataAPI(req, res, "4:00");
