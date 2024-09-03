// // import React, { useState } from 'react'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { UserLogin } from '../redux/users/Action'
// // import { useNavigate } from 'react-router-dom'

// // const Login = () => {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')

// //   const dispatch = useDispatch()
// //   let navigate = useNavigate()

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     let user = {
// //       email: email,
// //       password: password,
// //     }
// //     dispatch(UserLogin(user))
// //     console.log(user)
// //     setEmail('')
// //     setPassword('')
// //     navigate('/')

// //   }

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Email:
// //           <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
// //         </label>
// //         <label>
// //           Password:
// //           <input type="password" name="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
// //         </label>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     </div>
// //   )
// // }

// // export default Login

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { UserLogin } from '../redux/users/Action';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();
//   let navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let user = {
//       email: email,
//       password: password,
//     };
//     dispatch(UserLogin(user));
//     console.log(user);
//     setEmail('');
//     setPassword('');
//     navigate('/');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email:</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password:</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control mt-4">
//           <input type="submit" value="Submit" className="btn btn-outline w-full" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { UserLogin } from '../redux/users/Action';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error state

//     try {
//       // Fetch users from the API
//       const response = await axios.get(`http://localhost:3000/users`);
//       const users = response.data;

//       console.log("Fetched users:", users); // Log fetched users

//       if (users.length === 0) {
//         setError('No users found. Please sign up first.');
//         return;
//       }

//       // Log entered email and password for debugging
//       console.log("Entered Email:", email);
//       console.log("Entered Password:", password);

//       // Check if a user exists with the given email and password
//       const user = users.find((u) => u.email === email && u.password === password);

//       if (user) {
//         console.log('User found:', user); // Debugging statement
//         dispatch(UserLogin(user)); // Dispatch login action with user data
//         navigate('/'); // Redirect to the homepage after successful login
//         console.log('Navigating to home'); // Debugging statement
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email:</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password:</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control mt-4">
//           <input type="submit" value="Submit" className="btn btn-outline w-full" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { UserLogin } from '../redux/users/Action';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error state

//     try {
//       // Fetch users from the API
//       const response = await axios.get(`http://localhost:3000/users`);
//       const users = response.data;

//       // Check if a user exists with the given email and password
//       const user = users.find((u) => u.email === email && u.password === password);

//       if (user) {
//         console.log('User found:', user); // Debugging statement
//         dispatch(UserLogin(user)); // Dispatch login action with user data
//         navigate('/'); // Redirect to the homepage after successful login
//       } else {
//         setError('Invalid email or password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setError('An error occurred during login. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email:</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password:</span>
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input input-bordered w-full"
//             required
//           />
//         </div>
//         <div className="form-control mt-4">
//           <input type="submit" value="Submit" className="btn btn-outline w-full" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../redux/users/Action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      // Pass the user credentials to the UserLogin action
      const user = { email, password };
      dispatch(UserLogin(user));
      
      // Check if the user has been successfully authenticated
      // Assuming you handle the success/fail state in your redux store
      // Redirect to home on success
      navigate('/');
      
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 space-y-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
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
