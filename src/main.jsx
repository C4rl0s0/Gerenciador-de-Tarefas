import { createRoot } from 'react-dom/client'
import Task from './Task.jsx'
import TaskForm from './TaskForm.jsx'
import './index.css'
import { use, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { ...task, completed:false, important:false }])
  }

  function checkCompleted(index) {
    setTasks(tasks.map((task, i) =>
      i == index ? { ...task, completed: !task.completed } : task ));
  }

  function checkImportant(index) {
    setTasks(tasks.map((task, i) =>
      i == index ? { ...task, important: !task.important } : task ));
  }

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAddTask={ addTask } />

      <div className="layout">
        {tasks.map((task, index) => (
          <Task 
            key={index}
            title={task.title}
            dueDate={task.dueDate}
            completed={task.completed}
            important={task.important}
            onCheckCompleted={() => checkCompleted(index)}
            onCheckImportant={() => checkImportant(index)}
          />
        ))}
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
