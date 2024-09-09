import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Reset, Subtract } from '../counterSlice'

const Counter = () => {
  // let data = useSelector(state => state)
  let data = useSelector(state => state.counter)
  let dispatch = useDispatch()
  return (
    <div>
      {/* <h1>Counter :{data.counter.count}</h1> */}
      <h1>Counter :{data.count}</h1>
      <button onClick={() => dispatch(Add(10))}>Add</button>
      <button onClick={() => dispatch(Subtract(5))}>Substract</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  )
}

export default Counter