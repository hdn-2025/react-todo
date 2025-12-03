import React from 'react'
import ToDoItem from './todoitem'

function ToDoList({ tasks, onDelete, onComplete, onEdit }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onComplete={onComplete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default ToDoList