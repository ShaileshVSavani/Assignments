import { LOGIN, LOGOUT, SIGNUP } from "./ActionType"

export const UserSignUp = (user) => { 
    return {
        type: SIGNUP,
        payload: user
    }
}

export const UserLogin = (user) => { 
    return {
        type: LOGIN,
        payload: user
    }
}

export const UserLogout = () => { 
    return {
        type : LOGOUT
    }
}