import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  console.log(props);
  const navigate = useNavigate();

  function onSeeDetailesClick(tasks) {
    const query = new URLSearchParams();
    query.set("title", tasks.title);
    query.set("description", tasks.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 bg-slate-200 rounded-md shadow p-6">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(tasks.id)}
            className={`bg-slate-400 w-full text-left p-2 rounded-md text-white ${
              tasks.isCompleted ? "line-through" : ""
            }`}
          >
            {tasks.title}
          </button>

          <button
            onClick={() => onSeeDetailesClick(tasks)}
            className="bg-slate-400 p-2 rounded-md text-white "
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(tasks.id)}
            className="bg-slate-400 p-2 rounded-md text-white "
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
