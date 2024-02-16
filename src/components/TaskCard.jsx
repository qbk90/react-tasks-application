import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext)

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5" key={task.id}>
      <h1 className="card-title mx-5 mt-5">{task.title}</h1>
      <p className="mx-5">{task.description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline btn-secondary btn-sm m-5" onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </div>
  );
}

export default TaskCard;
