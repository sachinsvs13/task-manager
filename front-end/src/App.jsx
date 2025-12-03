import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function App() {
  const [handleAddTask, setHandleAddTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addTask = (formData) => {
    const newTask = formData.get("taskInput");
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const createTask = () => {
    axios
      .post("http://localhost:3000/api/v1/tasks", {
        name: addTask,
      })
      .then((response) => {
        console.log("Task created:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the task!", error.message);
      });
  };

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
  tasks.map((task) => console.log(task._id));

  const DeleteTask = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/tasks/${id}`)
      .then((response) => {
        console.log("Task deleted:", response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error.message);
      });
  };

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
          <button className="add-task-button" onClick={createTask}>
            Add Task
          </button>
        </form>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task.name}
              {task._id}
              <button
                className="btn"
                onClick={DeleteTask("693052e8376750cb904482a0")}
              >
                <MdOutlineDelete />
              </button>
              <button className="btn">
                <MdEdit />
              </button>
            </li>
          ))}
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
