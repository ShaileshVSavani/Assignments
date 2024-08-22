import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter/CounterReducer";
import { userReducer } from "./users/UsersReducer";


// export const Store = legacy_createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const Store = legacy_createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export const Store = combineReducers({
//     counter: counterReducer,
//     users : userReducer
// })