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



import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

const initialState = {
    users: [],
    user: {},
    isLoggedIn: false
};

export const userReducer = (state = initialState, { type, payload }) => { 
    switch (type) { 
        case SIGNUP:
            return { 
                ...state, 
                users: [ ...state.users, payload ], 
                user: payload, 
                isLoggedIn: true // Assuming signup also logs in the user
            };
        case LOGOUT:
            return { 
                ...state, 
                user: {}, 
                isLoggedIn: false 
            };
        case LOGIN: {
            let userCredentials = state.users.find(
                ele => ele.email === payload.email && ele.password === payload.password
            );
            if (userCredentials) {
                return { 
                    ...state, 
                    user: userCredentials, 
                    isLoggedIn: true 
                };
            } else {
                return state;
            }
        }  
        default:
            return state;
    }
};
