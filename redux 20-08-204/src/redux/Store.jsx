import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { counterReducer } from "./counter/CounterReducer";
import { userReducer } from "./users/UsersReducer";
import { BlogReducer } from "./blog/BlogReducer";
import { BlogApiReducer } from "./blogApi/BlogApiReducer";
import { thunk } from "redux-thunk";

// export const Store = legacy_createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const AllReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  blogs: BlogReducer,
  blogApi: BlogApiReducer,
});

// export const Store = legacy_createStore(
//   AllReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(
  AllReducer,
  composeEnhancers(applyMiddleware(thunk))
);
