

// import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

// const initialState = {
//     users: [], 
//     user: {}, 
//     isLoggedIn: false,
//     loginError: null, 
//     signupError: null, 
// };

// export const userReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case SIGNUP: {
//             const userExists = state.users.some(user => user.email === payload.email);

//             if (userExists) {
//                 return {
//                     ...state,
//                     signupError: "User already exists",
//                     loginError: null, 
//                 };
//             }

//             return {
//                 ...state,
//                 users: [ ...state.users, payload ],
//                 user: payload,
//                 isLoggedIn: true,
//                 signupError: null, 
//                 loginError: null, 
//             };
//         }

//         case LOGIN: {
//             const userCredentials = state.users.find(
//                 user => user.email === payload.email && user.password === payload.password
//             );

//             if (userCredentials) {
//                 return {
//                     ...state,
//                     user: userCredentials,
//                     isLoggedIn: true,
//                     loginError: null, 
//                 };
//             } else {
//                 return {
//                     ...state,
//                     loginError: "Invalid email or password",
//                     signupError: null, 
//                 };
//             }
//         }

//         case LOGOUT: {
//             return {
//                 ...state,
//                 user: {}, 
//                 isLoggedIn: false,
//                 loginError: null, 
//                 signupError: null, 
//             };
//         }

//         default:
//             return state;
//     }
// };


// userReducer.js
import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

const initialState = {
    users: [], 
    user: {}, 
    isLoggedIn: false,
    loginError: null, 
    signupError: null, 
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP: {
            return {
                ...state,
                user: payload,
                isLoggedIn: true,
                signupError: null, 
                loginError: null, 
            };
        }

        case LOGIN: {
            if (payload) {
                return {
                    ...state,
                    user: payload,
                    isLoggedIn: true,
                    loginError: null, 
                };
            } else {
                return {
                    ...state,
                    loginError: "Invalid email or password",
                    signupError: null, 
                };
            }
        }

        case LOGOUT: {
            return {
                ...state,
                user: {}, 
                isLoggedIn: false,
                loginError: null, 
                signupError: null, 
            };
        }

        default:
            return state;
    }
};
