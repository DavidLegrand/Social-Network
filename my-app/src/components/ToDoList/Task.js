import React, { useState, useCallback } from 'react'
import ListItemView from './ListItemView'
import Confirm from './Confirm'
import Checkbox from './Checkbox'

const Task = ({ task, remove }) => {
  console.log("task rendered : ", task.id)
  const [confirm, setConfirm] = useState(false)
  const toggleConfirm = useCallback(() => {
    setConfirm(!confirm);
  }, [confirm, setConfirm])

  return (
    <>
      <ListItemView
        item1={<Checkbox task={task} />}
        item2={<span className={task.completed ? "completed" : ""}>{task.title}</span>}
        item3={<button onClick={() => toggleConfirm()} className="delete">x</button>}
      />
      {confirm && (<Confirm remove={remove} task={task} toggle={toggleConfirm} />)}
    </>
  )
}

const areEqual = (prevProps, nextProps) => {
  if (prevProps.task === nextProps.task)
    return true
  else return false
}

export default React.memo(Task, areEqual)
