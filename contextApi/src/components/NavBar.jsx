import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/login"}>Login</Link>
          <Link to = {"/signup"}>SingUp</Link>
    </div>
    
  )
}

export default NavBar