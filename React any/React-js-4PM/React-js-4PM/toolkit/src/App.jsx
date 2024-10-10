import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reset } from "./redux/countSlice";
import User from "./User";

const App = () => {
  let data = useSelector((store) => store.counter);
  let dispatch = useDispatch();

  return (
    <div>
    <User/>
    </div>
  );
};

export default App;
