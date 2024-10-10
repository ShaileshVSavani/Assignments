import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { reducer } from "./Reducer";
import { UserReucer } from "./User/Reducer";
import { BlogReducer } from "./Blog/BlogReducer";
import { BlogReducerApi } from "./BlogApi/BlogReducers";
import { thunk } from "redux-thunk";
const combineAllReducers = combineReducers({
    counter: reducer,
    user: UserReucer,
    blogs: BlogReducer,
    blogApi: BlogReducerApi

})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const Store = legacy_createStore(combineAllReducers, composeEnhancers(applyMiddleware(thunk)))