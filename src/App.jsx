import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TaskList } from "./components/listTask.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { tasks as data } from "./tasks.js";
import {v4 as uuid} from 'uuid'

function App() {
  const [count, setCount] = useState(0);
  const contador = () => {
    setCount(() => {
      return count + 1;
    });
  };

  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  //Crear tarea
  const createTask = (tarea) => {
    setTask([...task, {
      id: uuid(),
      Title: tarea.text,
      Description: tarea.description,
    }]);
  }

  //Borrar tarea
  const deleteTask = (idDelete) => {
    setTask(task.filter(e => e.id !== idDelete));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card-button">
        <button onClick={contador}>Count is {count}</button>
      </div>
      <TaskForm createTask = {createTask}/>
      <TaskList task={task} deleteTask={deleteTask}></TaskList>
    </>
  );
}

export default App;
