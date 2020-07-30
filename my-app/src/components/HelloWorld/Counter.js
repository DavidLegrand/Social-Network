import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import action from '../../store/actions'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(action.increment())
  }
  const handleDecrement = () => {
    dispatch(action.decrement())
  }

  return (<>
    <span>{counter}</span>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={() => {dispatch(action.decrement(10))}}>+10</button>
    <button onClick={() => {dispatch(action.decrement(100))}}>+100</button>
  </>)
}

export default Counter
