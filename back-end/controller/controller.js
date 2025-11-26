const getAllTasks = (req, res) => {
  res.json('Retrieve all tasks');
}

const getSingleTask = (req,res) => {
  res.json({id : req.params.id, message: 'Retrieve a single task'});
}

const createTask = (req,res) => {
  res.json(req.body)
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