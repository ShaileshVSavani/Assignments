import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    reducers: {
        createUser: (state, { payload }) => {
            state.users.push(payload)

        },
        deleteUser: (state, { payload }) => {
            state.users.splice(payload, 1)
        }
        ,
        updateUser: (state, { payload }) => {

            state.users[payload.index] = payload.user
        }

    }
})

export const {createUser, updateUser,deleteUser} = userSlice.actions

export const user=userSlice.reducer
