import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



 const store = configureStore({
    reducer: {
         // Define your slice reducers here
        counter : counterSlice
        
    }
 })

 export default store;


