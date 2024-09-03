
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
            if (payload.error) {
                return {
                    ...state,
                    signupError: payload.error,
                    loginError: null
                };
            } else {
                return {
                    ...state,
                    user: payload,
                    isLoggedIn: true,
                    signupError: null,
                    loginError: null
                };
            }
        }

        case LOGIN: {
            if (payload.error) {
                return {
                    ...state,
                    loginError: payload.error,
                    signupError: null
                };
            } else {
                return {
                    ...state,
                    user: payload,
                    isLoggedIn: true,
                    loginError: null,
                    signupError: null
                };
            }
        }

        case LOGOUT: {
            return {
                ...state,
                user: {}, 
                isLoggedIn: false,
                loginError: null,
                signupError: null
            };
        }

        default:
            return state;
    }
};
