import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "http://localhost:3000";
export const getUsers = createAsyncThunk("/users", async () => {
    let res = await axios.get(`${baseUrl}/users`);
    return res.data;
});

export const createUser = createAsyncThunk("/createUser", async (user) => {
    let res = await axios.post(`${baseUrl}/users`, user);
    return res.data;
});

const userSliceApi = createSlice({
    name: "userApi",
    initialState: {
        users: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false
        }
        )
        builder.addCase(getUsers.rejected, (state, action) => {
            console.log(action.payload);

        })

        // create
        builder.addCase(createUser.fulfilled, (state, action) => {
            console.log(action.payload,action);

            state.users.push(action.payload)
        });

    },
});


export const userApi = userSliceApi.reducer