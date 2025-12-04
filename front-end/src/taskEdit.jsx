import React from "react";
import axios from "axios";

const TaskEdit = () => {

    
  const updateTask = (id) => {
    axios
      .patch(`http://localhost:3000/api/v1/tasks/${id}`, {
        // update data here
      })
      .then(() => {
        // handle success
      })
      .catch((error) => {
        console.error("There was an error updating the task!", error.message);
      });
  };

  return (
    <div>
      <h2>Edit Task</h2>
      {/* Form for editing task */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTask(/* pass task id here */);
        }}
      >
        <label>Task ID:</label>
        <label>Task Name:</label>
        <label>
          Completed :
          <input
            type="checkbox"
            name="completed" /* checked and onChange handler here */
          />
        </label>
        <input type="text" name="name" /* value and onChange handler here */ />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};
export default TaskEdit;
