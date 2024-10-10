import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Students from '../pages/Students'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes