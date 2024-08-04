
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './reduxToolKit/counterSlice'

function App() {
const myState = useSelector((state) => state.counter.count)
  const dispatch = useDispatch();
  return (
    <>
      <h2>React Redux ToolKit</h2>
      <h3>{myState }</h3>
      <button  className='btn btn-outline-success' onClick={() => dispatch(increment())}>Increment</button>
      <button  className='btn btn-outline-danger mx-2' onClick={() => dispatch(decrement())}>Decrement</button>
      <button  className='btn btn-outline-warning' onClick={() =>dispatch(reset())}>Reset</button>

      
    </>
  )
}

export default App
