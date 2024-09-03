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






import axios from 'axios';
import { LOGIN, LOGOUT, SIGNUP } from './ActionType';

const API_URL = 'http://localhost:3000/users'; 

export const UserSignUp = (user) => async (dispatch) => {
    try {
        // Check if the user already exists
        const response = await axios.get(API_URL, {
            params: { email: user.email }
        });

        if (response.data.length > 0) {
            // User already exists
            console.log("User already exists", response.data);
            alert("User already exists")
            dispatch({
                type: SIGNUP,
                payload: { error: "User already exists" }
            });
        } else {
            // Create new user
            const createUser = await axios.post(API_URL, user);
            console.log("User created", createUser);
            dispatch({
                type: SIGNUP,
                payload: createUser.data
            });
        }
    } catch (error) {
        console.log('Error during signup:', error);
    }
};

export const UserLogin = (user) => async (dispatch) => {
    try {
        // Find user by email and password
        const response = await axios.get(API_URL, {
            params: { email: user.email, password: user.password }
        });
        const users = response.data; 

        if (users.length > 0) {
            dispatch({
                type: LOGIN,
                payload: users[0]  
            });
        } else {
            dispatch({
                type: LOGIN,
                payload: { error: "Invalid email or password" }
            });
        }
    } catch (error) {
        console.log('Error during login:', error);
    }
};

export const UserLogout = () => ({
    type: LOGOUT
});







