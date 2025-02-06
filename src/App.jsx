import { useEffect, useState } from "react";
import AddTasks from "./componentes/AddTasks";
import Tasks from "./componentes/Tasks";
import { v4 } from "uuid";
import { json } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
    setTasks([...tasks, newTasks]);
  }

  function onDeleteTaskClick(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setTasks(newTasks);
  }

  function onAddTasksSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <h1 className="font-bold text-slate-100 text-3xl">
          Gerenciador de Tarefas
        </h1>

        <AddTasks onAddTasksSubmit={onAddTasksSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
