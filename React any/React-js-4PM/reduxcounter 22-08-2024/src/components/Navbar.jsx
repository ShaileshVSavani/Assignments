import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../redux/User/Action";
const Navbar = () => {
  let data = useSelector((store) => store.user);
  let dispatch = useDispatch();
  return (
    <div id="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/addBlog" className="link">
        AddBlog
      </Link>







      {data.isLogin ? (
        <p
          className="link"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(LogoutUser())}
        >
          Logout
        </p>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}













      <Link to="/signup" className="link">
        {data.isLogin ? data.user.username : "signup"}
      </Link>
    </div>
  );
};

export default Navbar;
