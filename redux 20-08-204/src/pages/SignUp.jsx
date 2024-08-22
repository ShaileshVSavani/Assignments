import React from 'react'
import { useDispatch } from 'react-redux'
import { UserLogout, UserSignUp } from '../redux/users/Action'

const SignUp = () => {
  let dispatch = useDispatch()
 
  
  const handleUser = () => {
    // call API to sign up user
    // dispatch action with user details

    let user = {
      username: 'abc123',
      email: 'abc123@example.com',
      password: 'abc123',
      
    }
    dispatch(UserSignUp(user))
  }
  
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={handleUser}>Signup</button>
      <button onClick={() => dispatch(UserLogout())}>Logout</button>
      
    </div>
  )
}

export default SignUp 