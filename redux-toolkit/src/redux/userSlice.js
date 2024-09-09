import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users : [],
    },
    reducers: {
        addUser :(state, {payload})=>{
            state.users.push(payload)
        },
        deleteUser :(state, {payload})=>{
            state.users = state.users.filter(user => user.id!==payload)
            // state.users.splice(payload, 1)
        },
        updateUser :(state, {payload})=>{
            const index = state.users.findIndex(user => user.id === payload.id);
            if(index>-1){
                state.users[index] = payload
            }
        }
    }
    
})

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export const userReducer = userSlice.reducer;