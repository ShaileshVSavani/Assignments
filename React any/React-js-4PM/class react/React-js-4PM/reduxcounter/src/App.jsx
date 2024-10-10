import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./redux/Action";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  // let data = useSelector((store) => store.user);
  // console.log(data);

  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
