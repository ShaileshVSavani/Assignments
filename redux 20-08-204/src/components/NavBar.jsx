import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <Link to='/' >Home</Link>
          <Link to='/addBlog' >AddBlog</Link>
          <Link to='/login' >Login</Link>
          <Link to='/signup' >SignUp</Link>
        

    </div>
  )
}

export default NavBar