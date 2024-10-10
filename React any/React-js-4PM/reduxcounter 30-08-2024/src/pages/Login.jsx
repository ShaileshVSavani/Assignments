import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/User/Action';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Css/Login.css'; // Import custom CSS

const Login = () => {
  let dispatch = useDispatch();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleUser = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };

    dispatch(LoginUser(user));
    navigate('/');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleUser} className="login-form">
        <h2 className="text-center mb-4">Login</h2>
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
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup" className="link">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
