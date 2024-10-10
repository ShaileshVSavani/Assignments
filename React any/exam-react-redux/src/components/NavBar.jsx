import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    // <div>
    //   <Link to='/' >Home</Link>
    //   <Link to='/students' >Students</Link>
    // </div>
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
        </div>
        <div className="text-white text-lg font-semibold">
          <Link to="/students" className="hover:text-gray-400">
            Students
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar