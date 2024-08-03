import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Products'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Singlepage from '../pages/SingleProduct'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'



const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<Singlepage/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes