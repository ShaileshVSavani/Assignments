

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { UserSignUp } from '../redux/users/Action';
// import { useNavigate } from 'react-router-dom';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   let dispatch = useDispatch();
//   let navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let user = {
//       username,
//       email,
//       password,
//     };
//     dispatch(UserSignUp(user));
//     console.log(user);
//     setUsername('');
//     setEmail('');
//     setPassword('');
//     navigate('/login');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-200">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Username:</span>
//             </label>
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Email:</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Password:</span>
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="input input-bordered w-full"
//               required
//             />
//           </div>
//           <div className="form-control mt-4">
//             <input type="submit" value="Submit" className="btn btn-outline w-full" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSignUp } from '../redux/users/Action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying error messages
  const [loading, setLoading] = useState(false); // For showing loading state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUserExists = async (email, username) => {
    try {
      const emailCheck = await axios.get(`http://localhost:3000/users?email=${email}`);
      const usernameCheck = await axios.get(`http://localhost:3000/users?username=${username}`);
      return emailCheck.data.length > 0 || usernameCheck.data.length > 0;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validationMessage = validateForm();
    if (validationMessage) {
      setError(validationMessage);
      setLoading(false);
      return;
    }

    const userExists = await checkUserExists(email, username);
    if (userExists) {
      setError('User already exists with the provided email or username.');
      setLoading(false);
      setUsername('');
      setEmail('');
      setPassword('');
      return;
    }

    const user = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/users', user);
      console.log("signup successful", user);
      dispatch(UserSignUp(response.data)); // Dispatch action with the new user data
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login'); // Redirect after successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Failed to sign up. Please try again.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!username || !email || !password) {
      return 'All fields are required.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email address is invalid.';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username:</span>
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
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
            <input
              type="submit"
              value={loading ? 'Submitting...' : 'Submit'}
              className="btn btn-outline w-full"
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
