import React, { useContext, useState } from "react";
import { Dataprovider } from "../Provider/contextProvider";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
const {addData}=useContext(Dataprovider)
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
    };

   addData(user);
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
