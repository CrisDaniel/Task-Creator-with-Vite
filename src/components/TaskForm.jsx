/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const { createTask } = props;

  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    createTask({
      text,
      description,
    });
    setDescription("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese tarea"
        onChange={(evento) => {
          setText(evento.target.value);
        }}
        value={text}
        autoFocus
      />
      <textarea
        placeholder="Ingrese descripcion"
        cols="30"
        rows="5"
        onChange={(evento) => {
          setDescription(evento.target.value);
        }}
        value={description}
      ></textarea>
      <button>Añadir</button>
    </form>
  );
};

export default TaskForm;
