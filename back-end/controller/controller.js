const Task = require('../models/schema.js');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getSingleTask = (req,res) => {
  res.json({id : req.params.id, message: 'Retrieve a single task'});
}

const createTask = async (req,res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateTask = (req,res) => {
  res.send('Update an existing task');
}

const deleteTask = (req,res) => {
  res.send('Delete a task');
}


module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
};