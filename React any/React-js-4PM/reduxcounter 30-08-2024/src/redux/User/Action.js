import { LOGIN, LOGOUT, SIGNUP } from "./ActionType"

export const createUser = (user) => {
    return {
        type: SIGNUP,
        payload: user
    }
}

export const LoginUser = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const LogoutUser = () => {
    return {
        type: LOGOUT
    }
}