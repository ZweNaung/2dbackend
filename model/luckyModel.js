const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const luckySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    }
});

const Lucky = mongoose.model("Lucky", luckySchema);
module.exports = Lucky;