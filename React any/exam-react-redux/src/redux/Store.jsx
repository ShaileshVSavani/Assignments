import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import StudentReducer from "./StudentReducer";
import { thunk } from "redux-thunk";

let AllReducers = combineReducers(
    {
        Student: StudentReducer

    })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(AllReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;