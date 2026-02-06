import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (title && dueDate) {
      onAddTask({ title, dueDate });
      setTitle("");
      setDueDate("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>  
        <div className="info">
            <input type="text" placeholder="Nome da tarefa" value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input type="date" value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
        </div>
        <button type="submit">Adicionar tarefa</button>
    </form>
  )
}

export default TaskForm;