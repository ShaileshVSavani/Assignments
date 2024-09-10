import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./counterSlice"
import { userReducer } from "./userSlice"
import { userApi } from "./userApiSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
        userApi: userApi
        
    }
   
})