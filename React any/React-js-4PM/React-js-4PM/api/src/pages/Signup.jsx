import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let nav = useNavigate();

  const signup = () => {
    nav("/");
  };

  return (
    <div>
      Signup
      <button onClick={signup}>click</button>
    </div>
  );
};

export default Signup;
