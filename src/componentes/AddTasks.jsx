import { useState } from "react";

function AddTasks({ onAddTasksSubmit }) {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  return (
    <div className="space-y-4 bg-slate-200 rounded-md shadow p-6 flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa "
        className="border-slate-300 outline-slate-400 px-4 py-2"
        value={title}
        onChange={(Event) => setTitle(Event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Descrição da tarefa "
        className="border-slate-300 outline-slate-400 px-4 py-2"
        value={Description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          // Verificar se os campos foram preenchidos
          if (!title.trim() || !Description.trim()) {
            return alert("Preencha o título e a descrição!");
          }

          onAddTasksSubmit(title, Description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
