// import { LOGIN, LOGOUT, SIGNUP } from "./ActionType"

// export const UserSignUp = (user) => {
//     return {
//         type: SIGNUP,
//         payload: user
//     }
// }

// export const UserLogin = (user) => {
//     return {
//         type: LOGIN,
//         payload: user
//     }
// }

// export const UserLogout = () => {
//     return {
//         type : LOGOUT
//     }
// }



// import axios from 'axios';
// import { LOGIN, LOGOUT, SIGNUP, USER_LOGIN_SUCCESS } from './ActionType';


// // Base URL for your API
// const BASE_URL = 'http://localhost:3000';  // Update with your API URL

// export const UserSignUp = (user) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.post(`${BASE_URL}/users`, user);
//             dispatch({
//                 type: SIGNUP,
//                 payload: response.data
//             });
//         } catch (error) {
//             console.error('Error signing up:', error);
//             // Handle error if needed
//         }
//     };
// };

// // export const UserLogin = (user) => {
// //     return async (dispatch) => {
// //         try {
// //             const response = await axios.post(`${BASE_URL}/login`, user); // Update endpoint if needed
// //             dispatch({
// //                 type: LOGIN,
// //                 payload: response.data
// //             });
// //         } catch (error) {
// //             console.error('Error logging in:', error);
// //             // Handle error if needed
// //         }
// //     };
// // };




// // Assuming UserLogin is an action to authenticate a user
// export const UserLogin = (user) => async (dispatch) => {
//   try {
//     // Instead of making a POST request to a non-existent /login endpoint,
//     // we're fetching the users and validating locally.
//     const response = await axios.get('http://localhost:3000/users');
//     const users = response.data;

//     const authenticatedUser = users.find(u => u.email === user.email && u.password === user.password);

//     if (authenticatedUser) {
//       // If a user is found, dispatch an action to log the user in
//       dispatch({
//         type: LOGIN,
//         payload: authenticatedUser
//       });
//     } else {
//       // Handle the case where the user is not found
//       throw new Error('Invalid email or password');
//     }
//   } catch (error) {
//     console.error('Error logging in:', error);
//     dispatch({
//       type: 'USER_LOGIN_FAIL',
//       payload: error.message
//     });
//   }
// };


// export const UserLogout = () => {
//     return async (dispatch) => {
//         try {
//             // If there's an endpoint for logout, you can call it here
//             // await axios.post(`${BASE_URL}/logout`);
//             dispatch({
//                 type: LOGOUT
//             });
//         } catch (error) {
//             console.error('Error logging out:', error);
//             // Handle error if needed
//         }
//     };
// };



// Action.js
import axios from 'axios';
import { LOGIN, LOGOUT, SIGNUP } from './ActionType';

const API_URL = 'http://localhost:3000/users'; // Adjust to your API URL

export const UserSignUp = (user) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, user);
        dispatch({
            type: SIGNUP,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during signup:', error);
        // Handle errors appropriately
    }
};

export const UserLogin = (user) => async (dispatch) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                email: user.email,
                password: user.password
            }
        });
        const users = response.data;
        if (users.length > 0) {
            dispatch({
                type: LOGIN,
                payload: users[0] // Assuming the first user in the array is the valid user
            });
        } else {
            dispatch({
                type: LOGIN,
                payload: null
            });
        }
    } catch (error) {
        console.error('Error during login:', error);
        // Handle errors appropriately
    }
};

export const UserLogout = () => ({
    type: LOGOUT
});
