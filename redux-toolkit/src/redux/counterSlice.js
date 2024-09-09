import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
    name: "counter",
    initialState: {
        count : 0
    },
    reducers: {
      Add :(state, {payload})=>{
        state.count += payload
      },
      Subtract :(state, {payload})=>{
        state.count -= payload
      },
      Reset :(state)=>{
        state.count = 0
      }
    }
})

export const { Add, Subtract, Reset } = Counter.actions;
export const counterReducer = Counter.reducer