import { createRoot } from 'react-dom/client'
import Task from './Task.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <h1>Gerenciador de Tarefas</h1>
    <button>Adicionar tarefa</button>
    <div className="layout">
      <Task title="Fazer projeto"/>
      <Task title="Descansar"/>
    </div>
  </>
)
