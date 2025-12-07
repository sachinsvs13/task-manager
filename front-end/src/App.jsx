import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import TaskEdit from "./taskEdit";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const showTasks = () => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/v1/tasks")
      .then((response) => {
        setTasks(response.data.tasks);
      })
      .catch((error) => {
        console.error("There was an error!", error.message);
      });
    setLoading(false);
  };
  useEffect(() => {
    showTasks();
  }, []);

  const handleCreateTask = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/tasks", {
        name: taskName,
      })
      .then(() => {
        setTaskName("");
        showTasks();
        setAlert({
          show: true,
          msg: "Success, task added!",
          type: "success",
        });
      })
      .catch((error) => {
        console.error("There was an error creating the task!", error.message);
        setAlert({
          show: true,
          msg: "There was an error, please try later...",
          type: "error",
        });
      });
    setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
  };

  const DeleteTask = (id) => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/api/v1/tasks/${id}`)
      .then(() => {
        showTasks();
      })
      .catch((error) => {
        console.error("There was an error deleting the task!", error.message);
      });
    setLoading(false);
  };
  const editTask = (id) => {
    console.log("Edit task with id:", id);
  };

  
  return (
    <>
      <header className="task-header">
        <h1>Task Manager</h1>
      </header>
      <main>
        {loading && <p className="loading">Loading...</p>}

        <form className="task-holder" onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            className="task-input"
            name="taskInput"
          />
          <button className="add-task-button">Add Task</button>
        </form>
        {alert.show && (
          <p
          className={`alert ${
            alert.type === "success" ? "text-success" : ""
            }`}
            >
            {alert.msg}
          </p>
        )}
        {!loading && tasks.length < 1 && (
          <h5 className="empty-list">No tasks in your list</h5>
        )}
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {/* { have to add inline to the true statement
                task.completed ? task.name : task.name
                } */}
              {task.name}
              <button className="btn" onClick={() => DeleteTask(task._id)}>
                <MdOutlineDelete />
              </button>
              <button className="btn" onClick={() => editTask(task._id)}>
                <Link to={`/tasks/${task._id}`}>
                  <MdEdit />
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
