import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddBlog from '../pages/AddBlog'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import PrivateRoute from '../components/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path="/addBlog" element={<PrivateRoute><AddBlog/></PrivateRoute> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes