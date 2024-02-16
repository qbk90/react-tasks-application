import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5">
      <h1 className="card-title justify-center m-5">Insertar nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            className="input input-bordered m-5"
            placeholder="Escribe el titulo de la tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
          <textarea
            className="textarea textarea-primary m-5"
            placeholder="Escribe la descripcion de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral m-5">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
