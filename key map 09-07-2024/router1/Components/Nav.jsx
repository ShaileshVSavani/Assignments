// import React from 'react'
// import { Link} from 'react-router-dom'



// const Navb = () => {
//   return (
//     <div>
//         <Link to="/">Home</Link>
//         <Link to="/product">Product</Link>
//         <Link to="/login">Login</Link>
//         <Link to="signup">Signup</Link>
       
//     </div>
//   )

// }

// export default Navb

import React from 'react';
import { Link } from 'react-router-dom';

const Navb = () => {
  return (
    <div className="bg-gray-800 p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link className="hover:text-yellow-300" to="/">MyApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/">Home</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/product">Product</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/login">Login</Link>
          <Link className="text-gray-300 hover:text-yellow-300 font-medium" to="/signup">Signup</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navb;


