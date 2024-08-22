import { DECREASE, INCREASE, RESET } from "./Actiontype";

const initialState = {
    count: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, count: state.count + 1 }
        case DECREASE:
            return { ...state, count: state.count - 1 }
        case RESET:
            return {...state, count:0}
        default:
            return state;
    }

}