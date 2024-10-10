import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./countSlice";
import { user } from "./userSlice";
import { userApi } from "./userSliceApi";


export const Store = configureStore({
    reducer: {
        counter: counterReducer,
        users:user,
        userApi:userApi
    }
})