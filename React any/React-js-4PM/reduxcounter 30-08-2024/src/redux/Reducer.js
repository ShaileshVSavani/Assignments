import { DECREASE, INCREASE, RESET } from "./ACtionType";

let initialState = {
    count: 0
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, count: state.count + 1 }

        case DECREASE:
            return { ...state, count: state.count - 1 }
        case RESET:
            return { ...state, count: 0 }
        default:
            return state
    }

}