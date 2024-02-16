import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="flex flex-col">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
