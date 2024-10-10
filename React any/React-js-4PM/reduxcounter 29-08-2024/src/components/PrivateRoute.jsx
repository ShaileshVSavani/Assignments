import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let data = useSelector((store) => store.user);

  if (data.isLogin) {
    return children;
  } else {
    return children;
  }
};

export default PrivateRoute;
