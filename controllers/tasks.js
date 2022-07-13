const asyncMiddleWare = require('../middlewares/async');
const tasks = require('../models/tasks');
const { createCustomError } = require('../errors/customError');


const getAllTasks = asyncMiddleWare(async (req, res) => {
    const allTasks = await tasks.find({});
    res.status(200).json({status: 'success', data: allTasks});
});

const addTask = asyncMiddleWare(async (req, res) => {
    const task = await new tasks(req.body).save();
    res.status(201).json({status: 'success', data: task});
});

const getTask = asyncMiddleWare(async (req, res, next) => {

    const { id: taskID } = req.params;
    const task = await tasks.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(404, `Task not found with id ${taskID}`));
    }
    res.status(200).json({status: 'success', data: task});

});

const updateTask = asyncMiddleWare(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await tasks.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    });
    if (!task) {
        return next(createCustomError(404, `Task not found with id ${taskID}`));
    }
    res.status(200).json({status: 'success', data: task});

});

const deleteTask = asyncMiddleWare(async (req, res, next) => {

    const { id: taskID } = req.params;
    const task = await tasks.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(404, `Task not found with id ${taskID}`));
    }
    res.status(200).json({status: 'success', data: `${task.name} deleted successfully.`});

});


module.exports = { getAllTasks, addTask, getTask, updateTask, deleteTask }