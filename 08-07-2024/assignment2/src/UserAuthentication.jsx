/*  Create a functional component named "UserAuthentication" to conditionally display a welcome message or login message based on a state variable.
: Develop a functional component named "UserAuthentication.": Implement a state variable, "isLoggedIn," using the useState hook and initialize it to false.: Display a welcome message if isLoggedIn is true and a login message if isLoggedIn is false.: Implement a button that toggles the isLoggedIn state. */

import React, { useState } from 'react'

const UserAuthentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn)
    }
  return (
    
      <div>
        {/* {isLoggedIn? <h1>Welcome!</h1> : <h1>Plsease Login</h1>} */}
        <h1 style={{color: isLoggedIn ? "yellowgreen" : "palegreen"}}>{isLoggedIn? "Welcome!":"Plsease Login"}</h1>
        <button onClick={()=>handleClick()}>Toggle Login</button>
      </div>
  )
}

export default UserAuthentication