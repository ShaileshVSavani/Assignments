

import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Products from '../pages/Products';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import { ProductContext } from '../provider/ContextProvider';
import SingleProduct from '../pages/SingleProduct';

const AllRouters = () => {
    const { loggedInUser } = useContext(ProductContext);

    return (
        <Routes>
            <Route path="/" element={loggedInUser ? <Home /> : <Navigate to="/login" />} />
            <Route path="/products" element={loggedInUser ? <Products /> : <Navigate to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={!loggedInUser ? <Login /> : <Navigate to="/products" />} />
            <Route path="/product/:id" element={<SingleProduct/>} />
            {/* <Route path='*' element={<NotFound/>} /> */}
            <Route path="*" element={<Navigate to="/login" />} />

        </Routes>
    );
};

export default AllRouters;

