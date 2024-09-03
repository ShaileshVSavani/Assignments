


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
//     setError('');

//     try {
//       const user = { email, password };
//       dispatch(UserLogin(user));
     
//       navigate('/');
      
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



// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../redux/users/Action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = { email, password };
      await dispatch(UserLogin(user));
      
      // Assuming userReducer will handle setting the loginError state
      // Check for loginError state in Redux store
      if (!error) {
        navigate('/');
      }
      
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
