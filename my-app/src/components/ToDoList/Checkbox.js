import React, { useContext } from 'react'
import ToDo from '../../context/ToDo'

const Checkbox = ({ task }) => {
  const { toDoList, setToDoList } = useContext(ToDo)

  const completed = (task) => {
    const newList = toDoList.map(t => {
      t.completed = t.id === task.id ? !t.completed : t.completed
      return t
    })
    setToDoList(newList)
  }

  return (
    <input type="checkbox" checked={task.completed} onChange={() => { completed(task) }} />
  )
}

export default Checkbox
