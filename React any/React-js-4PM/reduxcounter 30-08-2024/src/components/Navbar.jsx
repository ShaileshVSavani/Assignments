import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../redux/User/Action";
import '../Css/Nav.css'; // Import the CSS file

const Navbar = () => {
  let data = useSelector((store) => store.user);
  let dispatch = useDispatch();
  let location = useLocation();

  // Determine the active path
  const getLinkClass = (path) => {
    return location.pathname === path ? "link active" : "link";
  };

  return (
    <div id="navbar">
      <Link to="/" className={getLinkClass("/")}>Home</Link>
      <Link to="/addBlog" className={getLinkClass("/addBlog")}>Add Blog</Link>
      {data.isLogin ? (
        <p
          className="link"
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(LogoutUser())}
        >
          Logout
        </p>
      ) : (
        <Link to="/login" className={getLinkClass("/login")}>Login</Link>
      )}
      <Link to="/signup" className={getLinkClass("/signup")}>
        {data.isLogin ? data.user.username : "Signup"}
      </Link>
    </div>
  );
};

export default Navbar;
