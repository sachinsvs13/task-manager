import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./taskEdit.css";

const TaskEdit = () => {
  const { id } = useParams();
  const [task, setTask] = React.useState([]);
  const handleNameChange = (e) => {
    setTask({ ...task, name: e.target.value });
  }

  const handleCompletedChange = (e) => {
    setTask({ ...task, completed: e.target.checked });
  }

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/tasks/${id}`)
      .then((response) => {
        setTask(response.data.task);
      })
      .catch((error) => {
        console.error("There was an error fetching the task!", error.message);
      });
  }, [id]);

  const updateTask = (taskId) => {
    axios
      .patch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        name: task.name,
        completed: task.completed,
      })
      .then(() => {
        // Handle success (e.g., show a success message or redirect)
        console.log("updated successfully");
        
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error.message);
      });
  };


  return (
    <div className="task-edit-container">
      <h1>Edit Task</h1>
      {/* Form for editing task */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTask(task._id);
        }}
        className="edit-form"
      >
        <div className="form-group">
          <label>Task ID:</label>
          <input type="text" value={task._id} readOnly />
        </div>
        <div className="form-group">
          <label>Task Name:</label>
          <input type="text" value={task.name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label>Completed:</label>
          <input type="checkbox" checked={task.completed} onChange={handleCompletedChange} />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};
export default TaskEdit;
