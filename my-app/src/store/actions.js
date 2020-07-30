// action creator
const action = {
  increment: (number = 1) => ({ type: 'INCREMENT', payload: number }),
  decrement: (number = -1) => ({ type: 'DECREMENT', payload: number })
}
export default action