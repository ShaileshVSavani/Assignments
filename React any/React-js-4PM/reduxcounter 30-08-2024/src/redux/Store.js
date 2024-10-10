import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
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

export const Store = legacy_createStore(combineAllReducers,applyMiddleware[thunk], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())