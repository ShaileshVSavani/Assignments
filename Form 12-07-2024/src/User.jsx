import React from 'react'
import { useState } from 'react'

const User = () => {
    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const handleSubmitSinUp = (e) => {
        e.preventDefault()
        alert(`User registered successfully`)
        setIsLoggedIn(true)
    }
    
    const handleLogin = (e) => {
        e.preventDefault()
        if(userEmail == email && userPassword == password){
           
            alert("Logged in successfully")
          
            setUserEmail("")
            setUserPassword("")
    
        }else{
            alert("Invalid email or password")
        }
        
    }

  return (
    <div>
       {
       !isLoggedIn 
       ?  <form onSubmit={handleSubmitSinUp}> 
            <input type="text" placeholder='Enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <br />
            <input type="email" placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button type='submit'>SignUp</button>
        </form> 
        : <form onSubmit={handleLogin}> 
            <input type="email" placeholder='Enter email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
            <br />
            <input type="password" placeholder='Enter password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
            <br />
            <button type='submit'>Login</button>
    </form> }
    </div>
  )
}

export default User