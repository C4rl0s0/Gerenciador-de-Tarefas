import { createRoot } from 'react-dom/client'
import Task from './Task.jsx'
import TaskForm from './TaskForm.jsx'
import './index.css'
import { useState, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.important !== b.important) {
      return Number(b.important) - Number(a.important);
    }
    
    return new Date(a.dueDate || 0) - new Date(b.dueDate || 0)
  })

  function addTask(task) {
    setTasks([...tasks, {id: crypto.randomUUID(), ...task, completed:false, important:false }])
  }

  function checkCompleted(id) {
    setTasks(tasks.map(task =>
      task.id == id ? { ...task, completed: !task.completed } : task ));
  }

  function checkImportant(id) {
    setTasks(tasks.map(task =>
      task.id == id ? { ...task, important: !task.important } : task ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAddTask={ addTask } />

      <div className="layout">
        {sortedTasks.map(task => (
          <Task 
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            completed={task.completed}
            important={task.important}
            onCheckCompleted={() => checkCompleted(task.id)}
            onCheckImportant={() => checkImportant(task.id)}
            onCheckDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
