import { createSlice } from '@reduxjs/toolkit'
import { getPostData } from '../Action/action';
export const FirstPost = createSlice({
    name: 'FirstPost',
    initialState: {
        data: [],
        isSuccess: false,
        message: '',
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getPostData.pending]: (state, { payload }) => {
            state.loading = true
        },
        [getPostData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getPostData.rejected]: (state, { payload }) => {
            state.loading = false;
            state.isSuccess = false;
            state.message = "failed";
            // console.log("extra", payload)
        }
    }
})
export default FirstPost;