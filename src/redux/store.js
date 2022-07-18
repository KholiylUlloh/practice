import { configureStore } from "@reduxjs/toolkit";
import counter from './createSlice';
import user from './extraReducer';


const store = configureStore({
    reducer:{
        counter,
        user
    }
})

export default store;