import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

let initialState = {
    users: [],
    user: {},
    isLogin: false,
}

export const UserReucer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SIGNUP:

            return { ...state, users: [...state.users, payload], isLogin: true, user: payload }

        case LOGOUT:
            return { ...state, user: {}, isLogin: false }

        case LOGIN:
            let Founduser = state.users.find(ele => ele.email === payload.email && ele.password === payload.password)

            if (Founduser) {
                return { ...state, isLogin: true, user: Founduser }
            }
            else {
                return state
            }

        default:
            return state
    }

}