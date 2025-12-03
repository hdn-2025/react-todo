import React, { useState } from 'react'
import Header from './components/header'
import ToDoList from './components/todolist'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() === "") return
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    }
    setTasks([...tasks, task])
    setNewTask("")
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  return (
    <div className="app-container">
      <Header />
      <div className="input-section">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleComplete}
        onEdit={editTask}
      />
    </div>
  )
}

export default App