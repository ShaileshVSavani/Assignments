import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Singlepage from '../pages/SingleProduct'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import SignUp from '../pages/SignUp'




const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product/:id" element={<Singlepage/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes