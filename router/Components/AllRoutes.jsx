import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Home/> }/>
           <Route path="/product" element={<Product/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes