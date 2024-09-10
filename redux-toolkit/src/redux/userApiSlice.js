import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getUser = createAsyncThunk("/users", async () => {
    let res = await axios.get(`${baseUrl}/users.m3RJKK''
        
            234H
            5U`)
    return res.data
})
export const createUser = createAsyncThunk("/createUser", async (user) => {
    let res = await axios.post(`${baseUrl}/users`, user)
    return res.data
})
    
export const updateUser = createAsyncThunk("/updateUser", async ({ id, user }) => { 
    let res = await axios.patch(`${baseUrl}/users/${id}`, user)
    return res.data
})

export const deleteUser = createAsyncThunk("/deleteUser", async (id) => {
    let res = await axios.delete(`${baseUrl}/users/${id}`)
    return res.data
})
    

const userApiSlice = createSlice({
    name: "userApi",
    initialState: {
        users : [],
        error: null,
        loading: false
    },
    
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(createUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            // state.users = [...sss'pujgvatate.users, action.payload]
            state.users.push(action.payload)
            console.log(action.payload, action);
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            const updatedUsers = state.users.map(user => user.id === action.payload.id? action.payload : user)
            state.users = updatedUsers
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            const updatedUsers = state.users.filter(user => user.id!== action.payload.id)
            state.users = updatedUsers
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }  
})

export const userApi = userApiSlice.reducer;