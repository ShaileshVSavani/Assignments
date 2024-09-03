// import { LOGIN, LOGOUT, SIGNUP } from "./ActionType"

// const initialState = {
//     users: [],
//     user: {},
//     isLoggedIn: false
// }

// export const userReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case SIGNUP:
//             return { ...state, users: [ ...state.users, payload ], /* isLoggedIn: true */ user : payload}
//         case LOGOUT:
//             return { ...state, users: {}, isLoggedIn: false }
//         case LOGIN: {
//             let userCredentials = state.users.find(ele => ele.email === payload.email && ele.password === payload.password)
//             if (userCredentials) {
//                 return { ...state, user: userCredentials, isLoggedIn: true }
                
//             }
//             else {
//                 return state
//             }
//         }
      
//         default:
//             return state

//     }
// }



// import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

// const initialState = {
//     users: [],
//     user: {},
//     isLoggedIn: false
// };

// export const userReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case SIGNUP:
//             return {
//                 ...state,
//                 users: [ ...state.users, payload ],
//                 user: payload,
//                 isLoggedIn: true // Assuming signup also logs in the user
//             };
//         case LOGOUT:
//             return {
//                 ...state,
//                 user: {},
//                 isLoggedIn: false
//             };
//         case LOGIN: {
//             let userCredentials = state.users.find(
//                 ele => ele.email === payload.email && ele.password === payload.password
//             );
//             if (userCredentials) {
//                 return {
//                     ...state,
//                     user: userCredentials,
//                     isLoggedIn: true
//                 };
//             } else {
//                 return state;
//             }
//         }
//         default:
//             return state;
//     }
// };




// import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

// const initialState = {
//     users: [], // Store registered users
//     user: {}, // Store the currently logged-in user
//     isLoggedIn: false, // Track login status
//     loginError: null, // Store any login errors
//     signupError: null, // Store any signup errors
// };

// export const userReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case SIGNUP: {
//             const userExists = state.users.some(user => user.email === payload.email);

//             if (userExists) {
//                 return {
//                     ...state,
//                     signupError: "User already exists",
//                     loginError: null, // Clear any previous login errors
//                 };
//             }

//             return {
//                 ...state,
//                 users: [ ...state.users, payload ],
//                 user: payload,
//                 isLoggedIn: true,
//                 signupError: null, // Clear any signup errors
//                 loginError: null, // Clear any previous login errors
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
//                     loginError: null, // Clear any login errors
//                 };
//             } else {
//                 return {
//                     ...state,
//                     loginError: "Invalid email or password",
//                     signupError: null, // Clear any signup errors
//                 };
//             }
//         }

//         case LOGOUT: {
//             return {
//                 ...state,
//                 user: {}, // Clear the current user
//                 isLoggedIn: false, // Update login status
//                 loginError: null, // Clear any login errors
//                 signupError: null, // Clear any signup errors
//             };
//         }

//         default:
//             return state;
//     }
// };



// userReducer.js
import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

const initialState = {
    users: [], // This can be empty initially; users will be fetched from the API
    user: {}, // Store the currently logged-in user
    isLoggedIn: false,
    loginError: null,
    signupError: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUP: {
            return {
                ...state,
                users: [ ...state.users, payload ],
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
