// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ProductContext } from "../provider/ContextProvider";

// const NavBar = () => {
//   const { loggedInUser, setLoggedInUser } = useContext(ProductContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setLoggedInUser(null);
//     navigate("/login");
//   };

//   return (
//     <div>
//       {/* <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       <Link to="/signup">
//         {loggedInUser ? loggedInUser.username : "SignUp"}
//       </Link>
//       <Link to="/login">{loggedInUser ? "Logout" : "Login"}</Link> */}
//       <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       {loggedInUser ? (
//         <>
//           <span>{loggedInUser.username}</span>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <>
//           <Link to="/signup">SignUp</Link>
//           <Link to="/login">Login</Link>
//         </>
//       )}

//     </div>
//   );
// };

// export default NavBar;

//===================================================

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../provider/ContextProvider";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/login");
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:text-yellow-300 hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="btn btn-ghost normal-case text-xl hover:text-yellow-300 hover:scale-105 transition-transform duration-500 ease-in-out"
        >
          Products
        </Link>
      </div>
      <div className="flex-none">
        {loggedInUser ? (
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold  btn btn-outline btn-success">
              <FaRegUser />
              {loggedInUser.username}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              to="/signup"
              className="btn btn-primary hover:bg-yellow-300 hover:border-yellow-300 hover:text-black transition-colors duration-500 ease-in-out"
            >
              SignUp
            </Link>
            <Link
              to="/login"
              className="btn btn-secondary hover:bg-yellow-300 hover:border-yellow-300 hover:text-black transition-colors duration-500 ease-in-out"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
