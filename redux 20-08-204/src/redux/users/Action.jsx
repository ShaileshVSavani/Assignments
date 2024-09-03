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




// actions.js
import axios from 'axios';
import { LOGIN, LOGOUT, SIGNUP } from './ActionType';

const API_URL = 'http://localhost:3000/users'; // Your json-server API URL

export const UserSignUp = (user) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, user);
        dispatch({
            type: SIGNUP,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during signup:', error);
        // Handle error appropriately
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
        // Handle error appropriately
    }
};

export const UserLogout = () => ({
    type: LOGOUT
});


