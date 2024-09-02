// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import AddBlog from "../pages/AddBlog";
// import Login from "../pages/Login";
// import SignUp from "../pages/SignUp";

// const AllRouter = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/addBlog" element={<AddBlog />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
// };

// export default AllRouter;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "../components/PrivateRoute";
import AddBlog from "../pages/AddBlog";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/addBlog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AllRouter;
