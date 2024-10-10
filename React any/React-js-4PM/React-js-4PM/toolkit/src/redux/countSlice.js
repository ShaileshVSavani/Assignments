import { createSlice } from "@reduxjs/toolkit";

const Counter = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        add: (state, {payload}) => {
           
            state.count += payload;
        },
        remove: (state, {payload}) => {
            state.count -= payload;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});



export const { add, remove, reset } = Counter.actions

export const counterReducer = Counter.reducer