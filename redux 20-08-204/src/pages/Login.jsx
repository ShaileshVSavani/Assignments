// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { UserLogin } from '../redux/users/Action'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const dispatch = useDispatch()
//   let navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let user = {
//       email: email,
//       password: password,
//     }
//     dispatch(UserLogin(user))
//     console.log(user)
//     setEmail('')
//     setPassword('')
//     navigate('/')

//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../redux/users/Action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: email,
      password: password,
    };
    dispatch(UserLogin(user));
    console.log(user);
    setEmail('');
    setPassword('');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password:</span>
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input type="submit" value="Submit" className="btn btn-outline w-full" />
        </div>
      </form>
    </div>
  );
};

export default Login;
