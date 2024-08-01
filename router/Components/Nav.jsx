import React from 'react'
import { Link} from 'react-router-dom'



const Navb = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/login">Login</Link>
        <Link to="signup">Signup</Link>
       
    </div>
  )

}

export default Navb