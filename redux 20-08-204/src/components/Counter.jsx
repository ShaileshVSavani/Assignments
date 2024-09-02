import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from "../redux/counter/Action";
// import { decrease, increase, reset } from './redux/counter/Action'

const Counter = () => {
  let data = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <h1>Count : {data.count}</h1>
      <button onClick={() => dispatch(increase())}>Increment</button>
      <button onClick={() => dispatch(decrease())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
