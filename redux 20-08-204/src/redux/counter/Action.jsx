import {  DECREASE, INCREASE, RESET } from "./Actiontype"

export const increase = () =>{
    return {
        type: INCREASE
    }
}

export const decrease = () =>{
    return {
        type: DECREASE
    }
}

export const reset = () =>{
    return {
        type: RESET
    }
    
}