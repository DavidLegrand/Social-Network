import React, { useState } from 'react'
import useFetch from '../../hooks'
import Title from '../Title'
import NewTaskForm from './NewTaskForm'
import SelectFilter from './SelectFilter'
import List from './List'
import ToDo from '../../context/ToDo'
import Filter from '../../context/Filter'
import { useParams } from 'react-router-dom'

function ToDoList() {
  const [toDoList, setToDoList] = useState([])
  const [filter, setFilter] = useState("all")
  const { userId } = useParams()

  const endpoint = "https://jsonplaceholder.typicode.com/todos?userId=" + userId
  useFetch(endpoint, setToDoList);


  return (
    <>
      <Title>To Do List of user #{userId}</Title>
      <ToDo.Provider value={{ toDoList, setToDoList }}>
        <Filter.Provider value={{ filter, setFilter }}>
          <List />
          <SelectFilter />
        </Filter.Provider>
        <NewTaskForm />
      </ToDo.Provider>
    </>);
}

export default React.memo(ToDoList)
