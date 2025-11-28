const express = require('express');
const { getAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require('../controller/controller');

const router = express.Router();

// All Tasks
router.get('/',getAllTasks);

// Single Task
router.get('/:id',getSingleTask);

// Create Task
router.post('/', createTask);

// Update Task
router.patch('/:id', updateTask);

// Delete Task
router.delete('/:id', deleteTask);

module.exports = router;