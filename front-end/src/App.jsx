import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [handleAddTask, setHandleAddTask] = useState([]);

  const addTask = (formData) => {
    const newTask = formData.get("taskInput");
    setHandleAddTask((prevTasks) => [...prevTasks, newTask]);
  };
  
  axios
    .post("http://localhost:3000/api/v1/tasks", {
      name: addTask,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("There was an error!", error.message);
    });

  axios.get("http://localhost:3000/api/v1/tasks")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("There was an error!", error.message);
    });

  return (
    <>
      <header className="task-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        <form className="task-holder" action={addTask}>
          <input
            type="text"
            placeholder="Add a new task..."
            className="task-input"
            name="taskInput"
          />
          <button className="add-task-button">Add Task</button>
        </form>
        <ul className="task-list">
          {handleAddTask.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
