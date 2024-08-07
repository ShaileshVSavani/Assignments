


import React from 'react';
import { Link } from 'react-router-dom';

const Navb = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link className="hover:text-yellow-300" to="/">Navbar</Link>
        </div>
        <div className="flex space-x-4" >
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/" >Home</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/products">Products</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/login">Login</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/signup">Signup</Link>
        </div>
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="btn btn-wide"
          />
        </div> */}
      </nav>
    </div>
  )
}

export default Navb;


