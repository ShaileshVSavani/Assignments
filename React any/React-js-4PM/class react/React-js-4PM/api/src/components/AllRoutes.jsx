import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Error from "../pages/Error";
import SingleProduct from "../pages/SingleProduct";

const AllRoutes = () => {
  let isLogin = true;
  let role = "admin";

  return (
    <div>
      <Routes>
        <Route path="/" element={isLogin ? <Home /> : <Login />} />
        <Route
          path="/products"
          element={role == "admin" ? <Product /> : <h1>you are not admin</h1>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
