import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ShowTasks from "./ShowTask";

function App() {
  const [handleAddTask, setHandleAddTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addTask = (formData) => {
    const newTask = formData.get("taskInput");
    setHandleAddTask((prevTasks) => [...prevTasks, newTask]);
  };

  // axios
  //   .post("http://localhost:3000/api/v1/tasks", {
  //     name: addTask,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("There was an error!", error.message);
  //   });
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/tasks")
      .then((response) => {
        setTasks(response.data.tasks);
        console.log(response.data.tasks);
      })
      .catch((error) => {
        console.error("There was an error!", error.message);
      });
  }, []);
  tasks.map((task) => console.log(task.name));

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
          {tasks && <pre>{JSON.stringify(tasks, null, 2)}</pre>}
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
