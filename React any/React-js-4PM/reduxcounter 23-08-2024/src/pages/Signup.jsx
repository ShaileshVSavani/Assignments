import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/User/Action";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "../Css/signup.css"; // Import custom CSS

const Signup = () => {
  let dispatch = useDispatch();
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleUser = (e) => {
    e.preventDefault();
    let user = {
      username,
      email,
      password,
    };

    dispatch(createUser(user));
    navigate('/');
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleUser} className="signup-form">
        <h2 className="text-center mb-4">Sign Up</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
