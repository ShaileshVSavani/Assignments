import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/User/Action';

const Login = () => {
  let dispatch = useDispatch();
  let [password, setPassword] = useState("");
  let [email, setemail] = useState("");

  let nav=useNavigate()
  const handleUser = (e) => {
    e.preventDefault();
    let user = {
  
      email,
      password,
    };

    dispatch(LoginUser(user));
    nav('/')

  };

  return (
    <div>
      <form onSubmit={handleUser}>
      
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
}

export default Login