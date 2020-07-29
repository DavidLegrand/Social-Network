import React, { useContext, useCallback } from 'react'
import Task from './Task'
import ListItemView from './ListItemView'
import ToDo from '../../context/ToDo'
import Filter from '../../context/Filter'

const List = () => {

  const { toDoList, setToDoList } = useContext(ToDo)
  const { filter } = useContext(Filter)

  const handleRemove = useCallback((task) => {
    setToDoList(toDoList.filter(t => t !== task))
  }, [toDoList, setToDoList])


  return (
    <ul>
      <ListItemView item1="Terminée" item2="Tâche" item3="Supprimer" />
      {toDoList
        .filter(task => filter === "all" ? true : task.completed === (filter === "true"))
        .map(task =>
          <Task key={task.id} task={task} remove={handleRemove} />
        )
      }
    </ul>
  )
}

export default List
