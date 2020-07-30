import React from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from '../../store'

function HelloWorld() {

  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  )
}

export default HelloWorld;