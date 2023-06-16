const express = require('express');
const mongoose = require('mongoose');
const myList = require('./models/timelog_model.js');
const router = new express.Router();
//getting all task 
router.get('/userTimeLog', async (req, res) => {
    try {
        const timeLogs = await myList.find({});
        res.status(200).json(timeLogs);
    } catch (error) {
        console.log(error);
    }
});
//getting specific task time log detail
router.get('/userTimeLog/:Task', async (req, res) => {
    try {
        const { Task } = req.params;
        const result = await myList.findOne({ Task });
        if (result) {
            res.status(200).json(result);
        }
        else {
            res.satus(400).json(error);
        }
    }
    catch (error) {
        res.status(500).send('internal server error');
    }
});

//adding time log
router.post('/userTimeLog', async (req, res) => {
    try {
        const { Project, date, startTime, endTime, Description, hours, minutes, Task } = req.body;
        const timeSpend = `${hours}.${minutes}`;
        const date1 = new Date(date);
        const listItem = new myList({
            Project, date: date1, startTime, endTime, Description, timeSpend, Task
        });
        const result = await listItem.save();
        if (result) {
            res.status(201).redirect('/userTimeLog');
        }
    }
    catch (error) {
        res.status(500).send('internal server error');
    }
})
router.delete('/userTimeLog/:Task', async (req, res) => {
    try {
        const { Task } = req.params;
        const result = await myList.deleteOne({ Task });
        if (result) {
            res.status(200).send('successfully deleted');
        }
        else {
            res.satus(400).send("try again");
        }
    }
    catch (error) {
        res.status(500).send('internal server error');
    }
});

module.exports = router;