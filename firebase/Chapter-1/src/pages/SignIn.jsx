import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from "../firebase"

const auth = getAuth(app)
const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = () => {
       
        signInWithEmailAndPassword(auth, email, password)
            .then(data => console.log("SignIn Successlly",data))
            .catch(error => console.log("Fail to signin" ,error))
        setEmail('')
        setPassword('')
    }
  return (
      <div>
          <div>
      <h2>Sign In</h2>
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button type="submit" onClick={signIn}>
      SignIn
      </button>
    </div>
    </div>
  )
}

export default SignIn