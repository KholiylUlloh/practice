import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "counter",
    initialState: 0,
    reducers:{
        increament: (state)=>{
            return state + 1
        },
        decreament: (state)=>{
            if(state > 0){
                return state - 1
            }else{
                return state;
            }
        }
    }
})

export const {increament, decreament} = counter.actions

export default counter.reducer;