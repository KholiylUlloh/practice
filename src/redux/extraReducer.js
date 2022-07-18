import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk('/post/getPost', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
});


const user = createSlice({
    name: "post",
    initialState: {value: [], status: 'no data'},
    extraReducers:{
        [getPost.pending]: (state, action) => {
            state.status = 'loading...';
        },
        [getPost.fulfilled]: (state, {payload}) => {
            state.value = payload;
            state.status = 'success';
        },
        [getPost.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }
})


export default user.reducer;