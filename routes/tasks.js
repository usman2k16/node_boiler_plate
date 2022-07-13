const express = require('express');
const router = express.Router();
const { getAllTasks, addTask, getTask, updateTask,deleteTask } = require('../controllers/tasks');


router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;