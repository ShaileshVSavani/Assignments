

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




// SignUp.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserSignUp } from '../redux/users/Action';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const user = {
      username,
      email,
      password,
    };

    try {
      await dispatch(UserSignUp(user));
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
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
            <input type="submit" value="Submit" className="btn btn-outline w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
