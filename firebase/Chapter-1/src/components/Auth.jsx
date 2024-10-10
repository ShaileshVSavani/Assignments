import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

export const Auth = () => {
    const signup = () => { 
        createUserWithEmailAndPassword(auth, "abc@gmail.com", "Abc@123").then((data) => console.log(data))
    }
  return (
      <div>
          <h2>User Authentication</h2>
          <button onClick={signup}>Sign Up</button>
  
    </div>
  )
}
