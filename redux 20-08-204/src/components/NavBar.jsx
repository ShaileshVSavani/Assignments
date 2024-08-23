
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserLogout } from "../redux/users/Action";

const NavBar = () => {
  let dispatch = useDispatch();
  let data = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(UserLogout());
    navigate("/login");
  };

  return (
    <div className="navbar bg-gray-600 shadow-md flex  justify-evenly text-white">
      <Link to="/" className="text-2xl">
        Home
      </Link>
      <Link to="/addBlog" className=" text-2xl">
        Add Blog
      </Link>
      {data.isLoggedIn ? (
        <p
          className=" text-2xl cursor-pointer"
          onClick={() => handleLogOut()}
        >
          LogOut
        </p>
      ) : (
        <Link to="/login" className=" text-2xl">
          Login
        </Link>
      )}
      <Link to="/signup" className=" text-2xl">
        {data.isLoggedIn ? data.user.username : "Sign Up"}
      </Link>
    </div>
  );
};

export default NavBar;
