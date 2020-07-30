// state initial
const initialState = { counter: 0 }

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}

export { reducer }