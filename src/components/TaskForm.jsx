import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe el titulo de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea placeholder="Escribe la descripcion de la tarea"
      onChange={(e) => setDescription(e.target.value)}
      value={description}/>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;