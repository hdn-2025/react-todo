import React, { useState } from 'react'

function ToDoItem({ task, onDelete, onComplete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(task.text)

  const saveEdit = () => {
    onEdit(task.id, editedText)
    setIsEditing(false)
  }

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => onComplete(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  )
}

export default ToDoItem