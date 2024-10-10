import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, LogoutUser } from "../redux/User/Action";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let dispatch = useDispatch();

  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setemail] = useState("");

  let nav=useNavigate()
  const handleUser = (e) => {
    e.preventDefault();
    let user = {
      username,
      email,
      password,
    };

    dispatch(createUser(user));
    nav('/')

  };

  return (
    <div>
      <form onSubmit={handleUser}>
        <input
          type="text"
          placeholder="enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
