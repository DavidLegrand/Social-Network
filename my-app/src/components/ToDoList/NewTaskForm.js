import React, { useState, useContext } from 'react'
import ToDo from '../../context/ToDo'

const NewTaskForm = () => {
  const [taskName, setTaskName] = useState('')
  const { toDoList, setToDoList } = useContext(ToDo)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName !== "") {
      const newTask = { id: getMaxId() + 1, title: taskName, completed: false }
      setToDoList([...toDoList, newTask])
    }
    setTaskName("");
  }

  const getMaxId = () => {
    return toDoList.reduce((max, elt) => elt.id > max.id ? elt : max).id
  }

  return (
    <div className="newTask">
      <form onSubmit={handleSubmit}>
        <div><input
          type="text" placeholder="Nouvelle tâche..."
          value={taskName}
          onChange={(e) => { setTaskName(e.target.value) }}
        /></div>
        <div><button type="submit" className="add">+</button></div>
      </form>
    </div>
  )
}

export default NewTaskForm
