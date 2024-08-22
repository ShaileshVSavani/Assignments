import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddBlog from '../pages/AddBlog'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'


const AllRouter = () => {
  return (
      <div>
        
          <Routes>
          <Route path = '/' element ={<Home/>}/>
              <Route path = '/addBlog' element ={<AddBlog/>}/>
              <Route path = '/login' element ={<Login/>}/>
              <Route path = '/signup' element ={<SignUp/>}/>
          </Routes>
    </div>
  )
}

export default AllRouter