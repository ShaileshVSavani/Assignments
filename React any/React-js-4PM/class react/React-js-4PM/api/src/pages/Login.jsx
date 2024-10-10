import React from "react";

const Login = () => {
  let isLogin = true;
  return <div>{isLogin ? "Logout" : "Login"}</div>;
};

export default Login;
