const mongoose = require('mongoose');
const timeLogSchema = new mongoose.Schema({
    Project: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true,
        unique: true
    },
    endTime: {
        type: String,
        required: true,
        unique: true
    },
    timeSpend: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    list: {
        type: String,
        default: "mylist"
    },
    Task: {
        type: String,
        required: true,
        unique: true
    }

});
const myList = new mongoose.model("myList", timeLogSchema);
module.exports = myList;