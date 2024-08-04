
import { decrease, increse } from './actions'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const myState = useSelector((state) => state.inc_dec)
  const dispatch = useDispatch();
  return (
    <>
      <h2>Welcome to react-redux</h2>
      <h3>{myState}</h3>
      <div className='mt-3'>
      <button className='btn btn-outline-warning me-2' onClick={() =>dispatch(increse())}>Increment</button>
      <button className='btn btn-outline-success' onClick={() =>dispatch(decrease())}>Decrement</button>
      </div> 
    </>
  )
}

export default App
